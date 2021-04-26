<template>
  <div>
    <h1 class="mb-5">PPP&reg; Setup Request Form</h1>

    <div class="row">
      <div
        class="col-lg-1 pl-0 ml-0"
        style="position: fixed; top: 200px"
        id="formSections"
      >
        <nav class="nav flex-column pl-0 ml-0">
          <a class="nav-link active" href="#">Main</a>
          <a class="nav-link" href="#advisor">Client(s) Investment Advisor</a>
          <a class="nav-link disabled" href="#">Members / Employees</a>
          <a class="nav-link" href="#memberEmployees1">
            <b-icon icon="chevron-right"></b-icon>Primary Member
          </a>
          <a
            class="nav-link"
            v-show="memberEmployees.length >= 2"
            href="#memberEmployees2"
          >
            <b-icon icon="chevron-right"></b-icon>Second Member
          </a>
          <a
            class="nav-link"
            v-show="memberEmployees.length >= 3"
            href="#memberEmployees3"
          >
            <b-icon icon="chevron-right"></b-icon>Third Member
          </a>
          <a
            class="nav-link"
            v-show="memberEmployees.length >= 4"
            href="#memberEmployees4"
          >
            <b-icon icon="chevron-right"></b-icon>Forth Member
          </a>
          <a class="nav-link disabled" href="#">Sponsors Companies</a>
          <a
            class="nav-link"
            v-show="sponsorEmployers.length >= 1"
            href="#sponsorEmployer1"
          >
            <b-icon icon="chevron-right"></b-icon>Primary Sponsor
          </a>
          <a
            class="nav-link"
            v-show="sponsorEmployers.length >= 2"
            href="#sponsorEmployer2"
          >
            <b-icon icon="chevron-right"></b-icon>Second Sponsor
          </a>
          <a
            class="nav-link"
            v-show="sponsorEmployers.length >= 3"
            href="#sponsorEmployer3"
          >
            <b-icon icon="chevron-right"></b-icon>Third Sponsor
          </a>
          <a class="nav-link" href="#Custodian">Custodian</a>
          <a class="nav-link" href="#trust1"
            >Corporate Trustee/Individual Trustee #1</a
          >
          <a class="nav-link" href="#trust2">Individual Trustee #2</a>
          <a class="nav-link" href="#trust3">Individual Trustee #3</a>
          <a class="nav-link" href="#t4income"
            >Current &amp; Historical Income</a
          >
        </nav>
      </div>

      <div class="col-lg-9 offset-lg-2">
        <b-form :novalidate="true" @submit="onSubmit">
          <!-- Let's comment out languages for now until we get french
          <b-row>
            <b-col cols="12" md="6" offset-md="6" lg="3" offset-lg="9">
              <b-form-group :label="_languageLabel">
                <b-form-radio-group
                  v-model="language"
                  :options="_languageOptions"
                ></b-form-radio-group>
              </b-form-group>
            </b-col>
          </b-row>
          -->

          <IntegrisPPPSetup
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :value="pppSetup"
          ></IntegrisPPPSetup>

          <IntegrisClientsInvestmentAdvisor
            id="advisor"
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :value="clientsInvestmentAdvisor"
          ></IntegrisClientsInvestmentAdvisor>

          <IntegrisMemberEmployee
            v-for="({ key }, index) in memberEmployees"
            :key="key"
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :header="
              index === 0
                ? { en: 'Primary Member' }
                : { en: 'Member #' + (index + 1) }
            "
            :removable="index !== 0 && index + 1 === memberEmployees.length"
            :value="memberEmployees[index]"
            @remove="onRemoveMemberEmployee(index)"
          ></IntegrisMemberEmployee>

          <div v-show="memberEmployees.length < 4" class="mb-3 pb-5">
            <button
              class="btn btn-primary btn-block"
              type="button"
              @click="onAddMemberEmployee"
            >
              <b-icon icon="plus-circle"></b-icon>
              Add Member/Employee
            </button>
          </div>

          <IntegrisSponsorEmployer
            v-for="({ key }, index) in sponsorEmployers"
            :key="key"
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :header="
              index === 0
                ? { en: 'Primary Sponsor' }
                : { en: 'Sponsor #' + (index + 1) }
            "
            :removable="index !== 0 && index + 1 === sponsorEmployers.length"
            :memberemployees="memberEmployees"
            :value="sponsorEmployers[index]"
            @remove="onRemoveSponsorEmployer(index)"
          ></IntegrisSponsorEmployer>

          <div v-show="sponsorEmployers.length < 3" class="mb-3 pb-5">
            <button
              class="btn btn-primary btn-block"
              type="button"
              @click="onAddSponsorEmployer"
            >
              <b-icon icon="plus-circle"></b-icon>
              Add Sponsor/Employer
            </button>
          </div>

          <IntegrisCustodianTrustee
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :header="{ en: 'Custodian' }"
            :value="custodian"
          ></IntegrisCustodianTrustee>

          <IntegrisCustodianTrustee
            v-for="({ key }, index) in individualTrustees"
            :key="key"
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :header="
              index === 0
                ? { en: 'Corporate Trustee/Individual Trustee #1' }
                : { en: `Individual Trustee #${index + 1}` }
            "
            :removable="index !== 0 && index + 1 === individualTrustees.length"
            :value="individualTrustees[index]"
            @remove="onRemoveIndividualTrustee(index)"
          ></IntegrisCustodianTrustee>

          <div v-show="individualTrustees.length < 3" class="mb-3 pb-5">
            <button
              class="btn btn-primary btn-block"
              type="button"
              @click="onAddIndividualTrustee"
            >
              <b-icon icon="plus-circle"></b-icon>
              Add Individual Trustee
            </button>
          </div>

          <IntegrisCurrentYearEstimate
            :validated="validated"
            :language="language"
            class="mb-3 pb-5"
            :years="currentYearEstimateYears"
            :value="currentYearEstimate"
          ></IntegrisCurrentYearEstimate>

          <p>
            <b-button type="submit" variant="primary">Submit</b-button>
          </p>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import keymaker from '~/mixins/keymaker'

export default {
  mixins: [keymaker],

  data() {
    const currentYearEstimateCurrentYear = new Date().getFullYear()
    const currentYearEstimateYears = []
    const currentYearEstimate = {}
    for (let index = 0, length = 30; index < length; index++) {
      const year = currentYearEstimateCurrentYear - index
      currentYearEstimateYears.push(year)
      currentYearEstimate[year] = { key: this.makeKey() }
    }

    return {
      validated: false,
      language: 'en',
      languageLabel: {
        en: 'Language',
        fr: 'Langue'
      },
      languageOptions: [
        {
          text: {
            en: 'English',
            fr: 'Anglais'
          },
          value: 'en'
        },
        {
          text: {
            en: 'French',
            fr: 'Français'
          },
          value: 'fr'
        }
      ],
      pppSetup: {},
      clientsInvestmentAdvisor: {},
      memberEmployees: [{
        key: this.makeKey(),
        beneficiaryDesignations: [{ key: this.makeKey() }]
      }],
      sponsorEmployers: [{ key: this.makeKey() }],
      custodian: {},
      corporateIndividualTrustee: {},
      individualTrustees: [{ key: this.makeKey() }],
      currentYearEstimate,
      currentYearEstimateYears
    }
  },

  computed: {
    // _languageLabel() {
    //   return this.localize(this.languageLabel)
    // },
    // _languageOptions() {
    //   return this.localize(this.languageOptions)
    // },
    // memberEmployeeRemovable() {
    //   return this.memberEmployees.length > 1
    // },
    // individualTrusteeRemovable() {
    //   return this.individualTrustees.length > 1
    // },
  },
  methods: {
    onRemoveMemberEmployee(index) {
      this.memberEmployees.splice(index, 1)
    },
    onAddMemberEmployee() {
      this.memberEmployees.push({
        key: this.makeKey(),
        beneficiaryDesignations: [{ key: this.makeKey() }]
      })
    },
    onRemoveSponsorEmployer(index) {
      this.sponsorEmployers.splice(index, 1)
    },
    onAddSponsorEmployer() {
      this.sponsorEmployers.push({
        key: this.makeKey()
      })
    },
    onRemoveIndividualTrustee(index) {
      this.individualTrustees.splice(index, 1)
    },
    onAddIndividualTrustee() {
      this.individualTrustees.push({
        key: this.makeKey()
      })
    },
    onSubmit(event) {
      event.preventDefault()
      this.validated = true
      this.$nextTick(() => {
        const invalid = document.querySelector('.form-group.is-invalid')
        if (invalid) {
          invalid.scrollIntoView({ behavior: 'smooth' })
        } else {
          // TODO
        }
      })
    }
  }
}
</script>

<style>
body {
  background: #f9f8f7;
}
.card {
  transition: box-shadow 0.5s;
  /* margin-bottom: 2em !important; */
}
.card:hover {
  box-shadow: 0 0.5rem 1rem rgb(0 0 0 / 15%) !important;
}
div[role='radiogroup'] {
  background-color: #ffffff;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  padding: 0.375rem 0 0.375rem 0.75rem;
}
#formSections .nav-link {
  border-bottom: 1px solid #eee;
}
</style>
