<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <b-button
          v-if="removable"
          variant="danger"
          size="sm"
          class="float-right"
          type="button"
          @click="onRemoveClick"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h4 class="h6 m-0">{{ _header }}</h4>
      </template>

      <b-card-body>
        <b-row>
          <b-col cols="12" md="10">
            <b-form-row>
              <b-col cols="12" md="6">
                <JnInputField
                  ref="firstName"
                  v-model="firstName"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'First Name' }"
                  type="text"
                  :validators="{
                    notEmpty: {}
                  }"
                  @input="onInput"
                ></JnInputField>
              </b-col>

              <b-col cols="12" md="6">
                <JnInputField
                  ref="lastName"
                  v-model="lastName"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Last Name' }"
                  type="text"
                  :validators="{
                    notEmpty: {}
                  }"
                  @input="onInput"
                ></JnInputField>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" md="6">
                <JnDatePickerField
                  ref="dateOfBirth"
                  v-model="dateOfBirth"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Date of Birth' }"
                  :validators="{
                    notEmpty: {}
                  }"
                  @input="onInput"
                ></JnDatePickerField>
              </b-col>

              <b-col cols="12" md="6">
                <JnInputField
                  ref="relationship"
                  v-model="relationship"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Relationship' }"
                  type="text"
                  :validators="{
                    notEmpty: {}
                  }"
                  @input="onInput"
                ></JnInputField>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" md="6">
                <JnSelectField
                  ref="type"
                  v-model="type"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Type' }"
                  :options="[
                    { text: { en: 'Primary' }, value: 'Primary' },
                    { text: { en: 'Contingent' }, value: 'Contingent' }
                  ]"
                  :validators="{
                    notEmpty: {}
                  }"
                  @input="onInput"
                ></JnSelectField>
              </b-col>

              <b-col cols="12" md="6">
                <JnInputField
                  ref="revocability"
                  v-model="revocability"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Revocability' }"
                  type="text"
                  :validators="{
                    notEmpty: {}
                  }"
                  @input="onInput"
                ></JnInputField>
              </b-col>
            </b-form-row>
          </b-col>

          <b-col cols="12" md="2">
            <JnInputField
              ref="share"
              v-model="share"
              :validated="validated"
              :language="language"
              :label="{ en: 'Share (%)' }"
              type="number"
              :validators="{
                between: {
                  inclusive: true,
                  min: 0,
                  max: 100
                },
                callback: {
                  callback() {
                    return totalShareValidation
                  }
                },
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-row>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'

export default {
  mixins: [localizeMixin],

  props: {
    validated: {
      type: Boolean,
      default: true
    },
    header: {
      type: [String, Object],
      default: null
    },
    removable: {
      type: Boolean,
      default: false
    },
    totalshare: {
      type: Number,
      default: null
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
      firstName: this.value.firstName,
      lastName: this.value.lastName,
      dateOfBirth: this.value.dateOfBirth,
      relationship: this.value.relationship,
      type: this.value.type,
      revocability: this.value.revocability,
      share: this.value.share
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    },
    totalShareValidation() {
      return this.totalshare <= 100
    }
  },

  methods: {
    onRemoveClick() {
      this.$emit('remove')
    },
    onInput() {
      this.$emit('input', {
        key: this.value.key,
        firstName: this.firstName,
        lastName: this.lastName,
        dateOfBirth: this.dateOfBirth,
        relationship: this.relationship,
        type: this.type,
        revocability: this.revocability,
        share: +this.share || 0
      })
    }
  }
}
</script>
