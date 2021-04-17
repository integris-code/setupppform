<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <b-form-row>
      <b-col cols="12" md="6" lg="9">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Contact Person</h3>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" lg="6">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" lg="6">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Authorized Signing Officer</h3>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <b-form-row>
      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>

      <b-col cols="12" md="6" lg="3">
        <FormField :name="prefixed.field" v-bind="commonBind"></FormField>
      </b-col>
    </b-form-row>

    <hr />
    <h3 class="h5">Employment Dates/Connected &amp; Related Persons</h3>
  </b-card>
</template>

<script>
export default {
  props: {
    language: {
      type: String,
      default() {
        return this.$localize_defaultlanguage
      },
    },
    validated: {
      type: Boolean,
      default: false,
    },
    values: {
      type: Object,
      default() {
        return {}
      },
    },
    header: {
      type: String,
      default: 'Untitled',
    },
    prefix: {
      type: String,
      default: '',
    },
  },
  data() {
    const prefixer = this.$prefixer(this.prefix)
    return {
      fields: {
        [prefixer.set('field')]: {},
      },
      prefixed: prefixer.prefixed,
    }
  },
  computed: {
    commonBind() {
      return {
        language: this.language,
        validated: this.validated,
        values: this.values,
        fields: this.fields,
      }
    },
  },
  methods: {
    getValidations() {
      return Object.keys(this.$refs).reduce((acc, cur) => {
        acc[cur] = this.$refs[cur].validation
        return acc
      }, {})
    },
  },
}
</script>
