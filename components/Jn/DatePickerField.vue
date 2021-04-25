<template>
  <b-form-group
    :label="_label"
    :state="_validation.state"
    :invalid-feedback="_validation.invalidFeedback"
    :valid-feedback="_validation.validFeedback"
  >
    <b-form-datepicker
      v-model="model"
      :readonly="readonly"
      :state="_validation.state"
      @input="onInput"
    ></b-form-datepicker>
  </b-form-group>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import validationMixin from '~/mixins/validation'

export default {
  mixins: [localizeMixin, validationMixin],

  props: {
    validated: {
      type: Boolean,
      default: true
    },
    label: {
      type: [String, Object],
      default: 'Unlabelled'
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
    }
  }
}
</script>
