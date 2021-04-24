<template>
  <div>
    <b-card :no-body="true">
      <template #header>
        <h2 class="h5 m-0">{{ _header }}</h2>
      </template>

      <b-card-body>
        <IntegrisCurrentYearEstimateYear
          v-for="count in 30"
          ref="year"
          :key="String(currentYear - (count - 1))"
          :value="value[String(currentYear - (count - 1))]"
          :language="language"
          class="mb-3"
          :year="currentYear - (count - 1)"
        ></IntegrisCurrentYearEstimateYear>
      </b-card-body>
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
      return Object.keys(this.$refs).reduce((acc, cur) => {
        let refs = this.$refs[cur]
        if (!Array.isArray(refs)) {
          refs = [refs]
        }

        acc[cur] = []
        for (let index = 0, length = refs.length; index < length; index++) {
          const ref = refs[index]
          if (ref.validate) {
            acc[cur].push(ref.validate())
          }
        }

        return acc
      }, {})
    }
  }
}
</script>
