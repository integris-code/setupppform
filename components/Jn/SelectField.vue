<template>
  <b-form-group
    :label="_label"
    :state="_validation.state"
    :invalid-feedback="_validation.invalidFeedback"
    :valid-feedback="_validation.validFeedback"
  >
    <b-form-select
      v-model="model"
      :options="_options"
      :readonly="readonly"
      :state="_validation.state"
      @input="onInput"
    ></b-form-select>
  </b-form-group>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import validationMixin from '~/mixins/validation'

export default {
  mixins: [localizeMixin, validationMixin],

  props: {
    label: {
      type: [String, Object],
      default: 'Unlabelled'
    },
    options: {
      type: [Object, Array],
      default() {
        return []
      }
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    }
  },

  data() {
    return {
      model: this.value
    }
  },

  computed: {
    _label() {
      return this.localize(this.label)
    },
    _options() {
      return this.localize([
        {
          text: { en: 'Select\u2026' },
          value: ''
        }
      ]).concat(this.localize(this.options))
    },
    _validation() {
      if (!this.validated) {
        return {
          state: null,
          invalidFeedback: null,
          validFeedback: null
        }
      }
      return this.localize(this.validation)
    }
  },

  methods: {
    onInput(value) {
      this.$emit('input', value)
    },
    validate() {
      this.validated = true
      return this.localize(this.validation)
    }
  }
}
</script>
