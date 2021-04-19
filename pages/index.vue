<template>
  <div>
    <h1 class="mb-5">PPP&reg; Setup Request Form</h1>

    <b-form :novalidate="true" @submit="onSubmit">
      <!-- Let's comment out languages for now until we get french
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
      -->

      <IntegrisPPPSetup
        ref="pppSetup"
        class="mb-3"
        :header="
          $localize(
            {
              en: 'Personal Pension Plan (PPP) Setup',
              fr: 'Personal Pension Plan (PPP) Setup (FR)',
            },
            language
          )
        "
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
      <b-button @click="show.member2=true" variant="secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add another Employee </b-button>

      
      <IntegrisMemberEmployee
        ref="memberEmployee2"
        class="my-3"
        header="Member/Employee #2"
        prefix="memberEmployee2"
        v-bind="commonBind"
        v-show="show.member2"
      ></IntegrisMemberEmployee>

      <b-button @click="show.member3=true" variant="secondary" v-show="show.member2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add another Employee </b-button>

      <IntegrisMemberEmployee
        ref="memberEmployee3"
        class="my-3"
        header="Member/Employee #3"
        prefix="memberEmployee3"
        v-bind="commonBind"
        v-show="show.member3"
      ></IntegrisMemberEmployee>

      <b-button @click="show.member4=true" variant="secondary" v-show="show.member3">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add another Employee </b-button>

      <IntegrisMemberEmployee
        ref="memberEmployee4"
        class="my-3"
        header="Member/Employee #4"
        prefix="memberEmployee4"
        v-bind="commonBind"
        v-show="show.member4"
      ></IntegrisMemberEmployee>

       <IntegrisSponsorEmployer
        ref="sponsorEmployer1"
        class="my-3"
        header="Sponsor/Employer #1 (Primary Sponsor)"
        prefix="sponsorEmployer1"
        v-bind="commonBind"
      ></IntegrisSponsorEmployer>

      <b-button @click="show.sponsor2=true" variant="secondary">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add another Sponsor </b-button>

      <IntegrisSponsorEmployer
        ref="sponsorEmployer2"
        class="my-3"
        header="Sponsor/Employer #2"
        prefix="sponsorEmployer2"
        v-bind="commonBind"
        v-show="show.sponsor2"
      ></IntegrisSponsorEmployer>

      <b-button @click="show.sponsor3=true" variant="secondary" v-show="show.sponsor2">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="mr-1 bi bi-plus-circle" viewBox="0 0 16 16">
  <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
</svg> Add another Sponsor </b-button>

      <IntegrisSponsorEmployer
        ref="sponsorEmployer3"
        class="my-3"
        header="Sponsor/Employer #3"
        prefix="sponsorEmployer3"
        v-bind="commonBind"
        v-show="show.sponsor3"
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
      show:{
        member1:true,
        member2:false,
        member3:false,
        member4:false,
        sponsor1:true,
        sponsor2:false,
        sponsor3:false,
      }
    }
  },
  watch:{
    "show.sponsor2"(newItem,old){
      if(newItem){
      this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.push('Sponsor #2');
      }else{
        this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.pop();
      }
    },
    "show.sponsor3"(newItem,old){
      if(newItem)
      {this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.push('Sponsor #3');}
      else{
        this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.pop();
      }
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
      // return this.$localize(this.$localize_languages, this.language)
      return this.$localize(
        [
          {
            text: {
              en: 'English',
              fr: 'Anglais',
            },
            value: 'en',
          },
          {
            text: {
              en: 'French',
              fr: 'Français',
            },
            value: 'fr',
          },
        ],
        this.language
      )
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
  body {
    background:#f9f8f7;
  }
  .card {
    transition: box-shadow .5s;
    margin-bottom:4em !important;
  }
  .card:hover{
    box-shadow:0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
  }
  div[role='radiogroup'] {
    background-color: #ffffff;
    border: 1px solid #ced4da;
    border-radius: 0.25rem;
    padding: 0.375rem 0 0.375rem 0.75rem;
  }
</style>
