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
          @click="onRemoveClick"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h2 class="h5 mt-0">
          {{ _header }}
          <span v-show="!!lastName && !!firstName">({{ lastName }}, {{ firstName }})</span>
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
              ref="salutation"
              v-model="salutation"
              :validated="validated"
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
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="firstName"
              v-model="firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="lastName"
              v-model="lastName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Last Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="otherNames"
              v-model="otherNames"
              :validated="validated"
              :language="language"
              :label="{ en: 'Other Name(s)' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnDatePickerField
              ref="dateOfBirth"
              v-model="dateOfBirth"
              :validated="validated"
              :language="language"
              :label="{ en: 'Date of Birth' }"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnDatePickerField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="gender"
              v-model="gender"
              :validated="validated"
              :language="language"
              :label="{ en: 'Gender' }"
              :options="[
                { text: { en: 'Male' }, value: 'Male' },
                { text: { en: 'Female' }, value: 'Female' }
              ]"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="socialInsurranceNumber"
              v-model="socialInsurranceNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Social Insurrance Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="maritalStatus"
              v-model="maritalStatus"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              ref="firstYearPppProvisionType"
              v-model="firstYearPppProvisionType"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="expectedYearOfRetirement"
              v-model="expectedYearOfRetirement"
              :validated="validated"
              :language="language"
              :label="{ en: 'Expected Year of Retirement' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="primaryEmailAddress"
              v-model="primaryEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Email Address' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="primaryEmailAddress"
              v-model="primaryEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Email Address' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="alternateEmailAddress"
              v-model="alternateEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Email Address' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="alternatePhoneNumber"
              v-model="alternatePhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Phone Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="street1"
              v-model="street1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 1' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="street2"
              v-model="street2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 2' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="street3"
              v-model="street3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 3' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="city"
              v-model="city"
              :validated="validated"
              :language="language"
              :label="{ en: 'City' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="province"
              v-model="province"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              ref="country"
              v-model="country"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="postalCode"
              v-model="postalCode"
              :validated="validated"
              :language="language"
              :label="{ en: 'Postal Code' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Buy Back of Past Service</h3>

        <b-form-row>
          <b-col cols="12">
            <JnCheckboxField
              ref="buyingBackPastService"
              v-model="buyingBackPastService"
              :validated="validated"
              :language="language"
              :label="{ en: 'Check this box if buying back past service' }"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnCheckboxField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="buyingBackPastService_yearsRecognized"
              v-model="buyingBackPastService_yearsRecognized"
              :validated="validated"
              :language="language"
              :label="{
                en:
                  'If checked, Indicate the year(s) or range(s) of years to be recognized'
              }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Spouse</h3>

        <b-form-row>
          <b-col cols="12" md="3">
            <JnSelectField
              ref="spouse_salutation"
              v-model="spouse_salutation"
              :validated="validated"
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
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="spouse_firstName"
              v-model="spouse_firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="spouse_lastName"
              v-model="spouse_lastName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Last Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnInputField
              ref="spouse_otherNames"
              v-model="spouse_otherNames"
              :validated="validated"
              :language="language"
              :label="{ en: 'Other Name(s)' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnDatePickerField
              ref="spouse_dateOfBirth"
              v-model="value.spouse_dateOfBirth"
              :validated="validated"
              :language="language"
              :label="{ en: 'Date of Birth' }"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnDatePickerField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="spouse_gender"
              v-model="spouse_gender"
              :validated="validated"
              :language="language"
              :label="{ en: 'Gender' }"
              :options="[
                { text: { en: 'Male' }, value: 'Male' },
                { text: { en: 'Female' }, value: 'Female' }
              ]"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5 mb-4">Beneficiary Designation</h3>

        <template v-for="({ key }, index) in beneficiaryDesignations">
          <IntegrisMemberEmployeeBeneficiary
            ref="beneficiaryDesignations"
            v-model="beneficiaryDesignations[index]"
            :key="key"
            :validated="validated"
            :language="language"
            class="mb-3"
            :header="{ en: `Beneficiary Designation #${index + 1}` }"
            :removable="beneficiaryDesignationRemovable"
            :totalshare="beneficiaryDesignation_totalShare"
            @remove="onRemoveBeneficiaryDesignation(index)"
            @input="onInput"
          ></IntegrisMemberEmployeeBeneficiary>
        </template>

        <b-form-row v-show="beneficiaryDesignation_totalShare > 0">
          <b-col cols="12" class="text-right">
            Total Shares:
            <strong>{{ beneficiaryDesignation_totalShare }}%</strong>
            <strong class="danger" v-show="beneficiaryDesignation_totalShare > 100">
              <br />Please note that Total Shares are greater than 100%
            </strong>
            <!-- <span class="d-none"
              >Need here so that the calculateTotal function gets executed
              however it doesn't want to show on screen so we need to hide it
              {{ calculateTotal }}</span
            >-->
            <!-- <FormField :name="prefixed.beneficiaryDesignation_totalShare" v-bind="commonBind"></FormField> -->
          </b-col>
        </b-form-row>

        <div v-if="beneficiaryDesignations.length < 5" class="my-3">
          <button
            class="btn btn-secondary btn-block"
            type="button"
            @click="onAddBeneficiaryDesignation"
          >
            <b-icon icon="plus-circle" class="mr-1"></b-icon>Add Beneficiary Designation
          </button>
        </div>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import uuidv4Mixin from '~/mixins/uuidv4'

export default {
  mixins: [localizeMixin, uuidv4Mixin],

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

  data() {
    return {
      salutation: this.value.salutation,
      firstName: this.value.firstName,
      lastName: this.value.lastName,
      otherNames: this.value.otherNames,
      dateOfBirth: this.value.dateOfBirth,
      gender: this.value.gender,
      socialInsurranceNumber: this.value.socialInsurranceNumber,
      maritalStatus: this.value.maritalStatus,
      firstYearPppProvisionType: this.value.firstYearPppProvisionType,
      expectedYearOfRetirement: this.value.expectedYearOfRetirement,
      primaryEmailAddress: this.value.primaryEmailAddress,
      primaryPhoneNumber: this.value.primaryPhoneNumber,
      alternateEmailAddress: this.value.alternateEmailAddress,
      alternatePhoneNumber: this.value.alternatePhoneNumber,
      street1: this.value.street1,
      street2: this.value.street2,
      street3: this.value.street3,
      city: this.value.city,
      province: this.value.province,
      country: this.value.country,
      postalCode: this.value.postalCode,
      buyingBackPastService: this.value.buyingBackPastService,
      buyingBackPastService_yearsRecognized: this.value
        .buyingBackPastService_yearsRecognized,
      spouse_salutation: this.value.spouse_salutation,
      spouse_firstName: this.value.spouse_firstName,
      spouse_lastName: this.value.spouse_lastName,
      spouse_otherNames: this.value.spouse_otherNames,
      spouse_dateOfBirth: this.value.spouse_dateOfBirth,
      spouse_gender: this.value.spouse_gender,
      beneficiaryDesignations: this.value.beneficiaryDesignations || [
        { key: this.uuidv4() }
      ]
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    },
    beneficiaryDesignationRemovable() {
      return this.beneficiaryDesignations.length > 1
    },
    beneficiaryDesignation_totalShare() {
      return this.beneficiaryDesignations.reduce((acc, cur) => {
        if (+cur.share) {
          acc = acc + cur.share
        }
        return acc
      }, 0)
    }
  },

  methods: {
    onRemoveClick() {
      this.$emit('remove')
    },
    onInput() {
      this.$emit('input', {
        key: this.value.key,
        salutation: this.salutation,
        firstName: this.firstName,
        lastName: this.lastName,
        otherNames: this.otherNames,
        dateOfBirth: this.dateOfBirth,
        gender: this.gender,
        socialInsurranceNumber: this.socialInsurranceNumber,
        maritalStatus: this.maritalStatus,
        firstYearPppProvisionType: this.firstYearPppProvisionType,
        expectedYearOfRetirement: this.expectedYearOfRetirement,
        primaryEmailAddress: this.primaryEmailAddress,
        primaryPhoneNumber: this.primaryPhoneNumber,
        alternateEmailAddress: this.alternateEmailAddress,
        alternatePhoneNumber: this.alternatePhoneNumber,
        street1: this.street1,
        street2: this.street2,
        street3: this.street3,
        city: this.city,
        province: this.province,
        country: this.country,
        postalCode: this.postalCode,
        buyingBackPastService: this.buyingBackPastService,
        buyingBackPastService_yearsRecognized: this
          .buyingBackPastService_yearsRecognized,
        spouse_salutation: this.spouse_salutation,
        spouse_firstName: this.spouse_firstName,
        spouse_lastName: this.spouse_lastName,
        spouse_otherNames: this.spouse_otherNames,
        spouse_dateOfBirth: this.spouse_dateOfBirth,
        spouse_gender: this.spouse_gender,
        beneficiaryDesignations: this.beneficiaryDesignations
      })
    },
    onRemoveBeneficiaryDesignation(index) {
      this.beneficiaryDesignations.splice(index, 1)
    },
    onAddBeneficiaryDesignation() {
      if (this.beneficiaryDesignations.length < 5) {
        this.beneficiaryDesignations.push({
          key: this.uuidv4()
        })
      }
    }
  }
}
</script>
