<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <b-button
          variant="danger"
          size="sm"
          v-if="removable"
          class="float-right"
          type="button"
          @click="$emit('remove')"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h2 class="h5 mt-0">
          {{ _header }}
          <span v-show="!!value.lastName && !!value.firstName"
            >({{ value.lastName }}, {{ value.firstName }})</span
          >
        </h2>

        <p class="text-muted mb-0">
          A plan member can be an employee or anyone receiving a T4 income from
          one of the sponsoring companies.
        </p>
      </template>

      <b-card-body>
        <b-form-row>
          <b-col cols="12" md="6" lg="3">
            <JnSelectField
              v-model="value.salutation"
              :validated="validated"
              :language="language"
              :label="{ en: 'Salutation' }"
              :options="[
                { text: { en: 'Mr' }, value: 'Mr' },
                { text: { en: 'Ms' }, value: 'Ms' },
                { text: { en: 'Dr' }, value: 'Dr' },
                { text: { en: 'Mrs' }, value: 'Mrs' }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.lastName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Last Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              v-model="value.otherNames"
              :validated="validated"
              :language="language"
              :label="{ en: 'Other Name(s)' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnDatePickerField
              v-model="value.dateOfBirth"
              :validated="validated"
              :language="language"
              :label="{ en: 'Date of Birth' }"
              :not-empty-validator="true"
            ></JnDatePickerField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.gender"
              :validated="validated"
              :language="language"
              :label="{ en: 'Gender' }"
              :options="[
                { text: { en: 'Male' }, value: 'Male' },
                { text: { en: 'Female' }, value: 'Female' }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.socialInsurranceNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Social Insurrance Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.maritalStatus"
              :validated="validated"
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
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.firstYearPppProvisionType"
              :validated="validated"
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
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.expectedYearOfRetirement"
              :validated="validated"
              :language="language"
              :label="{ en: 'Expected Year of Retirement' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.primaryEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Email Address' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.primaryEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Email Address' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.alternateEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Email Address' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.alternatePhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              v-model="value.street1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 1' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.street2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 2' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.street3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 3' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.city"
              :validated="validated"
              :language="language"
              :label="{ en: 'City' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.province"
              :validated="validated"
              :language="language"
              :label="{ en: 'Province' }"
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
                }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.country"
              :validated="validated"
              :language="language"
              :label="{ en: 'Country' }"
              :options="[
                {
                  text: { en: 'Canada' },
                  value: 'Canada'
                },
                {
                  text: { en: 'United States' },
                  value: 'United States'
                }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.postalCode"
              :validated="validated"
              :language="language"
              :label="{ en: 'Postal Code' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Buy Back of Past Service</h3>

        <b-form-row>
          <b-col cols="12">
            <JnCheckboxField
              v-model="value.buyingBackPastService"
              :validated="validated"
              :language="language"
              :label="{ en: 'Check this box if buying back past service' }"
              :not-empty-validator="true"
            ></JnCheckboxField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              v-model="value.buyingBackPastService_yearsRecognized"
              :validated="validated"
              :language="language"
              :label="{
                en:
                  'If checked, Indicate the year(s) or range(s) of years to be recognized'
              }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Spouse</h3>

        <b-form-row>
          <b-col cols="12" md="3">
            <JnSelectField
              v-model="value.spouse_salutation"
              :validated="validated"
              :language="language"
              :label="{ en: 'Salutation' }"
              :options="[
                { text: { en: 'Mr' }, value: 'Mr' },
                { text: { en: 'Ms' }, value: 'Ms' },
                { text: { en: 'Dr' }, value: 'Dr' },
                { text: { en: 'Mrs' }, value: 'Mrs' }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.spouse_firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.spouse_lastName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Last Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              v-model="value.spouse_otherNames"
              :validated="validated"
              :language="language"
              :label="{ en: 'Other Name(s)' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnDatePickerField
              v-model="value.spouse_dateOfBirth"
              :validated="validated"
              :language="language"
              :label="{ en: 'Date of Birth' }"
              :not-empty-validator="true"
            ></JnDatePickerField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.spouse_gender"
              :validated="validated"
              :language="language"
              :label="{ en: 'Gender' }"
              :options="[
                { text: { en: 'Male' }, value: 'Male' },
                { text: { en: 'Female' }, value: 'Female' }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5 mb-4">Beneficiary Designation</h3>

        <template v-for="({ key }, index) in value.beneficiaryDesignations">
          <IntegrisMemberEmployeeBeneficiary
            :key="key"
            :validated="validated"
            :language="language"
            class="mb-3"
            :header="{ en: `Beneficiary Designation #${index + 1}` }"
            :removable="beneficiaryDesignationRemovable"
            :total-share="beneficiaryDesignationsTotalShare"
            :value="value.beneficiaryDesignations[index]"
            @remove="onRemoveBeneficiaryDesignation(index)"
          ></IntegrisMemberEmployeeBeneficiary>
        </template>

        <b-form-row v-show="beneficiaryDesignationsTotalShare > 0">
          <b-col cols="12" class="text-right">
            Total Shares:
            <strong>{{ beneficiaryDesignationsTotalShare }}%</strong>
            <strong
              class="danger"
              v-show="beneficiaryDesignationsTotalShare > 100"
            >
              <br />Please note that Total Shares are greater than 100%
            </strong>
          </b-col>
        </b-form-row>

        <div v-if="value.beneficiaryDesignations.length < 5" class="my-3">
          <button
            class="btn btn-secondary btn-block"
            type="button"
            @click="onAddBeneficiaryDesignation"
          >
            <b-icon icon="plus-circle" class="mr-1"></b-icon>
            Add Beneficiary Designation
          </button>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import keymaker from '~/mixins/keymaker'
import localizer from '~/mixins/localizer'

export default {
  mixins: [keymaker, localizer],

  props: {
    validated: {
      type: Boolean,
      default: true
    },
    header: {
      type: [String, Object],
      default: null
    },
    removable: {
      type: Boolean,
      default: false
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
    },
    beneficiaryDesignationRemovable() {
      return this.value.beneficiaryDesignations.length > 1
    },
    beneficiaryDesignationsTotalShare() {
      return this.value.beneficiaryDesignations.reduce((acc, cur) => {
        if (cur.share != null && !isNaN(cur.share)) {
          acc = acc + +cur.share
        }
        return acc
      }, 0)
    }
  },

  methods: {
    onRemoveBeneficiaryDesignation(index) {
      this.value.beneficiaryDesignations.splice(index, 1)
    },
    onAddBeneficiaryDesignation() {
      this.value.beneficiaryDesignations.push({
        key: this.makeKey()
      })
    }
  }
}
</script>
