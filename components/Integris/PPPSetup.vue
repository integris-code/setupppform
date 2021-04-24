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
              ref="provincialAuthority"
              v-model="provincialAuthority"
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
              @input="onInput"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="productPlatform"
              v-model="productPlatform"
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
              @input="onInput"
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
              v-model="normalRetirementAge"
              :language="language"
              :label="{ en: 'Normal Retirement Age' }"
              type="number"
              :readonly="true"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="languageOfCorrespondence"
              v-model="languageOfCorrespondence"
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
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnSelectField
              ref="requestFor"
              v-model="requestFor"
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
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6" lg="9">
            <JnInputField
              ref="existingPlanName"
              v-model="existingPlanName"
              :label="{ en: 'Existing Plan Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              ref="existingCraPlanNo"
              v-model="existingCraPlanNo"
              :label="{ en: 'Existing CRA Plan No' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import validateMixin from '~/mixins/validate'

export default {
  mixins: [localizeMixin, validateMixin],

  props: {
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      header: { en: 'Personal Pension Plan (PPP) Setup' },
      provincialAuthority: this.value.provincialAuthority || 'Ontario',
      productPlatform: this.value.productPlatform || 'Insurrance (iA)',
      normalRetirementAge: this.value.normalRetirementAge || 65,
      languageOfCorrespondence:
        this.value.languageOfCorrespondence || 'English',
      requestFor: this.value.requestFor || 'Setup of a new PPP\u00AE',
      existingPlanName: this.value.existingPlanName || '',
      existingCraPlanNo: this.value.existingCraPlanNo || ''
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  },

  methods: {
    onInput() {
      this.$emit('input', {
        provincialAuthority: this.provincialAuthority,
        productPlatform: this.productPlatform,
        normalRetirementAge: this.normalRetirementAge,
        languageOfCorrespondence: this.languageOfCorrespondence,
        requestFor: this.requestFor,
        existingPlanName: this.existingPlanName,
        existingCraPlanNo: this.existingCraPlanNo
      })
    }
  }
}
</script>
