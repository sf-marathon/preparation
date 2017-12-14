<template>
  <v-toolbar
    app
    dark
    scroll-off-screen>
    <v-btn icon class="" @click="$router.go(-1)">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-toolbar-title>{{ subTitle }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  computed: {
    subTitle () {
      return this.$store.state.subTitle
    }
  },
  methods: {
  }
}
</script>

