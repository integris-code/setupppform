<template>
  <div>
    <b-card :header="_header" header-tag="h2" header-class="h5">
      <b-form-row>
        <b-col cols="12" md="6">
          <JnInputField
            ref="firstName"
            v-model="value.firstName"
            :language="language"
            :label="{ en: 'First Name' }"
            type="text"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>

        <b-col cols="12" md="6">
          <JnInputField
            ref="lastName"
            v-model="value.lastName"
            :language="language"
            :label="{ en: 'Last Name' }"
            type="text"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" md="6">
          <JnInputField
            ref="title"
            v-model="value.title"
            :language="language"
            :label="{ en: 'Title' }"
            type="text"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>

        <b-col cols="12" md="6">
          <JnInputField
            ref="companyName"
            v-model="value.companyName"
            :language="language"
            :label="{ en: 'Company Name' }"
            type="text"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>
      </b-form-row>

      <b-form-row>
        <b-col cols="12" lg="6">
          <JnInputField
            ref="emailAddress"
            v-model="value.emailAddress"
            :language="language"
            :label="{ en: 'Email Address' }"
            type="email"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>

        <b-col cols="12" md="6" lg="3">
          <JnInputField
            ref="phoneNumber"
            v-model="value.phoneNumber"
            :language="language"
            :label="{ en: 'Phone Number' }"
            type="tel"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>

        <b-col cols="12" md="6" lg="3">
          <JnInputField
            ref="faxNumber"
            v-model="value.faxNumber"
            :language="language"
            :label="{ en: 'Fax Number' }"
            type="tel"
            :validators="{
              notEmpty: {}
            }"
          ></JnInputField>
        </b-col>
      </b-form-row>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'

export default {
  mixins: [localizeMixin],

  props: {
    header: {
      type: [String, Object],
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
