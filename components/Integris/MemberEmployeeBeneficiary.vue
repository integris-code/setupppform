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
          @click="$emit('remove')"
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
                  v-model="value.firstName"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'First Name' }"
                  type="text"
                  :not-empty-validator="true"
                ></JnInputField>
              </b-col>

              <b-col cols="12" md="6">
                <JnInputField
                  v-model="value.lastName"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Last Name' }"
                  type="text"
                  :not-empty-validator="true"
                ></JnInputField>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" md="6">
                <JnDatePickerField
                  v-model="value.dateOfBirth"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Date of Birth' }"
                  :not-empty-validator="true"
                ></JnDatePickerField>
              </b-col>

              <b-col cols="12" md="6">
                <JnInputField
                  v-model="value.relationship"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Relationship' }"
                  type="text"
                  :not-empty-validator="true"
                ></JnInputField>
              </b-col>
            </b-form-row>

            <b-form-row>
              <b-col cols="12" md="6">
                <JnSelectField
                  v-model="value.type"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Type' }"
                  :options="[
                    { text: { en: 'Primary' }, value: 'Primary' },
                    { text: { en: 'Contingent' }, value: 'Contingent' }
                  ]"
                  :not-empty-validator="true"
                ></JnSelectField>
              </b-col>

              <b-col cols="12" md="6">
                <JnInputField
                  v-model="value.revocability"
                  :validated="validated"
                  :language="language"
                  :label="{ en: 'Revocability' }"
                  type="text"
                  :not-empty-validator="true"
                ></JnInputField>
              </b-col>
            </b-form-row>
          </b-col>

          <b-col cols="12" md="2">
            <JnInputField
              v-model="value.share"
              :validated="validated"
              :language="language"
              :label="{ en: 'Share (%)' }"
              type="number"
              :between-validator="{
                inclusive: true,
                min: 0,
                max: 100
              }"
              :callback-validator="{
                callback() {
                  return totalShareValidation
                }
              }"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-row>
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
    header: {
      type: [String, Object],
      default: null
    },
    removable: {
      type: Boolean,
      default: false
    },
    totalShare: {
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

  computed: {
    _header() {
      return this.localize(this.header)
    },
    totalShareValidation() {
      return this.totalShare <= 100
    }
  }
}
</script>
