<template>
  <div :id="prefix" class="py-3">
    <b-card header-tag="header" footer-tag="footer" header-class="pb-0">
      <template #header>
        <h2 class="h5">
          {{header}}
          <span v-show="!!values[prefixed.companyName]">({{values[prefixed.companyName]}})</span>
          <b-button
            @click="$emit('removeSponsor')"
            variant="danger"
            size="sm"
            class="m-0 ml-3"
            v-show="!hideRemove"
          >Remove this Member</b-button>
        </h2>
        <p
          class="text-muted"
        >A sponsor can be an employer/company that will be contributing to the plan member's pension plan.</p>
      </template>

      <b-form-row>
        <b-col cols="12">
          <FormField :name="prefixed.companyName" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
        </b-col>
        <b-col cols="12" md="6">
          <FormField :name="prefixed.incorporationDate" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.fiscalYearEnd" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.payrollSubAccountNo" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="6">
          <FormField :name="prefixed.companyType" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" lg="6">
          <FormField :name="prefixed.natureOfBusiness" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.naicsCode" v-bind="commonBind"></FormField>
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
        <b-col cols="12" md="6">
          <FormField :name="prefixed.city" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.province" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.country" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.postalCode" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="6">
          <FormField :name="prefixed.phoneNumber" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.faxNumber" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <hr />
      <h3 class="h5">Contact Person</h3>

      <b-form-row>
        <b-col cols="12" md="6">
          <FormField :name="prefixed.contactPerson_firstName" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.contactPerson_lastName" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12">
          <FormField :name="prefixed.contactPerson_title" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" lg="6">
          <FormField :name="prefixed.contactPerson_primaryPhoneNumber" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.contactPerson_faxNumber" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" lg="6">
          <FormField :name="prefixed.contactPerson_alternateEmailAddress" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.contactPerson_alternatePhoneNumber" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <hr />
      <h3 class="h5">Authorized Signing Officer</h3>

      <b-form-row>
        <b-col cols="12">
          <FormField
            :name="prefixed.authorizedSigningOfficer_sameAsContactPerson"
            v-bind="commonBind"
          ></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="6">
          <FormField :name="prefixed.authorizedSigningOfficer_firstName" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.authorizedSigningOfficer_lastName" v-bind="commonBind"></FormField>
        </b-col>

        <b-col cols="12">
          <FormField :name="prefixed.authorizedSigningOfficer_title" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" lg="6">
          <FormField
            :name="prefixed.authorizedSigningOfficer_primaryPhoneNumber"
            v-bind="commonBind"
          ></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField :name="prefixed.authorizedSigningOfficer_faxNumber" v-bind="commonBind"></FormField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" lg="6">
          <FormField
            :name="prefixed.authorizedSigningOfficer_alternateEmailAddress"
            v-bind="commonBind"
          ></FormField>
        </b-col>

        <b-col cols="12" md="6">
          <FormField
            :name="prefixed.authorizedSigningOfficer_alternatePhoneNumber"
            v-bind="commonBind"
          ></FormField>
        </b-col>
      </b-form-row>

      <hr />
      <h3 class="h5 mb-4">Employment Dates/Connected &amp; Related Persons</h3>

      <b-row>
        <b-col cols="12" lg="6" v-show="show.member1">
          <b-card header-tag="header">
            <template #header class="pb-0">
              <h3
                class="h6"
                v-show="!!values['memberEmployee1_lastName'] && !!values['memberEmployee1_firstName']"
              >{{values['memberEmployee1_lastName']}}, {{values['memberEmployee1_firstName']}}</h3>
            </template>
            <FormField :name="prefixed.employmentDates1_employmentSince" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates1_contactPerson" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates1_relatedPerson" v-bind="commonBind"></FormField>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" v-show="show.member2">
          <b-card header-class="h6" header="Member #2" header-tag="h3">
            <FormField :name="prefixed.employmentDates2_employmentSince" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates2_contactPerson" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates2_relatedPerson" v-bind="commonBind"></FormField>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" v-show="show.member3">
          <b-card header-class="h6" header="Member #3" header-tag="h3">
            <FormField :name="prefixed.employmentDates3_employmentSince" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates3_contactPerson" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates3_relatedPerson" v-bind="commonBind"></FormField>
          </b-card>
        </b-col>
        <b-col cols="12" lg="6" v-show="show.member4">
          <b-card header-class="h6" header="Member #4" header-tag="h3">
            <FormField :name="prefixed.employmentDates4_employmentSince" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates4_contactPerson" v-bind="commonBind"></FormField>

            <FormField :name="prefixed.employmentDates4_relatedPerson" v-bind="commonBind"></FormField>
          </b-card>
        </b-col>
      </b-row>
      <template #footer class="p-0">
        <b-button v-show="showNextSponsorBtn" @click="$emit('showNext')" variant="primary" block>
          <b-icon icon="plus-circle" class="mr-1"></b-icon>Add another Sponsor Company
        </b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
import { BIcon, BIconPlusCircle } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconPlusCircle
  },
  props: {
    showNextSponsorBtn: {
      type: Boolean
    },
    hideRemove: {
      type: Boolean,
      default: false
    },
    show: {
      type: Object
    },
    language: {
      type: String,
      default() {
        return this.$localize_defaultlanguage
      }
    },
    validated: {
      type: Boolean,
      default: false
    },
    values: {
      type: Object,
      default() {
        return {}
      }
    },
    header: {
      type: String,
      default: 'Untitled'
    },
    prefix: {
      type: String,
      default: ''
    }
  },
  data() {
    const prefixer = this.$prefixer(this.prefix)
    return {
      fields: {
        [prefixer.set('companyName')]: {
          label: 'Company Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('businessNumber')]: {
          label: 'Business Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },

        [prefixer.set('incorporationDate')]: {
          label: 'Incorporation Date',
          type: 'datepicker',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('fiscalYearEnd')]: {
          label: 'Fiscal Year End',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('payrollSubAccountNo')]: {
          label: 'Payroll Sub-Account No',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('companyType')]: {
          label: 'Company Type',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Corporation (incorporated)',
            'Sole Proprietorship (unincorporated)',
            'Registered Not-For-Profit',
            'Employee/Trade Association/Union',
            'Municipal Government/Agency/Corporation',
            'Provincial Government/Agency/Corporation',
            'Federal Government/Agency/Corporation'
          ],
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('natureOfBusiness')]: {
          label: 'Nature of Business',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('naicsCode')]: {
          label: 'NAICS Code',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
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
          ],
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('street1')]: {
          label: 'Street 1',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('street2')]: {
          label: 'Street 2',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('street3')]: {
          label: 'Street 3',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('city')]: {
          label: 'City',
          type: 'text',
          validators: {
            notEmpty: {}
          }
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
            'Yukon'
          ],
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('country')]: {
          label: 'Country',
          type: 'select',
          choices: [
            { text: 'Select\u2026', value: '' },
            'Canada',
            'United States'
          ],
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('postalCode')]: {
          label: 'Postal Code',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('phoneNumber')]: {
          label: 'Phone Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('faxNumber')]: {
          label: 'Fax Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_title')]: {
          label: 'Title',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_primaryEmailAddress')]: {
          label: 'Primary Email Address',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_primaryPhoneNumber')]: {
          label: 'Primary Phone Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_faxNumber')]: {
          label: 'Fax Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_alternateEmailAddress')]: {
          label: 'Alternate Email Address',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('contactPerson_alternatePhoneNumber')]: {
          label: 'Alternate Phone Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_sameAsContactPerson')]: {
          label: 'Same as Contact Person above',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_firstName')]: {
          label: 'First Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_lastName')]: {
          label: 'Last Name',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_title')]: {
          label: 'Title',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_primaryEmailAddress')]: {
          label: 'Primary Email Address',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_primaryPhoneNumber')]: {
          label: 'Primary Phone Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_faxNumber')]: {
          label: 'Fax Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_alternateEmailAddress')]: {
          label: 'Alternate Email Address',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('authorizedSigningOfficer_alternatePhoneNumber')]: {
          label: 'Alternate Phone Number',
          type: 'text',
          validators: {
            notEmpty: {}
          }
        },

        [prefixer.set('employmentDates1_employmentSince')]: {
          label: 'Employment Since',
          type: 'datepicker',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates1_contactPerson')]: {
          label: 'Contact Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates1_relatedPerson')]: {
          label: 'Related Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },

        [prefixer.set('employmentDates2_employmentSince')]: {
          label: 'Employment Since',
          type: 'datepicker',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates2_contactPerson')]: {
          label: 'Contact Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates2_relatedPerson')]: {
          label: 'Related Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },

        [prefixer.set('employmentDates3_employmentSince')]: {
          label: 'Employment Since',
          type: 'datepicker',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates3_contactPerson')]: {
          label: 'Contact Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates3_relatedPerson')]: {
          label: 'Related Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },

        [prefixer.set('employmentDates4_employmentSince')]: {
          label: 'Employment Since',
          type: 'datepicker',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates4_contactPerson')]: {
          label: 'Contact Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },
        [prefixer.set('employmentDates4_relatedPerson')]: {
          label: 'Related Person',
          type: 'checkbox',
          validators: {
            notEmpty: {}
          }
        },

        [prefixer.set('field')]: {}
      },
      prefixed: prefixer.prefixed
    }
  },
  computed: {
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
        fields: this.fields
      }
    }
  },
  methods: {
    getValidations() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        acc[cur] = this.$refs[cur].validation
        return acc
      }, {})
    }
  }
}
</script>
