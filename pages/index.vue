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
          <a class="nav-link" href="#memberEmployee1">
            <b-icon icon="chevron-right"></b-icon>Primary Member
          </a>
          <a class="nav-link" v-show="show.member2" href="#memberEmployee2">
            <b-icon icon="chevron-right"></b-icon>Second Member
          </a>
          <a class="nav-link" v-show="show.member3" href="#memberEmployee3">
            <b-icon icon="chevron-right"></b-icon>Third Member
          </a>
          <a class="nav-link" v-show="show.member4" href="#memberEmployee4">
            <b-icon icon="chevron-right"></b-icon>Forth Member
          </a>
          <a class="nav-link disabled" href="#">Sponsors Companies</a>
          <a class="nav-link" v-show="show.sponsor1" href="#sponsorEmployer1">
            <b-icon icon="chevron-right"></b-icon>Primary Sponsor
          </a>
          <a class="nav-link" v-show="show.sponsor2" href="#sponsorEmployer2">
            <b-icon icon="chevron-right"></b-icon>Second Sponsor
          </a>
          <a class="nav-link" v-show="show.sponsor3" href="#sponsorEmployer3">
            <b-icon icon="chevron-right"></b-icon>Third Sponsor
          </a>
          <a class="nav-link" href="#">Custodian</a>
          <a class="nav-link" href="#">Member</a>
          <a class="nav-link" href="#"
            >Corporate Trustee/Individual Trustee #1</a
          >
          <a class="nav-link" href="#"
            >Current Year Estimate & Historical T4 (Box 14)/T4PS Income</a
          >
        </nav>
      </div>
      <div class="col-lg-9 offset-lg-2">
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
            v-model="value.pppSetup"
            :language="language"
            class="mb-3"
            :header="{ en: 'Personal Pension Plan (PPP) Setup' }"
          ></IntegrisPPPSetup>

          <IntegrisClientsInvestmentAdvisor
            ref="clientsInvestmentAdvisor"
            class="my-3"
            header="Client(s) Investment Advisor"
            prefix="clientsInvestmentAdvisor"
            v-bind="commonBind"
            id="advisor"
          ></IntegrisClientsInvestmentAdvisor>

          <IntegrisMemberEmployee
            ref="memberEmployee1"
            header="Primary Member"
            prefix="memberEmployee1"
            v-bind="commonBind"
            :showNextMemberBtn="!show.member2"
            @showNext="show.member2 = true"
            :hideRemove="true"
          ></IntegrisMemberEmployee>

          <IntegrisMemberEmployee
            ref="memberEmployee2"
            header="Second Member"
            prefix="memberEmployee2"
            v-bind="commonBind"
            v-show="show.member2"
            @removeMember="show.member2 = false"
            :showNextMemberBtn="!show.member3"
            @showNext="show.member3 = true"
            :hideRemove="show.member3"
          ></IntegrisMemberEmployee>

          <IntegrisMemberEmployee
            ref="memberEmployee3"
            header="Third Member"
            prefix="memberEmployee3"
            v-bind="commonBind"
            v-show="show.member3"
            @removeMember="show.member3 = false"
            :showNextMemberBtn="!show.member4"
            @showNext="show.member4 = true"
            :hideRemove="show.member4"
          ></IntegrisMemberEmployee>

          <IntegrisMemberEmployee
            ref="memberEmployee4"
            header="Forth Member"
            prefix="memberEmployee4"
            v-bind="commonBind"
            v-show="show.member4"
            @removeMember="show.member4 = false"
            :showNextMemberBtn="false"
          ></IntegrisMemberEmployee>

          <IntegrisSponsorEmployer
            ref="sponsorEmployer1"
            class="my-3"
            header="Sponsor/Employer #1 (Primary Sponsor)"
            prefix="sponsorEmployer1"
            v-bind="commonBind"
            :showNextSponsorBtn="!show.sponsor2"
            @showNext="show.sponsor2 = true"
            :hideRemove="true"
          ></IntegrisSponsorEmployer>

          <IntegrisSponsorEmployer
            ref="sponsorEmployer2"
            class="my-3"
            header="Sponsor/Employer #2"
            prefix="sponsorEmployer2"
            v-bind="commonBind"
            v-show="show.sponsor2"
            @removeSponsor="show.sponsor2 = false"
            :showNextSponsorBtn="!show.sponsor3"
            @showNext="show.sponsor3 = true"
          ></IntegrisSponsorEmployer>

          <IntegrisSponsorEmployer
            ref="sponsorEmployer3"
            class="my-3"
            header="Sponsor/Employer #3"
            prefix="sponsorEmployer3"
            v-bind="commonBind"
            v-show="show.sponsor3"
            @removeSponsor="show.sponsor3 = false"
            :showNextSponsorBtn="false"
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
                :value="JSON.stringify(value, null, 5)"
              ></b-form-textarea>
            </b-form-group>
          </b-card>

          <p>
            <b-button type="submit" variant="primary">Submit</b-button>
          </p>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import { BIcon, BIconChevronRight } from 'bootstrap-vue'
export default {
  components: {
    BIcon,
    BIconChevronRight
  },

  data() {
    return {
      language: 'en',
      value: {
        pppSetup: {
          provincialAuthority: 'Ontario',
          productPlatform: 'Insurrance (iA)',
          normalRetirementAge: 65,
          languageOfCorrespondence: 'English',
          requestFor: 'Setup of a new PPP\u00AE',
          existingPlanName: '',
          existingCraPlanNo: '',
          membersEmployeesParticipatingInThePlan: ['Member #1'],
          sponsorsEmployersParticipatingInThePlan: ['Sponsor #1']
        }
      },


      validated: false,
      values: {},
      show: {
        member1: true,
        member2: false,
        member3: false,
        member4: false,
        sponsor1: true,
        sponsor2: false,
        sponsor3: false
      }
    }
  },

  watch: {
    'show.member2'(newItem, old) {
      if (newItem) {
        this.values.pppSetup_membersEmployeesParticipatingInThePlan.push(
          'Member #2'
        )
      } else {
        this.values.pppSetup_membersEmployeesParticipatingInThePlan.pop()
      }
    },
    'show.member3'(newItem, old) {
      if (newItem) {
        this.values.pppSetup_membersEmployeesParticipatingInThePlan.push(
          'Member #3'
        )
      } else {
        this.values.pppSetup_membersEmployeesParticipatingInThePlan.pop()
      }
    },
    'show.member4'(newItem, old) {
      if (newItem) {
        this.values.pppSetup_membersEmployeesParticipatingInThePlan.push(
          'Member #4'
        )
      } else {
        this.values.pppSetup_membersEmployeesParticipatingInThePlan.pop()
      }
    },
    'show.sponsor2'(newItem, old) {
      if (newItem) {
        this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.push(
          'Sponsor #2'
        )
      } else {
        this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.pop()
      }
    },
    'show.sponsor3'(newItem, old) {
      if (newItem) {
        this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.push(
          'Sponsor #3'
        )
      } else {
        this.values.pppSetup_sponsorsEmployersParticipatingInThePlan.pop()
      }
    }
  },
  computed: {
    languageLabel() {
      return this.$localize(
        {
          en: 'Language',
          fr: 'Langue'
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
        this.language
      )
    },
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values
      }
    }
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
  margin-bottom: 4em !important;
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
