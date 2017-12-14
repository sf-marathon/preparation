<template>
  <v-app>
    <v-navigation-drawer
      app
      style="margin-top: 56px;"
      fixed
      clipped
      v-model="visible">
      <v-list>
        <v-list-tile @click="$router.push({path: '/'})">
          <v-list-tile-action>
            <v-icon>local_offer</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>下单</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="$router.push({path: '/search'})">
          <v-list-tile-action>
            <v-icon>search</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>查询</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <router-view name="toolbar" @updatenav="handleNav"></router-view>
    <v-content>
      <v-container fluid>
        <router-view name="content"></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'app',
  computed: {
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleNav () {
      this.visible = true
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
