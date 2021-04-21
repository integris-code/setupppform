export default {
  props: {
    language: {
      type: String,
      default: 'en'
    }
  },

  methods: {
    localize(value) {
      const languages = ['en', 'fr']

      if (value && typeof value === 'object') {
        if (Object.keys(value).every((key) => languages.includes(key))) {
          value = value[this.language] || value['en'] || value
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
