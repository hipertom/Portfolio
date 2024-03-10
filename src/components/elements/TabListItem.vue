<script setup>

defineProps({
  timePeriod: String,
  label: String,
  title: String,
  location: String,
})

</script>

<template>
  <li>
    <span></span>
    <div class="media">
      <div class="d-flex">
        <p>{{ timePeriod }}</p>
      </div>
      <div class="media-body">
        <h4>{{ label }}</h4>
        <p>{{ title }} <br />{{ location }}</p>
      </div>
    </div>
  </li>
</template>
