import { InjectionKey } from "vue"
import { CounterStore } from "./useCounter"

export const CounterKey : InjectionKey<CounterStore> = Symbol("CounterStore")