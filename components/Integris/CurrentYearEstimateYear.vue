<template>
  <b-card :header="_header" header-tag="h3" header-class="h6">
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
  </b-card>
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
        if (this.$refs[cur].validate) {
          acc[cur] = this.$refs[cur].validate()
        }
        return acc
      }, {})
    }
  }
}
</script>
