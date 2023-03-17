<template>
  <div
    class="pi pi-circle-fill"
    :class="
      props.status == 'Alive'
        ? 'alive'
        : props.status == 'Dead'
        ? 'dead'
        : 'unkown'
    "
  ></div>
</template>

<script setup lang="ts">
const props = defineProps<{
  status: string;
}>();
</script>

<style scoped lang="scss">
.pi-circle-fill {
  font-size: 10px;
}

.alive {
  color: green !important;
}
.dead {
  color: red;
}
.unknown {
  color: blue;
}
</style>
