

import vueAwesomeCountdown from 'vue-awesome-countdown'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default async ({ Vue }) => {
  Vue.use(vueAwesomeCountdown, 'count-down')
}
