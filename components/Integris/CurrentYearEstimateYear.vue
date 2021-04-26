<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h3 class="h6 m-0">{{ _header }}</h3>
      </template>

      <b-card-body>
        <h4 class="h6">{{ _member1Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member1Sponsor1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member1Sponsor2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member1Sponsor3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">{{ _member2Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member1Sponsor1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member2Sponsor2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member2Sponsor3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">{{ _member3Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member3Sponsor1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member3Sponsor2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member3Sponsor3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">{{ _member4Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member4Sponsor1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member4Sponsor2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              v-model="value.member4Sponsor3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
            ></JnInputField>
          </b-col>
        </b-form-row>
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
    year: {
      type: Number,
      default: 0
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
      member1Header: { en: 'Member #1' },
      member2Header: { en: 'Member #2' },
      member3Header: { en: 'Member #3' },
      member4Header: { en: 'Member #4' }
    }
  },

  computed: {
    _header() {
      return String(this.year)
    },
    _member1Header() {
      return this.localize(this.member1Header)
    },
    _member2Header() {
      return this.localize(this.member1Header)
    },
    _member3Header() {
      return this.localize(this.member1Header)
    },
    _member4Header() {
      return this.localize(this.member1Header)
    }
  }
}
</script>
