export default {
  props: {
    value: {
      type: [Number, String, Array],
      default: null
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

        if (this.value == null || this.value === '' ||
          (trim && typeof this.value === string && this.value.trim() === '') ||
          (Array.isArray(this.value) && this.value.length === 0)) {

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
