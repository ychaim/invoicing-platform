<template>
  <div class="content">
    <div class="pay">Please pay</div>
    <div class="btc-amount">
      <i class="fa fa-btc"></i> {{ btcAmount }}</div>
    <!-- <div class="usd-amount">10.00 USD</div> -->
    <div class="scan">Scan QR with your Bitcoin wallet</div>
    <qrcode :value="bitcoinAddress" :size="150" :type="image" :padding="10" v-if="bitcoinAddress" />
    <div class="pay">OR Pay using a Bitcoin address</div>
    <div class="btc-address">
      <a href="javascript:;"
          v-clipboard:copy="bitcoinAddress"
          v-clipboard:success="onCopy"
          v-clipboard:error="onError">{{bitcoinAddress}}</a>
    </div>
  </div>
</template>


<script>
import Qrcode from 'v-qrcode'

export default {
  name: 'PayInvoice',
  props: ['btcAmount', 'bitcoinAddress'],
  components: {
    Qrcode
  },
  computed: {
  },
  methods: {
    onCopy: function(e) {
      // TODO complete
    },
    onError: function(e) {
      // TODO complete
    },
  }
}
</script>

<style scoped lang="scss">
.content {
  color: #141414;
  font-family: "Open Sans";
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  padding: 20px 10px;

  .btc-amount {
    margin-top: 10px;
    font-size: 24px;
    font-weight: bold;
    line-height: 33px;
  }

  .usd-amount {
    color: #757575;
    font-size: 14px;
    line-height: 19px;
  }

  .scan {
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0;
  }

  .qr {
    width: 150px;
  }

  .pay {
    font-size: 18px;
    line-height: 24px;
  }

  .btc-address {
    font-size: 14px;
    line-height: 19px;
    a:link, a:visited, a:hover, a:active {
      color: #258C42;
    }
  }
}
</style>
