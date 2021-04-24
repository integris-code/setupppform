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
          <a class="nav-link" v-show="show.member2" href="#memberEmployees2">
            <b-icon icon="chevron-right"></b-icon>Second Member
          </a>
          <a class="nav-link" v-show="show.member3" href="#memberEmployees3">
            <b-icon icon="chevron-right"></b-icon>Third Member
          </a>
          <a class="nav-link" v-show="show.member4" href="#memberEmployees4">
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
            ref="pppSetup"
            v-model="pppSetup"
            :language="language"
            class="mb-3 pb-5"
          ></IntegrisPPPSetup>

          <IntegrisClientsInvestmentAdvisor
            ref="clientsInvestmentAdvisor"
            v-model="clientsInvestmentAdvisor"
            :language="language"
            id="advisor"
            class="mb-3 pb-5"
          ></IntegrisClientsInvestmentAdvisor>

          <IntegrisMemberEmployee
            v-for="(memberEmployee, index) in memberEmployees"
            ref="memberEmployees"
            :value="memberEmployee"
            :key="'memberEmployee' + index"
            :language="language"
            class="mb-3 pb-5"
            :header="{ en: 'Primary Member' }"
            :showNextMemberBtn="!show.member2"
            @showNext="show.member2 = true"
            :hideRemove="true"
          ></IntegrisMemberEmployee>

          <div v-if="memberEmployees.length < 3" class="mb-3 pb-5 px-3">
            <button class="btn btn-primary btn-block" type="button">
              <b-icon icon="plus-circle"></b-icon>
              Add Member/Employee
            </button>
          </div>

          <IntegrisSponsorEmployer
            ref="sponsorEmployer1"
            class="my-3"
            header="Primary Sponsor"
            prefix="sponsorEmployer1"
            v-bind="commonBind"
            :showNextSponsorBtn="!show.sponsor2"
            @showNext="show.sponsor2 = true"
            :hideRemove="true"
          ></IntegrisSponsorEmployer>

          <div class="mb-3 pb-5">
            <button class="btn btn-primary btn-block" type="button">
              <b-icon icon="plus-circle"></b-icon>
              Add Sponsor/Employer
            </button>
          </div>

          <IntegrisCustodianTrustee
            ref="custodian"
            v-model="custodian"
            :language="language"
            class="mb-3 pb-5"
            :header="{ en: 'Custodian' }"
          ></IntegrisCustodianTrustee>

          <IntegrisCustodianTrustee
            v-for="({ key }, index) in individualTrustees"
            ref="individualTrustees"
            v-model="individualTrustees[index]"
            :key="key"
            :language="language"
            class="mb-3 pb-5"
            :header="
              index === 0
                ? { en: 'Corporate Trustee/Individual Trustee #1' }
                : { en: `Individual Trustee #${index + 1}` }
            "
            :removable="individualTrusteeRemovable"
            @remove="onRemoveIndividualTrustee(index)"
          ></IntegrisCustodianTrustee>

          <div v-if="individualTrustees.length < 3" class="mb-3 pb-5 px-3">
            <button
              class="btn btn-primary btn-block"
              type="button"
              @click="onAddIndividualTrustee"
            >
              <b-icon icon="plus-circle"></b-icon>
              Add Individual Trustee
            </button>
          </div>
          <!--
          <IntegrisCurrentYearEstimate
            ref="currentYearEstimate"
            :value="value.currentYearEstimate"
            :language="language"
            class="mb-3 pb-5"
            :header="{
              en:
                'Current Year Estimate &amp; Historical T4 (Box 14)/T4PS Income'
            }"
          ></IntegrisCurrentYearEstimate> -->

          <p>
            <b-button type="submit" variant="primary">Submit</b-button>
          </p>
        </b-form>
      </div>
    </div>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import validateMixin from '~/mixins/validate'
import uuidMixin from '~/mixins/uuidv4'

export default {
  mixins: [localizeMixin, validateMixin, uuidMixin],

  data() {
    // const currentYear = new Date().getFullYear()
    // const currentYearEstimate = {}
    // for (let index = 0, length = 30; index < length; index++) {
    //   currentYearEstimate[String(currentYear - index)] = {}
    // }

    return {
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
      memberEmployees: [{ key: this.uuidv4() }],
      sponsorEmployers: [{ key: this.uuidv4() }],
      custodian: {},
      corporateIndividualTrustee: {},
      additionalIndividualTrustees: [],
      individualTrustees: [{ key: this.uuidv4() }],

      value: {
        // currentYearEstimate
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
    _languageLabel() {
      return this.$localize(this.languageLabel, this.language)
    },
    _languageOptions() {
      return this.$localize(this.languageOptions, this.language)
    },
    individualTrusteeRemovable() {
      return this.individualTrustees.length > 1
    },
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
        show: this.show
      }
    }
  },

  methods: {
    onRemoveIndividualTrustee(index) {
      this.individualTrustees.splice(index, 1)
    },
    onAddIndividualTrustee() {
      if (this.individualTrustees.length < 3) {
        this.individualTrustees.push({
          key: this.uuidv4()
        })
      }
    },
    onSubmit(event) {
      event.preventDefault()
      this.validate()
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
