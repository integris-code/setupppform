export default (context, inject) => {
  // function prefix(prefix, value) {
  //   if (prefix) {
  //     return `${prefix}_${value}`
  //   }

  //   return value
  // }
  function prefixer(prefix) {
    return {
      prefixed: {},
      set(value) {
        let returnValue
        if (prefix) {
          returnValue = this.prefixed[value] = `${prefix}_${value}`
        } else {
          returnValue = this.prefixed[value] = value
        }
        return returnValue
      },
    }
  }

  inject('prefixer', prefixer)
}
