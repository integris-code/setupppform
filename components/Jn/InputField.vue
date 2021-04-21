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
import localizeMixin from '~/mixins/localize'
import validationMixin from '~/mixins/validation'

export default {
  mixins: [localizeMixin, validationMixin],

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
    }
  },

  data() {
    return {
      model: this.value,
      validated: false
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
    },
    validate() {
      this.validated = true
      return this.localize(this.validation)
    }
  }
}
</script>
