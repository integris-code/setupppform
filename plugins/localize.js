export default (context, inject) => {
  const languages = [
    {
      text: {
        en: 'English',
        fr: 'Anglais',
      },
      value: 'en',
    },
    {
      text: {
        en: 'French',
        fr: 'Français',
      },
      value: 'fr',
    },
  ]
  inject('localize_languages', languages)

  const defaultLanguageValue = 'en'
  inject('localize_defaultlanguage', defaultLanguageValue)

  function localize(
    value,
    language = defaultLanguageValue,
    { defaultLanguage = defaultLanguageValue } = {}
  ) {
    if (value && typeof value === 'object') {
      if (languages.some((language) => language.value in value)) {
        return value[language] || value[defaultLanguage]
      }

      for (const key in value) {
        value[key] = localize(value[key], language)
      }
    }

    return value
  }
  inject('localize', localize)
}
