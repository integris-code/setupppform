export default {
  props: {
    valueProp: {
      type: String,
      default: 'value'
    },
    validFeedback: {
      type: [String, Object],
      default: null
    },
    validators: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    validation() {
      const value = this[this.valueProp]
      const {
        between: betweenValidator,
        callback: callbackValidator,
        notEmpty: notEmptyValidator
      } = this.validators

      // BETWEEN VALIDATOR
      if (betweenValidator && value != null && !isNaN(value)) {
        const numValue = +value
        const {
          inclusive = false,
          min,
          max,
          invalidFeedback = {
            en: `Must be between ${min} and ${max}${inclusive ? ' (Inclusive)' : ''}`
          }
        } = betweenValidator

        if ((inclusive && (numValue < min || numValue > max))
          || (!inclusive && (numValue <= min || numValue >= max))) {

          return {
            state: false,
            invalidFeedback,
            validFeedback: null
          }
        }
      }

      // CALLBACK VALIDATOR
      if (callbackValidator) {
        const {
          callback,
          invalidFeedback = {
            en: 'Invalid value'
          }
        } = callbackValidator

        let result = callback(value);
        if (typeof result === 'boolean') {
          result = { state: result }
        }

        if (result.state === false) {
          return {
            state: false,
            invalidFeedback: result.invalidFeedback || invalidFeedback,
            validFeedback: null
          }
        }
      }

      // NOT EMPTY VALIDATOR
      if (notEmptyValidator) {
        const {
          trim = false,
          invalidFeedback = {
            en: 'Cannot be empty'
          }
        } = notEmptyValidator

        if (value == null || value === '' || value === false ||
          (trim && typeof value === string && value.trim() === '') ||
          (Array.isArray(value) && value.length === 0)) {

          return {
            state: false,
            invalidFeedback,
            validFeedback: null
          }
        }
      }

      return {
        state: true,
        invalidFeedback: null,
        validFeedback: this.validFeedback
      }
    }
  }
}
