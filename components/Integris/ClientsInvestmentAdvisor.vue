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
            <JnInputField
              ref="title"
              v-model="title"
              :validated="validated"
              :language="language"
              :label="{ en: 'Title' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="companyName"
              v-model="companyName"
              :validated="validated"
              :language="language"
              :label="{ en: 'Company Name' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" lg="6">
            <JnInputField
              ref="emailAddress"
              v-model="emailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Email Address' }"
              type="email"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              ref="phoneNumber"
              v-model="phoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Phone Number' }"
              type="tel"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              ref="faxNumber"
              v-model="faxNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Fax Number' }"
              type="tel"
              :validators="{
                notEmpty: {}
              }"
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

export default {
  mixins: [localizeMixin],

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
      header: { en: 'Client(s) Investment Advisor' },
      firstName: this.value.firstName,
      lastName: this.value.lastName,
      title: this.value.title,
      companyName: this.value.companyName,
      emailAddress: this.value.emailAddress,
      phoneNumber: this.value.phoneNumber,
      faxNumber: this.value.faxNumber
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  },

  methods: {
    onInput() {
      this.$emit('input', {
        firstName: this.firstName,
        lastName: this.lastName,
        title: this.title,
        companyName: this.companyName,
        emailAddress: this.emailAddress,
        phoneNumber: this.phoneNumber,
        faxNumber: this.faxNumber
      })
    }
  }
}
</script>
