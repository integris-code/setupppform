export default (context, inject) => {
  function validate(options, values, name) {
    const { label, validators = {} } = options
    const {
      validFeedback,
      between: betweenValidator,
      callback: callbackValidator,
      email: emailValidator,
      notEmpty: notEmptyValidator,
      phone: phoneValidator,
      postalCode: postalCodeValidator,
      regexp: regexpValidator,
    } = validators

    const value = values[name]

    // BETWEEN
    if (betweenValidator && typeof value === 'number') {
      const { invalidFeedback, min, max, inclusive = false } = betweenValidator
      if (
        inclusive
          ? !(value >= min && value <= max)
          : !(value > min && value < max)
      ) {
        return {
          state: false,
          invalidFeedback: invalidFeedback || `${label} must be between`,
        }
      }
    }

    // CALLBACK
    if (callbackValidator) {
      const {
        invalidFeedback: invalidFeedbackStatic,
        callback,
      } = callbackValidator
      const { state, invalidFeedback } = callback(value, values, name)
      if (!state) {
        return {
          state: false,
          invalidFeedback:
            invalidFeedback || invalidFeedbackStatic || `${label} is not valid`,
        }
      }
    }

    // EMAIL
    if (emailValidator && typeof value === 'string') {
      const { invalidFeedback } = emailValidator
      const regexp = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
      if (!regexp.test(value)) {
        return {
          state: false,
          invalidFeedback:
            invalidFeedback || `${label} is does not a valid email address`,
        }
      }
    }

    // NOT EMPTY
    if (notEmptyValidator) {
      const { invalidFeedback, trim = false } = notEmptyValidator

      if (
        value == null ||
        (typeof value === 'string' &&
          (trim ? value.trim() === '' : value === '')) ||
        (Array.isArray(value) && value.length === 0)
      ) {
        return {
          state: false,
          invalidFeedback: invalidFeedback || `${label} is required`,
        }
      }
    }

    // PHONE
    if (phoneValidator && typeof value === 'string') {
      const { invalidFeedback } = phoneValidator
      const regexp = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/
      if (!regexp.test(value)) {
        return {
          state: false,
          invalidFeedback:
            invalidFeedback || `${label} is does not a valid phone number`,
        }
      }
    }

    // POSTAL CODE
    if (postalCodeValidator && typeof value === 'string') {
      const { invalidFeedback } = postalCodeValidator
      const regexp = /^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$/
      if (!regexp.test(value)) {
        return {
          state: false,
          invalidFeedback:
            invalidFeedback || `${label} is does not a valid postal code`,
        }
      }
    }

    // REGEXP
    if (regexpValidator && typeof value === 'string') {
      const { invalidFeedback, regexp } = regexpValidator
      if (!regexp.test(value)) {
        return {
          state: false,
          invalidFeedback:
            invalidFeedback || `${label} is does not match the pattern`,
        }
      }
    }

    // PASSED
    if (validFeedback) {
      return {
        state: true,
        validFeedback,
      }
    }
    return {
      state: true,
    }
  }
  inject('validate', validate)
}
