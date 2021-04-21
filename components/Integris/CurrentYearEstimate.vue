<template>
  <b-card :header="_header" header-tag="h2" header-class="h5">
    <template v-for="count in 30">
      <IntegrisCurrentYearEstimateYear
        ref="year"
        :key="String(currentYear - (count - 1))"
        v-model="value[String(currentYear - (count - 1))]"
        :language="language"
        :year="currentYear - (count - 1)"
      ></IntegrisCurrentYearEstimateYear>
    </template>
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

  data() {
    return {
      currentYear: new Date().getFullYear()
    }
  },

  computed: {
    _header() {
      return this.localize(this.header)
    }
  },

  methods: {
    validate() {
      return Object.keys(this.$refs).reduce((acc, cur) => {ppable_
        if (this.$refs[cur].validate) {
          acc[cur] = this.$refs[cur].validate()
        }
        return acc
      }, {})
    }
  }
}
</script>
