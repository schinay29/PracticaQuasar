<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevatxed>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          App Hannah
        </q-toolbar-title>

        <div>Hannah v1.0</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-red-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu de navegación
        </q-item-label> 
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Home',
    icon: 'home',
    link: '/'
  },
  {
    title: 'Login',
    icon: 'login',
    link: '/#/login'
  }
  
  
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>
