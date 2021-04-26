<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.provincialAuthority"
              :validated="validated"
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
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.productPlatform"
              :validated="validated"
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
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.normalRetirementAge"
              :validated="validated"
              :language="language"
              :label="{ en: 'Normal Retirement Age' }"
              type="number"
              :readonly="true"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.languageOfCorrespondence"
              :validated="validated"
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
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnSelectField
              v-model="value.requestFor"
              :validated="validated"
              :language="language"
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
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6" lg="9">
            <JnInputField
              v-model="value.existingPlanName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Existing Plan Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.existingCraPlanNo"
              :validated="validated"
              :language="language"
              :label="{ en: 'Existing CRA Plan No' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizer from '~/mixins/localizer'

export default {
  mixins: [localizer],

  props: {
    validated: {
      type: Boolean,
      default: true
    },
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    this.value.provincialAuthority = this.value.provincialAuthority || 'Ontario'
    this.value.productPlatform = this.value.productPlatform || 'Insurrance (iA)'
    this.value.normalRetirementAge = this.value.normalRetirementAge || 65
    this.value.languageOfCorrespondence = this.value.languageOfCorrespondence || 'English'
    this.value.requestFor = this.value.requestFor || 'Setup of a new PPP\u00AE'

    return {
      header: { en: 'Personal Pension Plan (PPP) Setup' }
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  }
}
</script>
