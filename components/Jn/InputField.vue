<template>
  <b-form-group
    :label="_label"
    :state="_validation.state"
    :invalid-feedback="_validation.invalidFeedback"
    :valid-feedback="_validation.validFeedback"
  >
    <b-form-input
      v-model="model"
      :type="type"
      :readonly="readonly"
      :state="_validation.state"
      @input="onInput"
    ></b-form-input>
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
    type: {
      type: String,
      default: 'text'
    },
    readonly: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Number, String],
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
