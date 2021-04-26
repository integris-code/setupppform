<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
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
            <JnInputField
              v-model="value.title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              v-model="value.companyName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Company Name' }"
              type="text"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" lg="6">
            <JnInputField
              v-model="value.emailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Email Address' }"
              type="email"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.phoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Phone Number' }"
              type="tel"
              :not-empty-validator="true"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              v-model="value.faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="tel"
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
    value: {
      type: Object,
      default() {
        return {}
      }
    }
  },

  data() {
    return {
      header: { en: 'Client(s) Investment Advisor' }
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  }
}
</script>
