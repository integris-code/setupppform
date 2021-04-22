<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h3 class="h6 m-0">{{ _header }}</h3>
      </template>

      <b-card-body>
        <h4 class="h6">Member #1</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member1Sponsor1"
              v-model="value.member1_sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member1Sponsor2"
              v-model="value.member1_sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member1Sponsor3"
              v-model="value.member1_sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">Member #2</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member2Sponsor1"
              v-model="value.member1_sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member2Sponsor2"
              v-model="value.member1_sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member2Sponsor3"
              v-model="value.member1_sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">Member #3</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member3Sponsor1"
              v-model="value.member1_sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member3Sponsor2"
              v-model="value.member1_sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member3Sponsor3"
              v-model="value.member1_sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">Member #4</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member4Sponsor1"
              v-model="value.member1_sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member4Sponsor2"
              v-model="value.member1_sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member4Sponsor3"
              v-model="value.member1_sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
            ></JnInputField>
          </b-col>
        </b-form-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'

export default {
  mixins: [localizeMixin],

  props: {
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

  computed: {
    _header() {
      return String(this.year)
    }
  },

  methods: {
    validate() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        let refs = this.$refs[cur]
        if (!Array.isArray(refs)) {
          refs = [refs]
        }

        acc[cur] = []
        for (let index = 0, length = refs.length; index < length; index++) {
          const ref = refs[index]
          if (ref.validate) {
            acc[cur].push(ref.validate())
          }
        }

        return acc
      }, {})
    }
  }
}
</script>
