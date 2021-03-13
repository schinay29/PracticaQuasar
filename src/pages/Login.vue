<template>
  <q-page class="flex flex-center">
       <div class="q-pa-md" style="max-width: 400px">

    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        filled
        v-model="name"
        label="Nombre *"
        hint="Escribir el nombre"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Por favor escribe algo']"
      />

      <q-input
        filled
        type="Edad *"
        v-model="age"
        label="Edad *"
        lazy-rules
        :rules="[
          val => val !== null && val !== '' || 'Por favor escribe tu edad',
          val => val > 0 && val < 100 || 'Por favor escribe una edad real'
        ]"
      />

      <q-toggle v-model="accept" label="Acepto los términos y condiciones" />

      <div>
        <q-btn label="Submit" type="submit" color="primary"/>
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>

  </div>
  </q-page>
</template>


<script>
export default {
  name: 'PageLogin',
   data () {
    return {
      name: null,
      age: null,

      accept: false
    }
  },

  methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'warning',
          message: 'Necesita aceptar los términos y condiciones'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Solicitud enviada correctamente'
        })
      }
    },

    onReset () {
      this.name = null
      this.age = null
      this.accept = false
    }
  }
}
</script>