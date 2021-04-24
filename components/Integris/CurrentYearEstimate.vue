<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
        <IntegrisCurrentYearEstimateYear
          v-for="year in years"
          ref="years"
          v-model="model[year]"
          :key="year"
          :language="language"
          class="mb-3"
          :year="year"
          @input="onInput"
        ></IntegrisCurrentYearEstimateYear>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizeMixin from '~/mixins/localize'
import validateMixin from '~/mixins/validate'

export default {
  mixins: [localizeMixin, validateMixin],

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

  data() {
    const currentYear = new Date().getFullYear()
    const years = []
    for (let index = 0, length = 30; index < length; index++) {
      years.push(String(currentYear - index))
    }

    return {
      header: {
        en: 'Current Year Estimate &amp; Historical T4 (Box 14)/T4PS Income'
      },
      years,
      model: years.reduce((acc, cur) => {
        acc[cur] = this.value[cur] || {}
        return acc
      }, {})
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  },

  methods: {
    onInput() {
      this.$emit('input', { ...this.model })
    }
  }
}
</script>
