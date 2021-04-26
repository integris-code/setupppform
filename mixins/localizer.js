const LANGUAGES = ['en', 'fr']

export default {
  props: {
    language: {
      type: String,
      default: LANGUAGES[0]
    }
  },

  methods: {
    localize(value) {
      if (value && typeof value === 'object') {
        if (Object.keys(value).every((key) => LANGUAGES.includes(key))) {
          value = value[this.language] || value[LANGUAGES[0]] || value
        } else {
          for (const key in value) {
            value[key] = this.localize(value[key])
          }
        }
      }

      return value
    }
  }
}
