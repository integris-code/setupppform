<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6">
        <FormField :name="prefixed.firstName" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.lastName" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.title" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.primaryEmailAddress" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.primaryPhoneNumber" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.faxNumber" v-bind="commonBind"></FormField>
      </b-col>
      <b-col cols="12">
        <FormField :name="prefixed.street1" v-bind="commonBind"></FormField>
      </b-col>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.street2" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.street3" v-bind="commonBind"></FormField>
      </b-col>
      <b-col cols="12" md="6">
        <FormField :name="prefixed.city" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.province" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.country" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6">
        <FormField :name="prefixed.postalCode" v-bind="commonBind"></FormField>
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
        [prefixer.set('primaryEmailAddress')]: {
          label: 'Primary Email Address',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('primaryPhoneNumber')]: {
          label: 'Primary Phone Number',
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
        },
        [prefixer.set('street1')]: {
          label: 'Street 1',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('street2')]: {
          label: 'Street 2',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('street3')]: {
          label: 'Street 3',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('city')]: {
          label: 'City',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('province')]: {
          label: 'Province',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Alberta',
            'British Columbia',
            'Manitoba',
            'New Brunswick',
            'Newfoundland & Labrador',
            'Northwest Teritories',
            'Nova Scotia',
            'Nunavut',
            'Ontario',
            'Prince Edward Island',
            'Québec',
            'Saskatchewan',
            'Yukon'
          ],
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('country')]: {
          label: 'Country',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Canada',
            'United States'
          ],
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('postalCode')]: {
          label: 'Postal Code',
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
