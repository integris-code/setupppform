<template>
  <b-card :header="header" header-tag="h2" header-class="h5">
    <div v-for="yearIndex in endYear - startYear" :key="yearIndex" class="mb-3">
      <hr v-if="yearIndex > 1" />

      <!-- <b-card class="bg-light"> -->
      <b-form-row>
        <b-col cols="12" lg="3">
          <h3 class="h5">{{ endYear - (yearIndex - 1) }}</h3>
        </b-col>

        <b-col cols="12" lg="9">
          <div v-for="mIndex in 4" :key="`${yearIndex}_${mIndex}`">
            <h4 class="h6">Member #{{ mIndex }}</h4>

            <b-form-row>
              <b-col cols="12" md="6" lg="4">
                <FormField
                  :ref="
                    [
                      `year${endYear - (yearIndex - 1)}`,
                      `member${mIndex}`,
                      `sponsor1`,
                    ].join('_')
                  "
                  :name="
                    prefixed[
                      [
                        `year${endYear - (yearIndex - 1)}`,
                        `member${mIndex}`,
                        `sponsor1`,
                      ].join('_')
                    ]
                  "
                  v-bind="commonBind"
                ></FormField>
              </b-col>

              <b-col cols="12" md="6" lg="4">
                <FormField
                  :ref="
                    [
                      `year${endYear - (yearIndex - 1)}`,
                      `member${mIndex}`,
                      `sponsor2`,
                    ].join('_')
                  "
                  :name="
                    prefixed[
                      [
                        `year${endYear - (yearIndex - 1)}`,
                        `member${mIndex}`,
                        `sponsor2`,
                      ].join('_')
                    ]
                  "
                  v-bind="commonBind"
                ></FormField>
              </b-col>

              <b-col cols="12" md="6" lg="4">
                <FormField
                  :ref="
                    [
                      `year${endYear - (yearIndex - 1)}`,
                      `member${mIndex}`,
                      `sponsor3`,
                    ].join('_')
                  "
                  :name="
                    prefixed[
                      [
                        `year${endYear - (yearIndex - 1)}`,
                        `member${mIndex}`,
                        `sponsor3`,
                      ].join('_')
                    ]
                  "
                  v-bind="commonBind"
                ></FormField>
              </b-col>
            </b-form-row>
          </div>
        </b-col>
      </b-form-row>
      <!-- </b-card> -->
    </div>
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

    const endYear = new Date().getFullYear()
    const startYear = endYear - 30

    const fields = {}

    for (let year = startYear; year < endYear; year++) {
      for (let mIndex = 0, mLength = 4; mIndex < mLength; mIndex++) {
        for (let sIndex = 0, sLength = 4; sIndex < sLength; sIndex++) {
          const name = [
            `year${year + 1}`,
            `member${mIndex + 1}`,
            `sponsor${sIndex + 1}`,
          ].join('_')

          fields[prefixer.set(name)] = {
            label: `Sponsor #${sIndex + 1}`,
            type: 'text',
            validators: {},
          }
        }
      }
    }

    return {
      startYear,
      endYear,
      fields,
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
