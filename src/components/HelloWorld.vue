<template>
  <button @click="increment">count is: {{ state.count }}</button>
</template>

<script lang="ts">
import { defineComponent, inject, ref } from "vue";
import { CounterStore } from "./useCounter";
import { CounterKey } from "./useCounterKey";

export default defineComponent({
  setup(props){
    const count = ref(0)
    const { state } = inject(CounterKey) as CounterStore

    const { increment } = inject(CounterKey) as CounterStore

    return ({
      count,
      state,
      increment
    })
    
  }
})
</script>
