<template>{{ character }}</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Character, getEmptyCharacter } from "../types";
import axios from "axios";

const props = defineProps<{
  characterId: string;
}>();
const character = ref<Character>(getEmptyCharacter());
onMounted(async () => {
  const data = await axios.get(
    `https://rickandmortyapi.com/api/character/${props.characterId}`
  );
  console.log(data);
  character.value = data.data;
});
</script>

<style scoped lang="scss"></style>
