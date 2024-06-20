<template>
    <div class="bg-wewak-400/30 backdrop-blur-md w-full max-w-xl p-4 rounded-md flex flex-col gap-3">
        <div class="flex flex-col gap-2">
            <label for="mount">Cantidad (local)</label>
            <input v-model="amount" class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10" type="number"
                name="mount" id="mount">
        </div>
        <div class="flex flex-col gap-2 justify-center">
            <label for="mount">Paypal comision</label>
            <input v-model="paypalCommission" class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10" type="number"
                name="paypal" id="paypal">
        </div>
        <div class="border border-white/50 w-full" />
        <div class="flex flex-col gap-2 justify-center">
            <label for="mount">Total Local ({{amount}} + {{paypalCommission}}%)</label>
            <input v-model="total" class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10" type="number"
                name="total" id="total" readonly>
        </div>
        <div class="border border-white/50 w-full" />
        <div class="flex flex-col gap-2 justify-center">
            <label for="mount">Divisa</label>
            <input v-model="divisa" class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10" type="number"
                name="total" id="total">
        </div>
        <div class="flex flex-col gap-2 justify-center">
            <label for="mount">Convertido USD</label>
            <input v-model="convertDivisa" class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10" type="number"
                name="total" id="total" readonly>
        </div>
        <div class="border border-white/50 w-full" />
        <div class="flex flex-col gap-2 justify-center">
            <label for="mount">total USD ({{convertDivisa}} + {{paypalCommission}}%)</label>
            <input v-model="totalUSD" class="bg-wewak-900 w-full p-3 outline-none rounded-md h-10" type="number"
                name="total" id="total" readonly>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const amount = ref(1000);
const paypalCommission = ref(7);
const divisa = ref(16);

const total = computed(() => {
    let percentageAmount = Number(amount.value) * (Number(paypalCommission.value) / 100);
    return amount.value + percentageAmount;
});

const convertDivisa = computed(() => {
    return Number(amount.value) / Number(divisa.value) 
})

const totalUSD = computed(() => {
    let percentageAmount = Number(convertDivisa.value) * (Number(paypalCommission.value) / 100);
    return Number(convertDivisa.value) + percentageAmount
})



</script>
