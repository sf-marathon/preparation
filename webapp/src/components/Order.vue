<template>
  <div class="od-order">
    <v-list>
      <v-list-tile @click="handleSend('/sender')">
        <v-list-tile-avatar>
          <v-icon>mood</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content v-if="sendInfo">
          <v-list-tile-title>
            {{ sendInfo.name }} {{sendInfo.phone}}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ sendInfo.provice }}{{ sendInfo.city }}{{ sendInfo.zone }}{{ sendInfo.detail }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-content v-else>
          <v-list-tile-title>
            添加寄件人信息
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
      <v-divider inset></v-divider>
      <v-list-tile @click="handleSend('/reciver')">
        <v-list-tile-avatar>
          <v-icon>mood</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content v-if="reciveInfo">
          <v-list-tile-title>
            {{ reciveInfo.name }} {{reciveInfo.phone}}
          </v-list-tile-title>
          <v-list-tile-sub-title>
            {{ reciveInfo.provice }}{{ reciveInfo.city }}{{ reciveInfo.zone }}{{ reciveInfo.detail }}
          </v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-content v-else>
          <v-list-tile-title>
            添加收件人信息
          </v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-btn icon ripple>
            <v-icon color="grey lighten-1">keyboard_arrow_right</v-icon>
          </v-btn>
        </v-list-tile-action>
      </v-list-tile>
    </v-list>
    <v-container grid-list-sm v-if="hasInfo">
      <v-form v-model="formValid" class="od-form">
        <v-layout row wrap>
          <v-flex xs12>
            <div class="body-2">上门时间</div>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-bind:items="dateOptions"
              v-model="formData['dateSelect']"
              label="日期"
              prepend-icon="access_time">
            </v-select>
          </v-flex>
          <v-flex xs6>
            <v-select
              v-bind:items="timeOptions"
              v-model="formData['timeSelect']"
              label="时间">
            </v-select>
          </v-flex>
        </v-layout>
        <v-select
          v-bind:items="weightOptions"
          v-model="formData['weightSelect']"
          label="快件重量"
          prepend-icon="explicit"
        ></v-select>
      </v-form>
      <v-btn block style="margin: 20px 0 0;" color="secondary" dark>确实无误，下单</v-btn>
    </v-container>
    <template v-else>
      <v-btn block style="margin: 20px 0 0;" color="primary" disabled>快速下单</v-btn>
      <p class="text-xs-center caption" style="margin: 20px 0 0;">提供您的寄件信息，即可预订快递员上门为您取件</p>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Order',
  computed: {
    hasInfo () {
      return !!(this.$store.state.sendInfo || this.$store.state.reciveInfo)
    },
    sendInfo () {
      return this.$store.state.sendInfo
    },
    reciveInfo () {
      return this.$store.state.reciveInfo
    }
  },
  data () {
    return {
      canOrder: false,
      formValid: true,
      formData: {
        time: '',
        weightSelect: '',
        dateSelect: '',
        timeSelect: ''
      },
      dateOptions: ['今天', '明天', '后天'],
      weightOptions: ['0-1kg', '1-2kg', '2-5kg', '5-10kg', '10-20kg', '20kg以上'],
      timeOptions: ['08:00~09:00', '09:00~10:00']
    }
  },
  methods: {
    handleSend (path) {
      this.$router.push({ path })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.od-form{
  padding: 10px 16px;
  margin: 20px 0 0;
  background: #fff;
}
</style>
