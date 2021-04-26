<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <b-button
          v-if="removable"
          variant="danger"
          size="sm"
          class="float-right"
          type="button"
          @click="$emit('remove')"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h4 class="h5 mt-0">
          {{ _header }}
          <span v-show="!!value.companyName">({{ value.companyName }})</span>
        </h4>

        <p class="text-muted mb-0">
          A sponsor can be an employer/company that will be contributing to the
          plan member's pension plan.
        </p>
      </template>

      <b-card-body>
        <b-form-row>
          <b-col cols="12">
            <JnInputField
              v-model="value.companyName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Company Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.businessNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Business Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnDatePickerField
              v-model="value.incorporationDate"
              :validated="validated"
              :language="language"
              :label="{ en: 'Incorporation Date' }"
              :not-empty-validator="true"
            ></JnDatePickerField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.fiscalYearEnd"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fiscal Year End' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.payrollSubAccountNo"
              :validated="validated"
              :language="language"
              :label="{ en: 'Payroll Sub Account No' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.companyType"
              :validated="validated"
              :language="language"
              :label="{ en: 'Company Type' }"
              :options="[
                {
                  text: { en: 'Corporation (incorporated)' },
                  value: 'Corporation (incorporated)'
                },
                {
                  text: { en: 'Sole Proprietorship (unincorporated)' },
                  value: 'Sole Proprietorship (unincorporated)'
                },
                {
                  text: { en: 'Registered Not-For-Profit' },
                  value: 'Registered Not-For-Profit'
                },
                {
                  text: { en: 'Employee/Trade Association/Union' },
                  value: 'Employee/Trade Association/Union'
                },
                {
                  text: { en: 'Municipal Government/Agency/Corporation' },
                  value: 'Municipal Government/Agency/Corporation'
                },
                {
                  text: { en: 'Provincial Government/Agency/Corporation' },
                  value: 'Provincial Government/Agency/Corporation'
                },
                {
                  text: { en: 'Federal Government/Agency/Corporation' },
                  value: 'Federal Government/Agency/Corporation'
                }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.natureOfBusiness"
              :validated="validated"
              :language="language"
              :label="{ en: 'Nature of Business' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12">
            <JnSelectField
              v-model="value.naicsCode"
              :validated="validated"
              :language="language"
              :label="{ en: 'NAICS Code' }"
              :options="[
                '11 - Agricultural, forestry, fishing and hunting',
                '21 - Mining, quarring, and oil and gas extraction',
                '22 - Utilities',
                '23 - Construction',
                '31 - Manufacturing',
                '32 - Manufacturing',
                '33 - Manufacturing',
                '41 - Wholesale trade',
                '44 - Retail trade',
                '45 - Retail trade',
                '48 - Transportaion and warehousing',
                '49 - Transportaion and warehousing',
                '51 - Information and cultural industries',
                '52 - Finance and insurrance',
                '53 - Real estate and rental and leasing',
                '54 - Professional, scientific, and technical services',
                '55 - Management of companies and enterprises',
                '56 - Administration and support, waste management and remediation services',
                '61 - Education services',
                '62 - Health care and social assistance',
                '71 - Arts, entertainment and recreation',
                '72 - Accommodation and food services',
                '81 - Other services (except public administration)',
                '91 - Public administration'
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
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

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.phoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Contact Person</h3>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.contactPerson_firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.contactPerson_lastName"
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
              v-model="value.contactPerson_title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.contactPerson_primaryPhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.contactPerson_faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.contactPerson_alternateEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Email Address' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.contactPerson_alternatePhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Authorized Signing Officer</h3>

        <b-form-row>
          <b-col cols="12">
            <JnCheckboxField
              v-model="value.authorizedSigningOfficer_sameAsContactPerson"
              :validated="validated"
              :language="language"
              :label="{ en: 'Same as Contact Person above' }"
              :not-empty-validator="true"
            ></JnCheckboxField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.authorizedSigningOfficer_firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.authorizedSigningOfficer_lastName"
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
              v-model="value.authorizedSigningOfficer_title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.authorizedSigningOfficer_primaryPhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.authorizedSigningOfficer_faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.authorizedSigningOfficer_alternateEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Email Address' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.authorizedSigningOfficer_alternatePhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Alternate Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Employment Dates/Connected &amp; Related Persons</h3>

        <b-row v-show="memberEmployeesLength >= 1">
          <b-col v-show="memberEmployeesLength >= 1" cols="12" lg="6">
            <b-card :header="member1Label" class="mb-3">
              <b-form-row>
                <b-col cols="12">
                  <JnDatePickerField
                    v-model="value.employmentDates1_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :not-empty-validator="true"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates1_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates1_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>
            </b-card>
          </b-col>

          <b-col v-show="memberEmployeesLength >= 2" cols="12" lg="6">
            <b-card :header="member2Label" class="mb-3">
              <b-form-row>
                <b-col cols="12">
                  <JnDatePickerField
                    v-model="value.employmentDates2_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :not-empty-validator="true"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates2_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates2_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>
            </b-card>
          </b-col>
        </b-row>

        <b-row v-show="memberEmployeesLength >= 3">
          <b-col v-show="memberEmployeesLength >= 3" cols="12" lg="6">
            <b-card :header="member3Label" class="mb-3">
              <b-form-row>
                <b-col cols="12">
                  <JnDatePickerField
                    v-model="value.employmentDates3_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :not-empty-validator="true"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates3_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates3_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>
            </b-card>
          </b-col>

          <b-col v-show="memberEmployeesLength >= 4" cols="12" lg="6">
            <b-card :header="member4Label" class="mb-3">
              <b-form-row>
                <b-col cols="12">
                  <JnDatePickerField
                    v-model="value.employmentDates4_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :not-empty-validator="true"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates4_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    v-model="value.employmentDates4_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>
            </b-card>
          </b-col>
        </b-row>
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
    },
    memberemployees: {
      type: Array,
      default() {
        return []
      }
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    },
    memberEmployeesLength() {
      return this.memberemployees.length
    },
    member1Label() {
      if (
        this.memberemployees[0] &&
        this.memberemployees[0].lastName &&
        this.memberemployees[0].firstName
      ) {
        return `Member #1 (${this.memberemployees[0].lastName}, ${this.memberemployees[0].firstName})`
      }

      return 'Member #1'
    },
    member2Label() {
      if (
        this.memberemployees[1] &&
        this.memberemployees[1].lastName &&
        this.memberemployees[1].firstName
      ) {
        return `Member #2 (${this.memberemployees[1].lastName}, ${this.memberemployees[1].firstName})`
      }

      return 'Member #2'
    },
    member3Label() {
      if (
        this.memberemployees[2] &&
        this.memberemployees[2].lastName &&
        this.memberemployees[2].firstName
      ) {
        return `Member #3 (${this.memberemployees[2].lastName}, ${this.memberemployees[2].firstName})`
      }

      return 'Member #3'
    },
    member4Label() {
      if (
        this.memberemployees[3] &&
        this.memberemployees[3].lastName &&
        this.memberemployees[3].firstName
      ) {
        return `Member #4 (${this.memberemployees[3].lastName}, ${this.memberemployees[3].firstName})`
      }

      return 'Member #4'
    }
  }
}
</script>
