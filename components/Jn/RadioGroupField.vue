<template>
  <b-form-group
    :label="_label"
    :state="_validation.state"
    :invalid-feedback="_validation.invalidFeedback"
    :valid-feedback="_validation.validFeedback"
  >
    <b-form-radio-group
      v-model="model"
      :options="_options"
      :readonly="readonly"
      :state="_validation.state"
      @input="onInput"
    ></b-form-radio-group>
  </b-form-group>
</template>

<script>
import localizer from '~/mixins/localizer'
import validator from '~/mixins/validator'

export default {
  mixins: [localizer, validator],

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
      default: null
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
      return this.localize(this.options)
    },
    _validation() {
      return this.localize(this.validation)
    }
  },

  methods: {
    onInput(value) {
      this.$emit('input', value)
    }
  }
}
</script>

<style>
div[role='radiogroup'] {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0 0.375rem 0.75rem;
}
</style>
