<template>
  <div>
    <h1>PPP&reg; Setup Request Form</h1>

    <b-form :novalidate="true" @submit="onSubmit">
      <b-row>
        <b-col cols="12" md="6" offset-md="6" lg="3" offset-lg="9">
          <b-form-group :label="languageLabel">
            <b-form-radio-group
              v-model="language"
              :options="languageOptions"
            ></b-form-radio-group>
          </b-form-group>
        </b-col>
      </b-row>

      <IntegrisPPPSetup
        ref="pppSetup"
        class="mb-3"
        header="Personal Pension Plan (PPP) Setup"
        prefix="pppSetup"
        v-bind="commonBind"
      ></IntegrisPPPSetup>

      <IntegrisClientsInvestmentAdvisor
        ref="clientsInvestmentAdvisor"
        class="my-3"
        header="Client(s) Investment Advisor"
        prefix="clientsInvestmentAdvisor"
        v-bind="commonBind"
      ></IntegrisClientsInvestmentAdvisor>

      <IntegrisMemberEmployee
        ref="memberEmployee1"
        class="my-3"
        header="Member/Employee #1 (Primary Member)"
        prefix="memberEmployee1"
        v-bind="commonBind"
      ></IntegrisMemberEmployee>

      <IntegrisSponsorEmployer
        ref="sponsorEmployer1"
        class="my-3"
        header="Sponsor/Employer #1 (Primary Sponsor)"
        prefix="sponsorEmployer1"
        v-bind="commonBind"
      ></IntegrisSponsorEmployer>

      <IntegrisMemberEmployee
        ref="memberEmployee2"
        class="my-3"
        header="Member/Employee #2"
        prefix="memberEmployee2"
        v-bind="commonBind"
      ></IntegrisMemberEmployee>

      <IntegrisMemberEmployee
        ref="memberEmployee3"
        class="my-3"
        header="Member/Employee #3"
        prefix="memberEmployee3"
        v-bind="commonBind"
      ></IntegrisMemberEmployee>

      <IntegrisMemberEmployee
        ref="memberEmployee4"
        class="my-3"
        header="Member/Employee #4"
        prefix="memberEmployee4"
        v-bind="commonBind"
      ></IntegrisMemberEmployee>

      <IntegrisSponsorEmployer
        ref="sponsorEmployer2"
        class="my-3"
        header="Sponsor/Employer #2"
        prefix="sponsorEmployer2"
        v-bind="commonBind"
      ></IntegrisSponsorEmployer>

      <IntegrisSponsorEmployer
        ref="sponsorEmployer3"
        class="my-3"
        header="Sponsor/Employer #3"
        prefix="sponsorEmployer3"
        v-bind="commonBind"
      ></IntegrisSponsorEmployer>

      <IntegrisCustodianTrustee
        ref="custodian"
        class="my-3"
        header="Custodian"
        prefix="custodian"
        v-bind="commonBind"
      ></IntegrisCustodianTrustee>

      <IntegrisCustodianTrustee
        ref="corporateIndividualTrustee"
        class="my-3"
        header="Corporate Trustee/Individual Trustee #1"
        prefix="corporateIndividualTrustee"
        v-bind="commonBind"
      ></IntegrisCustodianTrustee>

      <IntegrisCustodianTrustee
        ref="individualTrustee2"
        class="my-3"
        header="Individual Trustee #2"
        prefix="individualTrustee2"
        v-bind="commonBind"
      ></IntegrisCustodianTrustee>

      <IntegrisCustodianTrustee
        ref="individualTrustee3"
        class="my-3"
        header="Individual Trustee #3"
        prefix="individualTrustee3"
        v-bind="commonBind"
      ></IntegrisCustodianTrustee>

      <IntegrisCurrentYearEstimate
        ref="currentYearEstimate"
        class="my-3"
        header="Current Year Estimate &amp; Historical T4 (Box 14)/T4PS Income"
        prefix="currentYearEstimate"
        v-bind="commonBind"
      ></IntegrisCurrentYearEstimate>

      <b-card class="my-3" header="Data">
        <b-form-group label="Model">
          <b-form-textarea
            rows="20"
            :value="JSON.stringify(values, null, 5)"
          ></b-form-textarea>
        </b-form-group>
      </b-card>

      <p>
        <b-button type="submit" variant="primary">Submit</b-button>
      </p>
    </b-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      language: this.$localize_defaultlanguage,
      validated: false,
      values: {},
    }
  },
  computed: {
    languageLabel() {
      return this.$localize(
        {
          en: 'Language',
          fr: 'Langue',
        },
        this.language
      )
    },
    languageOptions() {
      return this.$localize(this.$localize_languages, this.language)
    },
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
      }
    },
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
      this.validated = true

      console.log(this.getValidations()) // eslint-disable-line no-console
    },

    getValidations() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        acc[cur] = this.$refs[cur].getValidations()
        return acc
      }, {})
    },
  },
}
</script>

<style>
div[role='radiogroup'] {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0 0.375rem 0.75rem;
}
</style>
