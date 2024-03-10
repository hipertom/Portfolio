<script setup>
import { store } from '@/store.js'

defineProps({
  value: String,
  label: String,
})

function filter(value) {
  store.filterValue = value
}
</script>

<template>
  <li
    @click.prevent="filter(value)"
    :class="{'active': store.filterValue == value}"
  >
    <a href="#">{{ label }}</a>
  </li>

</template>
