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
        notEmpty: notEmptyValidator
      } = this.validators

      if (notEmptyValidator) {
        const {
          invalidFeedback = {
            en: 'Cannot be empty'
          },
          trim = false
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
