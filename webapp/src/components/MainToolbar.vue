<template>
  <v-toolbar
    app
    dark
    scroll-off-screen>
    <v-toolbar-side-icon @click="handleNavVisible"></v-toolbar-side-icon>
    <v-toolbar-title>客户自助下单</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  methods: {
    handleNavVisible () {
      this.$emit('updatenav')
    }
  }
}
</script>
