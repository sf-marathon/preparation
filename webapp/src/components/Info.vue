<template>
  <div class="od-info">
    <v-container fluid grid-list-sm>
    <v-form v-model="formValid">
      <v-text-field
        :label="varLabels.name"
        v-model="formData['name']"
        :rules="rules"
        required
      ></v-text-field>
      <v-text-field
        label="手机号"
        v-model="formData['phone']"
        :rules="rules"
        required
      ></v-text-field>
      <v-layout row wrap>
        <v-flex xs12>
          <div class="body-2">{{ varLabels.address }}</div>
        </v-flex>
        <v-flex flex xs4>
          <v-select
            v-bind:items="items"
            v-model="formData['provice']"
            label="省"
            item-value="text"
            required
            :rules="rules"
          ></v-select>
        </v-flex>
        <v-flex flex xs4>
          <v-select
            v-bind:items="items"
            v-model="formData['city']"
            label="市"
            item-value="text"
            required
            :rules="rules"
          ></v-select>
        </v-flex>
        <v-flex flex xs4>
          <v-select
            v-bind:items="items"
            v-model="formData['zone']"
            label="县/区"
            item-value="text"
            required
            :rules="rules"
          ></v-select>
        </v-flex>
      </v-layout>
      <v-text-field
        name="input-3-1"
        label="详细地址"
        v-model="formData['detail']"
        :rows="2"
        required
        multi-line
        :rules="rules"
      ></v-text-field>
    </v-form>
    </v-container>
    <v-btn
      block
      style="margin: 20px 0 0;"
      color="primary"
      @click="handleNext"
      :disabled="!formValid">
      下一步
    </v-btn>
  </div>
</template>

<script>
export default {
  beforeMount () {
    if (this.$route.name === 'Sender') {
      this.varLabels = {
        name: '寄件人',
        address: '寄件人地址'
      }
      this.type = 'send'
      this.$store.dispatch('SET_SUBTITLE', { title: '寄件人信息' })
    } else {
      this.varLabels = {
        name: '收件人',
        address: '收件人地址'
      }
      this.type = 'recive'
      this.$store.dispatch('SET_SUBTITLE', { title: '收件人信息' })
    }
    this.$store.dispatch('FETCH_ADDRESS')
  },
  computed: {
    title () {
      return this.$store.state.subTitle
    },
    address () {
      return this.$store.state.address
    }
  },
  data () {
    return {
      formValid: true,
      rules: [
        (v) => !!v || 'field is required'
      ],
      varLabels: {
        name: '',
        address: ''
      },
      type: '',
      formData: {
        name: '',
        phone: '',
        detail: '',
        provice: '',
        city: '',
        zone: ''
      },
      items: ['1', '2', '3']
    }
  },
  methods: {
    handleNext () {
      if (this.type === 'send') {
        this.$store.dispatch('SAVE_SEND_INFO', this.formData)
      } else {
        this.$store.dispatch('SAVE_RECIVE_INFO', this.formData)
      }
      this.$router.push({path: '/'})
    }
  }
}
</script>
