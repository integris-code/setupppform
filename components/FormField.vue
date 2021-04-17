<template>
  <b-form-checkbox
    v-if="options.type === 'checkbox'"
    v-model="value"
    :readonly="options.readonly"
    :state="validationDisplay.state"
    :value="options.value"
    @input="onInput"
    >{{ options.label }}</b-form-checkbox
  >
  <b-form-group
    v-else
    :label="options.label"
    :state="validationDisplay.state"
    :valid-feedback="validationDisplay.validFeedback"
    :invalid-feedback="validationDisplay.invalidFeedback"
  >
    <template v-if="options.type === 'select'">
      <b-form-select
        v-model="value"
        :options="options.choices"
        :readonly="options.readonly"
        :state="validationDisplay.state"
        @input="onInput"
      ></b-form-select>
    </template>

    <template v-else-if="options.type === 'radio-group'">
      <b-form-radio-group
        v-model="value"
        :options="options.choices"
        :readonly="options.readonly"
        :state="validationDisplay.state"
        @input="onInput"
      ></b-form-radio-group>
    </template>

    <template v-else-if="options.type === 'checkbox-group'">
      <b-form-checkbox-group
        v-model="value"
        class="checkbox-group"
        :options="options.choices"
        :readonly="options.readonly"
        :state="validationDisplay.state"
        @input="onInput"
      ></b-form-checkbox-group>
    </template>

    <template v-else-if="options.type === 'datepicker'">
      <b-form-datepicker
        v-model="value"
        :readonly="options.readonly"
        :state="validationDisplay.state"
        @input="onInput"
      ></b-form-datepicker>
    </template>

    <template v-else>
      <b-form-input
        v-model="value"
        :type="options.type"
        :readonly="options.readonly"
        :state="validationDisplay.state"
        @input="onInput"
      ></b-form-input>
    </template>
  </b-form-group>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default() {
        return this.$localize_defaultlanguage
      },
    },
    validated: {
      type: Boolean,
      default: false,
    },
    values: {
      type: Object,
      default() {
        return {}
      },
    },
    fields: {
      type: Object,
      default() {
        return {}
      },
    },
    name: {
      type: String,
      default: 'unnamed',
    },
  },
  data() {
    const type = this.fields[this.name].type || 'text'

    let defaultValue = this.fields[this.name].defaultValue
    if (defaultValue === undefined) {
      if (type === 'checkbox-group') {
        defaultValue = []
      } else {
        defaultValue = null
      }
    }

    if (typeof this.values[this.name] === 'undefined') {
      this.$set(this.values, this.name, defaultValue)
    }

    return {
      value: this.values[this.name] || '',
      options: {
        label: this.$localize(
          this.fields[this.name].label || 'Unlabelled',
          this.language
        ),
        type,
        choices: this.$localize(
          this.fields[this.name].choices || [],
          this.language
        ),
        readonly: this.fields[this.name].readonly || false,
        validators: this.fields[this.name].validators || {},
      },
    }
  },

  computed: {
    validation() {
      return this.$validate(this.options, this.values, this.name)
    },
    validationDisplay() {
      if (!this.validated) {
        return { state: null }
      }
      return this.validation
    },
  },

  methods: {
    onInput(value) {
      this.values[this.name] = value // eslint-disable-line vue/no-mutating-props
    },
  },
}
</script>

<style>
div[role='radiogroup'] {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0 0.375rem 0.75rem;
}

div.checkbox-group[role='group'] {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0 0.375rem 0.75rem;
}

.is-valid div.checkbox-group[role='group'] {
  border-color: #28a745;
}

.is-invalid div.checkbox-group[role='group'] {
  border-color: #dc3545;
}
</style>
