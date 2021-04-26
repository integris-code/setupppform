<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <b-button
          variant="danger"
          size="sm"
          v-if="removable"
          class="float-right"
          type="button"
          @click="$emit('remove')"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
        <b-form-row>
          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.firstName"
              :validated="validated"
              :language="language"
              :label="{ en: 'First Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.lastName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Last Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" lg="6">
            <JnInputField
              v-model="value.title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" lg="6">
            <JnInputField
              v-model="value.primaryEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Email Address' }"
              type="email"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.primaryPhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Phone Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
          <b-col cols="12">
            <JnInputField
              v-model="value.street1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 1' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
          <b-col cols="12" lg="6">
            <JnInputField
              v-model="value.street2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 2' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" lg="6">
            <JnInputField
              v-model="value.street3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 3' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.city"
              :validated="validated"
              :language="language"
              :label="{ en: 'City' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.province"
              :validated="validated"
              :language="language"
              :label="{ en: 'Province' }"
              :options="[
                {
                  text: { en: 'Alberta' },
                  value: 'Alberta'
                },
                {
                  text: { en: 'British Columbia' },
                  value: 'British Columbia'
                },
                {
                  text: { en: 'Manitoba' },
                  value: 'Manitoba'
                },
                {
                  text: { en: 'New Brunswick' },
                  value: 'New Brunswick'
                },
                {
                  text: { en: 'Newfoundland & Labrador' },
                  value: 'Newfoundland & Labrador'
                },
                {
                  text: { en: 'Northwest Teritories' },
                  value: 'Northwest Teritories'
                },
                {
                  text: { en: 'Nova Scotia' },
                  value: 'Nova Scotia'
                },
                {
                  text: { en: 'Nunavut' },
                  value: 'Nunavut'
                },
                {
                  text: { en: 'Ontario' },
                  value: 'Ontario'
                },
                {
                  text: { en: 'Prince Edward Island' },
                  value: 'Prince Edward Island'
                },
                {
                  text: { en: 'Québec' },
                  value: 'Québec'
                },
                {
                  text: { en: 'Saskatchewan' },
                  value: 'Saskatchewan'
                },
                {
                  text: { en: 'Yukon' },
                  value: 'Yukon'
                }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              v-model="value.country"
              :validated="validated"
              :language="language"
              :label="{ en: 'Country' }"
              :options="[
                {
                  text: { en: 'Canada' },
                  value: 'Canada'
                },
                {
                  text: { en: 'United States' },
                  value: 'United States'
                }
              ]"
              :not-empty-validator="true"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.postalCode"
              :validated="validated"
              :language="language"
              :label="{ en: 'Postal Code' }"
              type="text"
              :not-empty-validator="true"
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
    header: {
      type: [String, Object],
      default: null
    },
    removable: {
      type: Boolean,
      default: false
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
    }
  }
}
</script>
