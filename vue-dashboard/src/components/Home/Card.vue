<template>
  <div class="card-container" :class="props.mode == 'list' ? 'wide' : ''">
    <div
      class="card-container-image"
      :class="props.mode == 'list' ? 'wide-image' : ''"
    >
      <img :src="props.character.image" />
    </div>
    <div class="card-container-content">
      <div class="card-container-content-top">
        <div class="card-container-content-top-name">
          {{ props.character.name }}
        </div>
        <div class="card-container-content-top-status">
          <div
            class="pi pi-circle-fill test"
            :class="
              props.character.status == 'Alive'
                ? 'alive'
                : props.character.status == 'Dead'
                ? 'dead'
                : 'unkown'
            "
          ></div>
          <div class="card-container-content-top-status-text">
            <span
              >{{ props.character.status }} -
              {{ props.character.species }}</span
            >
          </div>
        </div>
      </div>
      <div class="card-container-content-center">
        <div class="card-container-content-center-title">
          Last known location:
        </div>
        <div class="card-container-content-center-location">
          {{ props.character.location.name }}
        </div>
      </div>
      <div class="card-container-content-bottom">
        <div class="card-container-content-bottom-title">First seen in:</div>
        <div class="card-container-content-bottom-seen-in">
          //TODO fetch episode
          {{ props.character.episode[0] }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { GridRowEndProperty } from "csstype";
import { ref, defineProps } from "vue";
import { Character } from "../../types";
const props = defineProps<{
  mode: "list" | "grid";
  character: Character;
}>();
</script>

<style scoped lang="scss">
.card-container {
  width: 640px;
  height: 240px;
  background-color: #3c3e44;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  display: flex;
  cursor: pointer;
  &:hover {
    opacity: 0.6;
  }

  &-image {
    width: 40%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      border-radius: 8px 0 0 8px;
      object-fit: cover;
    }
  }
  &-content {
    width: 60%;
    height: 100%;
    padding: 14px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    &-top {
      &-name {
        font-size: 28px;
        font-weight: 600;
      }
      &-status {
        font-size: 16px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 4px;
      }
    }
    &-center {
      &-title {
        font-size: 16px;
        color: #9e9e9e;
        margin-bottom: 4px;
      }
      &-location {
        font-size: 18px;
      }
    }
    &-bottom {
      &-title {
        font-size: 16px;
        color: #9e9e9e;
        margin-bottom: 4px;
      }
      &-seen-in {
        font-size: 18px;
      }
    }
  }
}

.wide {
  width: 100%;
  height: 300px;
  &-image {
    width: auto;
  }
}
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
