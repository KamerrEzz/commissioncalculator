<template>
  <div
    class="bg-wewak-400/30 backdrop-blur-md w-full max-w-2xl p-4 rounded-md flex flex-col gap-3"
  >
    <div class="flex flex-col gap-2">
      <label for="amount"
        >Cantidad (USD)</label
      >
      <input
        v-model="amount"
        class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10"
        type="number"
        name="amount"
        id="amount"
      />
    </div>
    <div class="h-[70vh] flex flex-col gap-2 overflow-auto p-3">
      <div
        v-for="(conversion, currency) in conversions"
        :key="currency"
        class="flex items-center gap-3 border border-wewak-700/90 bg-wewak-700/50 p-3 rounded-sm"
      >
        <div>
          <label v:for="currency">{{ currency }}</label>
          <input
            v-model="conversion.rate"
            class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10"
            type="number"
            v:name="currency"
            v:id="currency"
          />
        </div>
        <div>
          <label for="convertedAmount">💱 Cambio</label>
          <input
            v-model="conversion.convertedAmount"
            class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10"
            type="number"
            name="convertedAmount"
            id="convertedAmount"
            disabled
          />
        </div>
        <div>
          <label for="paypalTotal">+ PayPal</label>
          <input
            v-model="conversion.total"
            class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10"
            type="number"
            name="paypalTotal"
            id="paypalTotal"
            disabled
          />
        </div>
        <div>
          <label for="nbTotal">- nb</label>
          <input
            v-model="conversion.nb"
            class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10"
            type="number"
            name="nbTotal"
            id="nbTotal"
            disabled
          />
        </div>
        <div>
          <label for="nbTotal">💰 Total</label>
          <input
            v-model="conversion.foryou"
            class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10"
            type="number"
            name="nbTotal"
            id="nbTotal"
            disabled
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";

const amount = ref(62.5);
const paypalCommission = ref(7);
const nbCommission = ref(20);

// Function to calculate the converted amount and PayPal commission
function calculateConvertedAmountAndCommission(
  amount: number,
  exchangeRate: number,
  paypalCommissionRate: number,
  nbCommissionRate: number
) {
  const convertedAmount = amount * exchangeRate;
  const paypalCommissionAmount = convertedAmount * (paypalCommissionRate / 100);
  const nbCommissionAmount = convertedAmount * (nbCommissionRate / 100);
  return {
    convertedAmount,
    total: convertedAmount + paypalCommissionAmount,
    nb: nbCommissionAmount,
    foryou: convertedAmount - nbCommissionAmount,
  };
}

const currencies: any = {
  USD: 1,
  MXN: 16,
  SOL: 3.7,
  CPL: 905,
  COP: 3928.33,
  ARS: 908.79,
  EUR: 0.92,
};

const conversions = reactive({}) as any;

Object.keys(currencies).forEach((currency) => {
  conversions[currency] = reactive({
    rate: currencies[currency],
    get convertedAmount() {
      return calculateConvertedAmountAndCommission(
        amount.value,
        this.rate,
        paypalCommission.value,
        nbCommission.value
      ).convertedAmount.toFixed(2);
    },
    get total() {
      return calculateConvertedAmountAndCommission(
        amount.value,
        this.rate,
        paypalCommission.value,
        nbCommission.value
      ).total.toFixed(2);
    },
    get nb() {
      return calculateConvertedAmountAndCommission(
        amount.value,
        this.rate,
        paypalCommission.value,
        nbCommission.value
      ).nb.toFixed(2);
    },
    get foryou() {
      return calculateConvertedAmountAndCommission(
        amount.value,
        this.rate,
        paypalCommission.value,
        nbCommission.value
      ).foryou.toFixed(2);
    },
  });
});
</script>
