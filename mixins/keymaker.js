let keyCounter = 0

export default {
  methods: {
    makeKey() {
      return `__ukey_${keyCounter++}`
    }
  }
}
