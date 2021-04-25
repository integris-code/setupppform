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
          @click="onRemoveClick"
        >
          <b-icon icon="x-circle" class="mr-1"></b-icon>Remove
        </b-button>

        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
        <b-form-row>
          <b-col cols="12" md="6" lg="3">
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

          <b-col cols="12" md="6" lg="3">
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

          <b-col cols="12" lg="6">
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

          <b-col cols="12" lg="6">
            <JnInputField
              ref="primaryEmailAddress"
              v-model="primaryEmailAddress"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Email Address' }"
              type="email"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6" lg="3">
            <JnInputField
              ref="primaryPhoneNumber"
              v-model="primaryPhoneNumber"
              :validated="validated"
              :language="language"
              :label="{ en: 'Primary Phone Number' }"
              type="text"
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
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
          <b-col cols="12">
            <JnInputField
              ref="street1"
              v-model="street1"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 1' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>
          <b-col cols="12" lg="6">
            <JnInputField
              ref="street2"
              v-model="street2"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 2' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" lg="6">
            <JnInputField
              ref="street3"
              v-model="street3"
              :validated="validated"
              :language="language"
              :label="{ en: 'Street 3' }"
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
              ref="city"
              v-model="city"
              :validated="validated"
              :language="language"
              :label="{ en: 'City' }"
              type="text"
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnInputField>
          </b-col>

          <b-col cols="12" md="6">
            <JnSelectField
              ref="province"
              v-model="province"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>
        </b-form-row>

        <b-form-row>
          <b-col cols="12" md="6">
            <JnSelectField
              ref="country"
              v-model="country"
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
              :validators="{
                notEmpty: {}
              }"
              @input="onInput"
            ></JnSelectField>
          </b-col>

          <b-col cols="12" md="6">
            <JnInputField
              ref="postalCode"
              v-model="postalCode"
              :validated="validated"
              :language="language"
              :label="{ en: 'Postal Code' }"
              type="text"
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

  data() {
    return {
      firstName: this.value.firstName,
      lastName: this.value.lastName,
      title: this.value.title,
      primaryEmailAddress: this.value.primaryEmailAddress,
      primaryPhoneNumber: this.value.primaryPhoneNumber,
      faxNumber: this.value.faxNumber,
      street1: this.value.street1,
      street2: this.value.street2,
      street3: this.value.street3,
      city: this.value.city,
      province: this.value.province,
      country: this.value.country,
      postalCode: this.value.postalCode
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
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
        title: this.title,
        primaryEmailAddress: this.primaryEmailAddress,
        primaryPhoneNumber: this.primaryPhoneNumber,
        faxNumber: this.faxNumber,
        street1: this.street1,
        street2: this.street2,
        street3: this.street3,
        city: this.city,
        province: this.province,
        country: this.country,
        postalCode: this.postalCode
      })
    }
  }
}
</script>
