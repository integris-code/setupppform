<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.salutation" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.firstName" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.otherNames" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.lastName" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.dateOfBirth" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.gender" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.socialInsurranceNumber"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.maritalStatus"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.firstYearPppProvisionType"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.expectedYearOfRetirement"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.primaryEmailAddress"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.primaryPhoneNumber"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.alternateEmailAddress"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.alternatePhoneNumber"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12">
        <FormField :name="prefixed.street1" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.street2" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.street3" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.city" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.province" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.country" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.postalCode" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Buy Back of Past Service</h3>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.buyingBackPastService"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField
          :name="prefixed.buyingBackPastService_yearsRecognized"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Spouse</h3>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_dateOfBirth"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_gender"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Beneficiary Designation</h3>

    <h4 class="h6">Beneficiary Designation #1</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <h4 class="h6">Beneficiary Designation #2</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <h4 class="h6">Beneficiary Designation #3</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <h4 class="h6">Beneficiary Designation #4</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <h4 class="h6">Beneficiary Designation #5</h4>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_lastName"
          v-bind="commonBind"
        ></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_salutation"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_firstName"
          v-bind="commonBind"
        ></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField
          :name="prefixed.spouse_otherNames"
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
        [prefixer.set('salutation')]: {
          label: 'Salutation',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Mr',
            'Ms',
            'Dr',
            'Mrs',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('otherNames')]: {
          label: 'Other Name(s)',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('gender')]: {
          label: 'Gender',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }, 'Male', 'Female'],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('socialInsurranceNumber')]: {
          label: 'Social Insurrance Number',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('maritalStatus')]: {
          label: 'Marital Status',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Single',
            'Married',
            'Common-Law/Civily United',
            'Separated',
            'Divorced',
            'Widowed',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('firstYearPppProvisionType')]: {
          label: 'First Year PPP Provision Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Defined Benefit (DB)',
            'Defined Contribution (DC)',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('expectedYearOfRetirement')]: {
          label: 'Expected Year of Retirement',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('primaryEmailAddress')]: {
          label: 'Primary Email Address',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('primaryPhoneNumber')]: {
          label: 'Primary Phone Number',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('alternateEmailAddress')]: {
          label: 'Alternate Email Address',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('alternatePhoneNumber')]: {
          label: 'Alternate Phone Number',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('street1')]: {
          label: 'Street 1',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('street2')]: {
          label: 'Street 2',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('street3')]: {
          label: 'Street 3',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('city')]: {
          label: 'City',
          type: 'text',
          validators: {
            notEmpty: {},
          },
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
            'Yukon',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('country')]: {
          label: 'Country',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Canada',
            'United States',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('postalCode')]: {
          label: 'Postal Code',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('buyingBackPastService')]: {
          label: 'Check this box if buying back past service',
          type: 'checkbox',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('buyingBackPastService_yearsRecognized')]: {
          label:
            'If checked, indicate the year(s) or range(s) of years to be recognized',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_salutation')]: {
          label: 'Salutation',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Mr',
            'Ms',
            'Dr',
            'Mrs',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_otherNames')]: {
          label: 'Other Name(s)',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('spouse_gender')]: {
          label: 'Gender',
          type: 'select',
          choices: [{ text: 'Select\u2026', value: '' }, 'Male', 'Female'],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation1_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation1_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation2_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation2_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation3_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation3_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation4_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation4_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('beneficiaryDesignation5_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_dateOfBirth')]: {
          label: 'Date of Birth',
          type: 'datepicker',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_relationship')]: {
          label: 'Relationship',
          type: 'text',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_type')]: {
          label: 'Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Primary',
            'Contingent',
          ],
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_share')]: {
          label: 'Share %',
          type: 'number',
          validators: {
            notEmpty: {},
          },
        },
        [prefixer.set('beneficiaryDesignation5_revocability')]: {
          label: 'Revocability',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Revocable',
            'Irrevocable',
          ],
          validators: {
            notEmpty: {},
          },
        },

        [prefixer.set('field')]: {},
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
