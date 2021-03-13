<template>
  <q-page class="flex flex-center">
    <count-down :end-time="new Date().getTime() + 10000">
      <template
        v-slot:process ="{ timeObj }">
        <span>{{ `Tiempo restante: ${timeObj.m}:${timeObj.s}`}}</span>
      </template>
      <template v-slot:finish><span>Tiempo!!!!</span></template>
    </count-down>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>
