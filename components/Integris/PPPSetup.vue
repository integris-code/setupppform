<template>
  <div>
    <b-card :header="_header" header-tag="h2" header-class="h5">
      <b-form-row>
        <b-col cols="12" md="6">
          <JnSelectField
            ref="provincialAuthority"
            v-model="value.provincialAuthority"
            :language="language"
            :label="{ en: 'Provincial Authority' }"
            :options="[
              {
                text: { en: 'Alberta' },
                value: 'Alberta'
              },
              {
                text: { en: 'British Columbia' },
                value: 'British Columbia'
              },
              {
                text: { en: 'Manitoba' },
                value: 'Manitoba'
              },
              {
                text: { en: 'New Brunswick' },
                value: 'New Brunswick'
              },
              {
                text: { en: 'Newfoundland & Labrador' },
                value: 'Newfoundland & Labrador'
              },
              {
                text: { en: 'Northwest Teritories' },
                value: 'Northwest Teritories'
              },
              {
                text: { en: 'Nova Scotia' },
                value: 'Nova Scotia'
              },
              {
                text: { en: 'Nunavut' },
                value: 'Nunavut'
              },
              {
                text: { en: 'Ontario' },
                value: 'Ontario'
              },
              {
                text: { en: 'Prince Edward Island' },
                value: 'Prince Edward Island'
              },
              {
                text: { en: 'Québec' },
                value: 'Québec'
              },
              {
                text: { en: 'Saskatchewan' },
                value: 'Saskatchewan'
              },
              {
                text: { en: 'Yukon' },
                value: 'Yukon'
              },
              {
                text: { en: 'Federal' },
                value: 'Federal'
              }
            ]"
            :validators="{
              notEmpty: {}
            }"
          ></JnSelectField>
        </b-col>

        <b-col cols="12" md="6">
          <JnSelectField
            ref="productPlatform"
            v-model="value.productPlatform"
            :language="language"
            :label="{ en: 'Product Platform' }"
            :options="[
              {
                text: { en: 'Insurrance (Assumption Life)' },
                value: 'Insurrance (Assumption Life)'
              },
              // { text: { en: 'Insurrance (Desjardins)' }, value: 'Insurrance (Desjardins)' },
              {
                text: { en: 'Insurrance (iA)' },
                value: 'Insurrance (iA)'
              },
              {
                text: { en: 'Trust - 3 Individual Trustees' },
                value: 'Trust - 3 Individual Trustees'
              },
              {
                text: { en: 'Trust - Corporate Trustees' },
                value: 'Trust - Corporate Trustees'
              }
            ]"
            :validators="{
              notEmpty: {}
            }"
          ></JnSelectField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="6">
          <JnInputField
            ref="normalRetirementAge"
            v-model="value.normalRetirementAge"
            :language="language"
            :label="{ en: 'Normal Retirement Age' }"
            type="number"
            :readonly="true"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>

        <b-col cols="12" md="6">
          <JnSelectField
            ref="languageOfCorrespondence"
            v-model="value.languageOfCorrespondence"
            :language="language"
            :label="{ en: 'Language of Correspondence' }"
            :options="[
              {
                text: { en: 'English' },
                value: 'English'
              },
              {
                text: { en: 'French' },
                value: 'French'
              }
            ]"
            :validators="{
              notEmpty: {}
            }"
          ></JnSelectField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12">
          <JnSelectField
            ref="requestFor"
            v-model="value.requestFor"
            :label="{ en: 'This PPP Setup is for (select one)' }"
            :options="[
              {
                text: { en: 'Setup of a new PPP\u00AE' },
                value: 'Setup of a new PPP\u00AE'
              },
              {
                text: { en: 'Conversion of an existing IPP to a PPP\u00AE' },
                value: 'Conversion of an existing IPP to a PPP\u00AE'
              },
              {
                text: {
                  en:
                    'Commutted Value Transfer from an existing Pension Plan to a new PPP\u00AE'
                },
                value:
                  'Commutted Value Transfer from an existing Pension Plan to a new PPP\u00AE'
              }
            ]"
            :validators="{
              notEmpty: {}
            }"
          ></JnSelectField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="6" lg="9">
          <JnInputField
            ref="existingPlanName"
            v-model="value.existingPlanName"
            :label="{ en: 'Existing Plan Name' }"
            type="text"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>

        <b-col cols="12" md="6" lg="3">
          <JnInputField
            ref="existingCraPlanNo"
            v-model="value.existingCraPlanNo"
            :label="{ en: 'Existing CRA Plan No' }"
            type="text"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>
      </b-form-row>

      <b-form-row v-show="false">
        <b-col cols="12">
          <JnCheckboxGroupField
            ref="membersEmployeesParticipatingInThePlan"
            v-model="value.membersEmployeesParticipatingInThePlan"
            :label="{ en: 'Member(s)/Employee(s) participating in the Plan' }"
            :options="[
              { text: { en: 'Member #1 (Primary)' }, value: 'Member #1' },
              { text: { en: 'Member #2' }, value: 'Member #2' },
              { text: { en: 'Member #3' }, value: 'Member #3' },
              { text: { en: 'Member #4' }, value: 'Member #4' }
            ]"
            :validators="{
              notEmpty: {}
            }"
          ></JnCheckboxGroupField>
        </b-col>
      </b-form-row>

      <b-form-row v-show="false">
        <b-col cols="12">
          <JnCheckboxGroupField
            ref="sponsorsEmployersParticipatingInThePlan"
            v-model="value.sponsorsEmployersParticipatingInThePlan"
            :label="{ en: 'Sponsor(s)/Employer(s) participating in the Plan' }"
            :options="[
              { text: { en: 'Sponsor #1 (Primary)' }, value: 'Sponsor #1' },
              { text: { en: 'Sponsor #2' }, value: 'Sponsor #2' },
              { text: { en: 'Sponsor #3' }, value: 'Sponsor #3' }
            ]"
            :validators="{
              notEmpty: {}
            }"
          ></JnCheckboxGroupField>
        </b-col>
      </b-form-row>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'

export default {
  mixins: [localizeMixin],

  props: {
    header: {
      type: [String, Object],
      default: null
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  },

  methods: {
    validate() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        if (this.$refs[cur].validate) {
          acc[cur] = this.$refs[cur].validate()
        }
        return acc
      }, {})
    }
  }
}
</script>
