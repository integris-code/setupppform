<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6">
        <FormField :name="prefixed.firstName" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.lastName" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.title" v-bind="commonBind"></FormField>
      </b-col>
      <b-col cols="12" md="6">
        <FormField :name="prefixed.companyName" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.emailAddress" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.phoneNumber" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.faxNumber" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>
  </b-card>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default() {
        return this.$localize_defaultlanguage
      }
    },
    validated: {
      type: Boolean,
      default: false
    },
    values: {
      type: Object,
      default() {
        return {}
      }
    },
    header: {
      type: String,
      default: 'Untitled'
    },
    prefix: {
      type: String,
      default: ''
    }
  },
  data() {
    const prefixer = this.$prefixer(this.prefix)
    return {
      fields: {
        [prefixer.set('firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('title')]: {
          label: 'Title',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('companyName')]: {
          label: 'Company Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('emailAddress')]: {
          label: 'Email Address',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('phoneNumber')]: {
          label: 'Phone Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('faxNumber')]: {
          label: 'Fax Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        }
      },
      prefixed: prefixer.prefixed
    }
  },
  computed: {
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
        fields: this.fields
      }
    }
  },
  methods: {
    getValidations() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        acc[cur] = this.$refs[cur].validation
        return acc
      }, {})
    }
  }
}
</script>
