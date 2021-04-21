<template>
  <b-card :header="_header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <JnInputField
          ref="firstName"
          v-model="value.firstName"
          :label="{ en: 'First Name' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <JnInputField
          ref="lastName"
          v-model="value.lastName"
          :label="{ en: 'Last Name' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" lg="6">
        <JnInputField
          ref="title"
          v-model="value.title"
          :label="{ en: 'Title' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" lg="6">
        <JnInputField
          ref="primaryEmailAddress"
          v-model="value.primaryEmailAddress"
          :label="{ en: 'Primary Email Address' }"
          type="email"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <JnInputField
          ref="primaryPhoneNumber"
          v-model="value.primaryPhoneNumber"
          :label="{ en: 'Primary Phone Number' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <JnInputField
          ref="faxNumber"
          v-model="value.faxNumber"
          :label="{ en: 'Fax Number' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>
      <b-col cols="12">
        <JnInputField
          ref="street1"
          v-model="value.street1"
          :label="{ en: 'Street 1' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>
      <b-col cols="12" lg="6">
        <JnInputField
          ref="street2"
          v-model="value.street2"
          :label="{ en: 'Street 2' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" lg="6">
        <JnInputField
          ref="street3"
          v-model="value.street3"
          :label="{ en: 'Street 3' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <JnInputField
          ref="city"
          v-model="value.city"
          :label="{ en: 'City' }"
          type="text"
          :validators="{
            notEmpty: {}
          }"
        ></JnInputField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <JnSelectField
          ref="province"
          v-model="value.province"
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
          :validators="{
            notEmpty: {}
          }"
        ></JnSelectField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <JnSelectField
          ref="country"
          v-model="value.country"
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
          :validators="{
            notEmpty: {}
          }"
        ></JnSelectField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <JnInputField
          ref="postalCode"
          v-model="value.postalCode"
          type="text"
          :label="{ en: 'Postal Code' }"
          :validators="{
            notEmpty: {}
          }"
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
