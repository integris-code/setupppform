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
          @click="onRemoveClick"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h4 class="h5 mt-0">
          {{ _header }}
          <span v-show="!!companyName">({{ companyName }})</span>
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
              ref="companyName"
              v-model="companyName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Company Name' }"
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
              ref="businessNumber"
              v-model="businessNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Business Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnDatePickerField
              ref="incorporationDate"
              v-model="incorporationDate"
              :validated="validated"
              :language="language"
              :label="{ en: 'Incorporation Date' }"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnDatePickerField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="fiscalYearEnd"
              v-model="fiscalYearEnd"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fiscal Year End' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="payrollSubAccountNo"
              v-model="payrollSubAccountNo"
              :validated="validated"
              :language="language"
              :label="{ en: 'Payroll Sub Account No' }"
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
            <JnSelectField
              ref="companyType"
              v-model="companyType"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="natureOfBusiness"
              v-model="natureOfBusiness"
              :validated="validated"
              :language="language"
              :label="{ en: 'Nature of Business' }"
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
            <JnSelectField
              ref="naicsCode"
              v-model="naicsCode"
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

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="phoneNumber"
              v-model="phoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Phone Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="faxNumber"
              v-model="faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <hr class="pb-2" />
        <h3 class="h5">Contact Person</h3>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="contactPerson_firstName"
              v-model="contactPerson_firstName"
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
              ref="contactPerson_lastName"
              v-model="contactPerson_lastName"
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
              ref="contactPerson_title"
              v-model="contactPerson_title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
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
              ref="contactPerson_primaryPhoneNumber"
              v-model="contactPerson_primaryPhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Phone Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="contactPerson_faxNumber"
              v-model="contactPerson_faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
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
              ref="contactPerson_alternateEmailAddress"
              v-model="contactPerson_alternateEmailAddress"
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
              ref="contactPerson_alternatePhoneNumber"
              v-model="contactPerson_alternatePhoneNumber"
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

        <hr class="pb-2" />
        <h3 class="h5">Authorized Signing Officer</h3>

        <b-form-row>
          <b-col cols="12">
            <JnCheckboxField
              ref="authorizedSigningOfficer_sameAsContactPerson"
              v-model="authorizedSigningOfficer_sameAsContactPerson"
              :validated="validated"
              :language="language"
              :label="{ en: 'Same as Contact Person above' }"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnCheckboxField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              ref="authorizedSigningOfficer_firstName"
              v-model="authorizedSigningOfficer_firstName"
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
              ref="authorizedSigningOfficer_lastName"
              v-model="authorizedSigningOfficer_lastName"
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
              ref="authorizedSigningOfficer_title"
              v-model="authorizedSigningOfficer_title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
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
              ref="authorizedSigningOfficer_primaryPhoneNumber"
              v-model="authorizedSigningOfficer_primaryPhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Phone Number' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="authorizedSigningOfficer_faxNumber"
              v-model="authorizedSigningOfficer_faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
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
              ref="authorizedSigningOfficer_alternateEmailAddress"
              v-model="authorizedSigningOfficer_alternateEmailAddress"
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
              ref="authorizedSigningOfficer_alternatePhoneNumber"
              v-model="authorizedSigningOfficer_alternatePhoneNumber"
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

        <hr class="pb-2" />
        <h3 class="h5">Employment Dates/Connected &amp; Related Persons</h3>

        <b-row v-show="memberEmployeesLength >= 1">
          <b-col v-show="memberEmployeesLength >= 1" cols="12" lg="6">
            <b-card :header="member1Label" class="mb-3">
              <b-form-row>
                <b-col cols="12">
                  <JnDatePickerField
                    ref="employmentDates1_employmentSince"
                    v-model="employmentDates1_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates1_contactPerson"
                    v-model="employmentDates1_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates1_relatedPerson"
                    v-model="employmentDates1_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
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
                    ref="employmentDates2_employmentSince"
                    v-model="employmentDates2_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates2_contactPerson"
                    v-model="employmentDates2_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates2_relatedPerson"
                    v-model="employmentDates2_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
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
                    ref="employmentDates3_employmentSince"
                    v-model="employmentDates3_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates3_contactPerson"
                    v-model="employmentDates3_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates3_relatedPerson"
                    v-model="employmentDates3_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
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
                    ref="employmentDates4_employmentSince"
                    v-model="employmentDates4_employmentSince"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Employment Since' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnDatePickerField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates4_contactPerson"
                    v-model="employmentDates4_contactPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Contact Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
                  ></JnCheckboxField>
                </b-col>
              </b-form-row>

              <b-form-row>
                <b-col cols="12">
                  <JnCheckboxField
                    ref="employmentDates4_relatedPerson"
                    v-model="employmentDates4_relatedPerson"
                    :validated="validated"
                    :language="language"
                    :label="{ en: 'Related Person' }"
                    :validators="{
                      notEmpty: {}
                    }"
                    @input="onInput"
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
import localizeMixin from '~/mixins/localize'

export default {
  mixins: [localizeMixin],

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

  data() {
    return {
      companyName: this.value.companyName,
      businessNumber: this.value.businessNumber,
      incorporationDate: this.value.incorporationDate,
      fiscalYearEnd: this.value.fiscalYearEnd,
      payrollSubAccountNo: this.value.payrollSubAccountNo,
      companyType: this.value.companyType,
      natureOfBusiness: this.value.natureOfBusiness,
      naicsCode: this.value.naicsCode,
      street1: this.value.street1,
      street2: this.value.street2,
      street3: this.value.street3,
      city: this.value.city,
      province: this.value.province,
      country: this.value.country,
      postalCode: this.value.postalCode,
      phoneNumber: this.value.phoneNumber,
      faxNumber: this.value.faxNumber,
      contactPerson_firstName: this.value.contactPerson_firstName,
      contactPerson_lastName: this.value.contactPerson_lastName,
      contactPerson_title: this.value.contactPerson_title,
      contactPerson_primaryEmailAddress: this.value
        .contactPerson_primaryEmailAddress,
      contactPerson_primaryPhoneNumber: this.value
        .contactPerson_primaryPhoneNumber,
      contactPerson_faxNumber: this.value.contactPerson_faxNumber,
      contactPerson_alternateEmailAddress: this.value
        .contactPerson_alternateEmailAddress,
      contactPerson_alternatePhoneNumber: this.value
        .contactPerson_alternatePhoneNumber,
      authorizedSigningOfficer_sameAsContactPerson:
        this.value.authorizedSigningOfficer_sameAsContactPerson || false,
      authorizedSigningOfficer_firstName: this.value
        .authorizedSigningOfficer_firstName,
      authorizedSigningOfficer_lastName: this.value
        .authorizedSigningOfficer_lastName,
      authorizedSigningOfficer_title: this.value.authorizedSigningOfficer_title,
      authorizedSigningOfficer_primaryEmailAddress: this.value
        .authorizedSigningOfficer_primaryEmailAddress,
      authorizedSigningOfficer_primaryPhoneNumber: this.value
        .authorizedSigningOfficer_primaryPhoneNumber,
      authorizedSigningOfficer_faxNumber: this.value
        .authorizedSigningOfficer_faxNumber,
      authorizedSigningOfficer_alternateEmailAddress: this.value
        .authorizedSigningOfficer_alternateEmailAddress,
      authorizedSigningOfficer_alternatePhoneNumber: this.value
        .authorizedSigningOfficer_alternatePhoneNumber,
      employmentDates1_employmentSince: this.value
        .employmentDates1_employmentSince,
      employmentDates1_contactPerson: this.value.employmentDates1_contactPerson,
      employmentDates1_relatedPerson: this.value.employmentDates1_relatedPerson,
      employmentDates2_employmentSince: this.value
        .employmentDates2_employmentSince,
      employmentDates2_contactPerson: this.value.employmentDates2_contactPerson,
      employmentDates2_relatedPerson: this.value.employmentDates2_relatedPerson,
      employmentDates3_employmentSince: this.value
        .employmentDates3_employmentSince,
      employmentDates3_contactPerson: this.value.employmentDates3_contactPerson,
      employmentDates3_relatedPerson: this.value.employmentDates3_relatedPerson,
      employmentDates4_employmentSince: this.value
        .employmentDates4_employmentSince,
      employmentDates4_contactPerson: this.value.employmentDates4_contactPerson,
      employmentDates4_relatedPerson: this.value.employmentDates4_relatedPerson
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
  },

  methods: {
    onRemoveClick() {
      this.$emit('remove')
    },
    onInput() {
      this.$emit('input', {
        key: this.value.key,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        relationship: this.relationship,
        type: this.type,
        revocability: this.revocability,
        share: +this.share || 0
      })
    }
  }
}
</script>
