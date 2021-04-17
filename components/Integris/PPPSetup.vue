<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          ref="provincialAuthority"
          :name="prefixed.provincialAuthority"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          ref="productPlatform"
          :name="prefixed.productPlatform"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          ref="normalRetirementAge"
          :name="prefixed.normalRetirementAge"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          ref="languageOfCorrespondence"
          :name="prefixed.languageOfCorrespondence"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12">
        <FormField
          ref="requestFor"
          :name="prefixed.requestFor"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="9">
        <FormField
          ref="existingPlanName"
          :name="prefixed.existingPlanName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          ref="existingCraPlanNo"
          :name="prefixed.existingCraPlanNo"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12">
        <FormField
          ref="membersEmployeesParticipatingInThePlan"
          :name="prefixed.membersEmployeesParticipatingInThePlan"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12">
        <FormField
          ref="sponsorsEmployersParticipatingInThePlan"
          :name="prefixed.sponsorsEmployersParticipatingInThePlan"
          v-bind="commonBind"
        ></FormField>
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
    header: {
      type: String,
      default: 'Untitled',
    },
    prefix: {
      type: String,
      default: '',
    },
  },
  data() {
    const prefixer = this.$prefixer(this.prefix)
    return {
      fields: {
        [prefixer.set('provincialAuthority')]: {
          label: 'Provincial Authority',
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
            'Yukon',
            'Federal',
          ],
          defaultValue: 'Ontario',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('productPlatform')]: {
          label: 'Product Platform',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Insurrance (Assumption Life)',
            'Insurrance (Desjardins)',
            'Insurrance (iA)',
            'Trust - 3 Individual Trustees',
            'Trust - Corporate Trustees',
          ],
          defaultValue: 'Insurrance (iA)',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('normalRetirementAge')]: {
          label: 'Normal Retirement Age',
          type: 'number',
          readonly: true,
          defaultValue: 65,
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('languageOfCorrespondence')]: {
          label: 'Language of Correspondence',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }, 'English', 'French'],
          defaultValue: 'English',
          validators: {
            notEmpty: {
              invalidFeedback: this.$localize(
                { en: 'INVALID', fr: 'invalid fr' },
                this.language
              ),
            },
          },
        },
        [prefixer.set('requestFor')]: {
          label: 'This PPP Setup is for (select one)',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Setup of a new PPP\u00AE',
            'Conversion of an existing IPP to a PPP\u00AE',
            'Commutted Value Transfer from an existing Pension Plan to a new PPP\u00AE',
          ],
          defaultValue: 'Setup of a new PPP\u00AE',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('existingPlanName')]: {
          label: 'Existing Plan Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('existingCraPlanNo')]: {
          label: 'Existing CRA Plan No',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('membersEmployeesParticipatingInThePlan')]: {
          label: 'Member(s)/Employee(s) participating in the Plan',
          type: 'checkbox-group',
          choices: [
            { text: 'Member #1 (Primary)', value: 'Member #1' },
            'Member #2',
            'Member #3',
            'Member #4',
          ],
          defaultValue: ['Member #1'],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('sponsorsEmployersParticipatingInThePlan')]: {
          label: 'Sponsor(s)/Employer(s) participating in the Plan',
          type: 'checkbox-group',
          choices: [
            { text: 'Sponsor #1 (Primary)', value: 'Sponsor #1' },
            'Sponsor #2',
            'Sponsor #3',
          ],
          defaultValue: ['Sponsor #1'],
          validators: {
            notEmpty: {},
          },
        },
      },
      prefixed: prefixer.prefixed,
    }
  },
  computed: {
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
        fields: this.fields,
      }
    },
  },
  methods: {
    getValidations() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        acc[cur] = this.$refs[cur].validation
        return acc
      }, {})
    },
  },
}
</script>
