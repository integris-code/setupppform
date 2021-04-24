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
              ref="member1Sponsor1"
              v-model="member1Sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member1Sponsor2"
              v-model="member1Sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member1Sponsor3"
              v-model="member1Sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">{{ _member2Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member2Sponsor1"
              v-model="member1Sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member2Sponsor2"
              v-model="member2Sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member2Sponsor3"
              v-model="member2Sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">{{ _member3Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member3Sponsor1"
              v-model="member3Sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member3Sponsor2"
              v-model="member3Sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member3Sponsor3"
              v-model="member3Sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <h4 class="h6">{{ _member4Header }}</h4>

        <b-form-row>
          <b-col cols="12" md="4">
            <JnInputField
              ref="member4Sponsor1"
              v-model="member4Sponsor1"
              :language="language"
              :label="{ en: 'Sponsor #1' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member4Sponsor2"
              v-model="member4Sponsor2"
              :language="language"
              :label="{ en: 'Sponsor #2' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="4">
            <JnInputField
              ref="member4Sponsor3"
              v-model="member4Sponsor3"
              :language="language"
              :label="{ en: 'Sponsor #3' }"
              type="text"
              :validators="{}"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import validateMixin from '~/mixins/validate'

export default {
  mixins: [localizeMixin, validateMixin],

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

  data() {
    return {
      member1Header: { en: 'Member #1' },
      member1Sponsor1: this.value.member1Sponsor1,
      member1Sponsor2: this.value.member1Sponsor2,
      member1Sponsor3: this.value.member1Sponsor3,
      member2Header: { en: 'Member #2' },
      member2Sponsor1: this.value.member2Sponsor1,
      member2Sponsor2: this.value.member2Sponsor2,
      member2Sponsor3: this.value.member2Sponsor3,
      member3Header: { en: 'Member #3' },
      member3Sponsor1: this.value.member3Sponsor1,
      member3Sponsor2: this.value.member3Sponsor2,
      member3Sponsor3: this.value.member3Sponsor3,
      member4Header: { en: 'Member #4' },
      member4Sponsor1: this.value.member4Sponsor1,
      member4Sponsor2: this.value.member4Sponsor2,
      member4Sponsor3: this.value.member4Sponsor3
    }
  },

  computed: {
    _header() {
      return String(this.year)
    },
    _member1Header() {
      return this.localize(this.member1Header)
    },
  },

  methods: {
    onInput() {
      this.$emit('input', {
        member1Sponsor1: this.member1Sponsor1,
        member1Sponsor2: this.member1Sponsor2,
        member1Sponsor3: this.member1Sponsor3,
        member2Sponsor1: this.member2Sponsor1,
        member2Sponsor2: this.member2Sponsor2,
        member2Sponsor3: this.member2Sponsor3,
        member3Sponsor1: this.member3Sponsor1,
        member3Sponsor2: this.member3Sponsor2,
        member3Sponsor3: this.member3Sponsor3,
        member4Sponsor1: this.member4Sponsor1,
        member4Sponsor2: this.member4Sponsor2,
        member4Sponsor3: this.member4Sponsor3
      })
    }
  }
}
</script>
