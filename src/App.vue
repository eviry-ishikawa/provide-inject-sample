<template>
  <HelloWorld msg="Hello Vue 3.0 + Vite" />
</template>

<script lang="ts">
import { defineComponent, provide } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { CounterKey } from "./components/useCounterKey"
import { useCounter } from "./components/useCounter"
 
export default defineComponent({
  components:{
    HelloWorld
  },
  setup(){
    provide(CounterKey,useCounter())
  }
})
</script>
