export default {
  props: {
    validated: {
      type: Boolean,
      default: true
    },
    validatorValidFeedback: {
      type: [String, Object],
      default: null
    },
    betweenValidator: {
      type: Object,
      value: null
    },
    callbackValidator: {
      type: Object,
      value: null
    },
    notEmptyValidator: {
      type: [Boolean, Object],
      value: false
    },
    regexValidator: {
      type: Object,
      value: null
    },
    value: {
      type: [Boolean, Number, String, Object, Array],
      value: null
    }
  },

  computed: {
    validation() {
      if (!this.validated) {
        return {
          state: null,
          invalidFeedback: null,
          validFeedback: null
        }
      }

      const value = this.value

      // BETWEEN VALIDATOR
      if (this.betweenValidator && value != null && !isNaN(value)) {
        const numValue = +value
        const {
          inclusive = false,
          min,
          max,
          invalidFeedback = {
            en: `Must be between ${min} and ${max}${inclusive ? ' (Inclusive)' : ''}`
          }
        } = this.betweenValidator

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
      if (this.callbackValidator) {
        const {
          callback,
          invalidFeedback = {
            en: 'Invalid value'
          }
        } = this.callbackValidator

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
      if (this.notEmptyValidator) {

        const {
          trim = false,
          invalidFeedback = {
            en: 'Cannot be empty'
          }
        } = typeof this.notEmptyValidator === 'object' ? this.notEmptyValidator : {}

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

      // REGEX VALIDATOR
      if (this.regexValidator && value && typeof value === 'string') { }

      // SUCCESSFUL VALIDATION
      return {
        state: true,
        invalidFeedback: null,
        validFeedback: this.validFeedback
      }
    }
  }
}
