<script setup>
import { ref } from 'vue'
import { vElementVisibility } from '@vueuse/components'

const target = ref(null)
const visibleWidth = ref(0)

const props = defineProps({
  label: String,
  percentage: Number,
})

function onElementVisibility(isVisible) {
  visibleWidth.value = isVisible ? props.percentage : 0
}
</script>

<template>
  <div class="skill_item" ref="target">

    <h4>{{ label }}</h4>
    <div class="progress_br">
      <div class="progress">
        <div v-element-visibility="[onElementVisibility, { scrollTarget: target }]" class="progress-bar" role="progressbar" aria-valuenow="{{ percentage }}" aria-valuemin="0" aria-valuemax="100" :style="{ width: visibleWidth + '%' }"></div>
      </div>
    </div>
  </div>
</template>
