<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
        <IntegrisCurrentYearEstimateYear
          v-for="year in years"
          :key="value[year].key"
          :validated="validated"
          :language="language"
          class="mb-3"
          :year="year"
          :value="value[year]"
          @input="onInput"
        ></IntegrisCurrentYearEstimateYear>
      </b-card-body>
    </b-card>
  </div>
</template>

<script>
import localizer from '~/mixins/localizer'
import keymaker from '~/mixins/keymaker'

export default {
  mixins: [localizer, keymaker],

  props: {
    validated: {
      type: Boolean,
      default: true
    },
    years: {
      type: Array,
      default() {
        return []
      }
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
      header: {
        en: 'Current Year Estimate \u0026 Historical T4 (Box 14)/T4PS Income'
      }
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  },

  methods: {
    onInput() {
      this.$emit('input', this.model)
    }
  }
}
</script>
