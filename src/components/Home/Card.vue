<template>
  <div
    class="card-container"
    :class="props.mode == 'list' ? 'wide' : ''"
    v-if="!loading"
  >
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
          <LifeStatus :status="props.character.status" />
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
          {{ episode.name }}
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="loader">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, onMounted } from "vue";
import EpisodeService from "../../services/EpisodeService";
import { Character, Episode, getEmptyEpisode } from "../../types";
import { useRouter } from "vue-router";
import LifeStatus from "../Common/LifeStatus.vue";
const router = useRouter();

const props = defineProps<{
  mode: "list" | "grid";
  character: Character;
}>();
const loading = ref(false);
const episode = ref(getEmptyEpisode());
onMounted(async () => {
  loading.value = true;
  await EpisodeService.getEpisode(props.character.episode[0])
    .then((response) => {
      episode.value = response.data;
    })
    .catch((error) => {
      console.log(error);
    });
  loading.value = false;
});
</script>

<style scoped lang="scss">
.card-container {
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

@media (max-width: 768px) {
  .card-container {
    width: 300px;
    height: 200px;
    border-radius: 8px;
    background-color: #3c3e44;
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
      gap: 12px;
      &-top {
        &-name {
          font-size: 16px;
          font-weight: 600;
        }
        &-status {
          font-size: 12px;
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
          font-size: 14px;
        }
      }
      &-bottom {
        &-title {
          font-size: 16px;
          color: #9e9e9e;
          margin-bottom: 4px;
        }
        &-seen-in {
          font-size: 14px;
          max-width: 150px;
          overflow: hidden;
          text-overflow: ellipsis;
        }
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

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.bar {
  height: 20px;
  width: 4px;
  background-color: #333;
  margin: 0 2px;
  animation: stretch 1.2s ease-in-out infinite;
}

.bar:nth-child(1) {
  animation-delay: -1.1s;
}

.bar:nth-child(2) {
  animation-delay: -1s;
}

.bar:nth-child(3) {
  animation-delay: -0.9s;
}

.bar:nth-child(4) {
  animation-delay: -0.8s;
}

.bar:nth-child(5) {
  animation-delay: -0.7s;
}

@keyframes stretch {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
  }
}
</style>
