<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h2 class="h5">{{ _header }}</h2>

        <p class="text-muted mb-0">
          A plan member can be an employee or anyone receiving a T4 income from
          one of the sponsoring companies.
        </p>
      </template>

      <b-card-body>
        <b-form-row>
          <b-col cols="12" md="6" lg="3">
            <JnSelectField
              ref="salutation"
              v-model="value.salutation"
              :language="language"
              :label="{ en: 'Salutation' }"
              :options="[
                { text: { en: 'Mr' }, value: 'Mr' },
                { text: { en: 'Ms' }, value: 'Ms' },
                { text: { en: 'Dr' }, value: 'Dr' },
                { text: { en: 'Mrs' }, value: 'Mrs' }
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
              ref="firstName"
              v-model="value.firstName"
              :label="{ en: 'First Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="lastName"
              v-model="value.lastName"
              :label="{ en: 'Last Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="otherNames"
              v-model="value.otherNames"
              :label="{ en: 'Other Name(s)' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnDatePickerField
              ref="dateOfBirth"
              v-model="value.dateOfBirth"
              :label="{ en: 'Date of Birth' }"
              :validators="{
                notEmpty: {}
              }"
            ></JnDatePickerField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="gender"
              v-model="value.gender"
              :language="language"
              :label="{ en: 'Gender' }"
              :options="[
                { text: { en: 'Male' }, value: 'Male' },
                { text: { en: 'Female' }, value: 'Female' }
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
              ref="socialInsurranceNumber"
              v-model="value.socialInsurranceNumber"
              :label="{ en: 'Social Insurrance Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="maritalStatus"
              v-model="value.maritalStatus"
              :language="language"
              :label="{ en: 'Marital Status' }"
              :options="[
                { text: { en: 'Single' }, value: 'Single' },
                { text: { en: 'Married' }, value: 'Married' },
                {
                  text: { en: 'Common-Law/Civily United' },
                  value: 'Common-Law/Civily United'
                },
                { text: { en: 'Separated' }, value: 'Separated' },
                { text: { en: 'Divorced' }, value: 'Divorced' },
                { text: { en: 'Widowed' }, value: 'Widowed' }
              ]"
              :validators="{
                notEmpty: {}
              }"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              ref="firstYearPppProvisionType"
              v-model="value.firstYearPppProvisionType"
              :language="language"
              :label="{ en: 'First Year PPP Provision Type' }"
              :options="[
                {
                  text: { en: 'Defined Benefit (DB)' },
                  value: 'Defined Benefit (DB)'
                },
                {
                  text: { en: 'Defined Contribution (DC)' },
                  value: 'Defined Contribution (DC)'
                }
              ]"
              :validators="{
                notEmpty: {}
              }"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField></JnInputField>
          </b-col>
        </b-form-row>

        <h3 class="h5">Buy Back of Past Service</h3>

        <b-form-row>
          <b-col cols="12">
            <JnCheckboxField
              ref="buyingBackPastService"
              v-model="value.buyingBackPastService"
              :label="{ en: 'Check this box if buying back past service' }"
              :validators="{
                notEmpty: {}
              }"
            ></JnCheckboxField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="buyingBackPastService_yearsRecognized"
              v-model="value.buyingBackPastService_yearsRecognized"
              :label="{
                en:
                  'If checked, Indicate the year(s) or range(s) of years to be recognized'
              }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h3 class="h5">Spouse</h3>

        <b-form-row>
          <b-col cols="12" md="3">
            <JnSelectField
              ref="spouse_salutation"
              v-model="value.spouse_salutation"
              :language="language"
              :label="{ en: 'Salutation' }"
              :options="[
                { text: { en: 'Mr' }, value: 'Mr' },
                { text: { en: 'Ms' }, value: 'Ms' },
                { text: { en: 'Dr' }, value: 'Dr' },
                { text: { en: 'Mrs' }, value: 'Mrs' }
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
              ref="spouse_firstName"
              v-model="value.spouse_firstName"
              :label="{ en: 'First Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="spouse_lastName"
              v-model="value.spouse_lastName"
              :label="{ en: 'Last Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="spouse_otherNames"
              v-model="value.spouse_otherNames"
              :label="{ en: 'Other Name(s)' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnDatePickerField
              ref="spouse_dateOfBirth"
              v-model="value.spouse_dateOfBirth"
              :label="{ en: 'Date of Birth' }"
              :validators="{
                notEmpty: {}
              }"
            ></JnDatePickerField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="spouse_gender"
              v-model="value.spouse_gender"
              :language="language"
              :label="{ en: 'Gender' }"
              :options="[
                { text: { en: 'Male' }, value: 'Male' },
                { text: { en: 'Female' }, value: 'Female' }
              ]"
              :validators="{
                notEmpty: {}
              }"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <h3 class="h5 mb-4">Beneficiary Designation</h3>
      </b-card-body>
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
        let refs = this.$refs[cur]
        if (!Array.isArray(refs)) {
          refs = [refs]
        }

        acc[cur] = []
        for (let index = 0, length = refs.length; index < length; index++) {
          const ref = refs[index]
          if (ref.validate) {
            acc[cur].push(ref.validate())
          }
        }

        return acc
      }, {})
    }
  }
}
</script>
