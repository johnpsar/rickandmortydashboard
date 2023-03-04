<template>
  <div class="character-container" v-if="!loading">
    <div class="character-container-header">
      <div
        class="character-container-header-back pi pi-arrow-left"
        @click="router.push('/home')"
      ></div>
      <div class="character-container-header-title">
        {{ character.name }}
      </div>
    </div>
    <div class="character-container-content">
      <div class="character-container-content-image">
        <img :src="character.image" />
      </div>
      <div class="character-container-content-info">
        <div class="character-container-content-info-origin-pair">
          <div class="character-container-content-info-origin-pair-title">
            Origin :
          </div>
          <div
            class="character-container-content-info-origin-pair-content"
            v-if="character.origin.name != 'unknown'"
          >
            {{ origin.name }}
          </div>
          <div
            class="character-container-content-info-origin-pair-content"
            v-else
          >
            Unknown
          </div>
        </div>
        <div class="character-container-content-info-species-pair">
          <div class="character-container-content-info-species-pair-title">
            Species :
          </div>
          <div class="character-container-content-info-species-pair-content">
            {{ character.species }}
          </div>
        </div>
        <div class="character-container-content-info-gender-pair">
          <div class="character-container-content-info-gender-pair-title">
            Gender :
          </div>
          <div class="character-container-content-info-gender-pair-content">
            {{ character.gender }}
          </div>
        </div>
        <div class="character-container-content-info-location-pair">
          <div class="character-container-content-info-location-pair-title">
            Location :
          </div>
          <div class="character-container-content-info-location-pair-content">
            {{ character.location.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>Loading ...</div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import {
  Character,
  getEmptyCharacter,
  Location,
  getEmptyLocation,
} from "../types";
import axios from "axios";
import { useRouter } from "vue-router";
import CharacterService from "../services/CharacterService";
import LocationService from "../services/LocationService";
const router = useRouter();

const props = defineProps<{
  characterId: string;
}>();
const loading = ref(false);
const character = ref<Character>(getEmptyCharacter());
const origin = ref<Location>(getEmptyLocation());
onMounted(async () => {
  loading.value = true;
  await CharacterService.getCharacter(props.characterId)
    .then((response) => {
      character.value = response.data;
    })
    .catch((error) => {
      console.log(error);
      router.push("/home");
    });
  await LocationService.getLocation(character.value.location.url)
    .then((response) => {
      origin.value = response.data;
    })
    .catch((error) => {
      console.log(error);
      router.push("/home");
    });
  loading.value = false;
});
</script>

<style scoped lang="scss">
.character-container {
  width: 100%;
  height: 100%;
  &-header {
    width: 100%;
    height: 100px;
    color: white;
    font-size: 40px;
    display: flex;
    align-items: center;
    .pi-arrow-left {
      font-size: 28px;
    }
    &-back {
      height: 100%;
      width: 60px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    &-title {
      //hackia gia na nai centered
      width: calc(100% - 120px);
      display: flex;
      justify-content: center;
    }
  }
  &-content {
    display: flex;
    padding: 40px;
    gap: 40px;
    &-image {
      width: 40%;
      height: auto;
      img {
        width: 100%;
        height: auto;
        border-radius: 4px;
      }
    }
    &-info {
      color: white;
      display: flex;
      flex-direction: column;
      gap: 60px;
      &-origin-pair {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-title {
          color: #2cadd1;
          font-size: 32px;
        }
        &-content {
          font-size: 24px;
        }
      }
      &-species-pair {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-title {
          color: #2cadd1;
          font-size: 32px;
        }
        &-content {
          font-size: 24px;
        }
      }
      &-gender-pair {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-title {
          color: #2cadd1;
          font-size: 32px;
        }
        &-content {
          font-size: 24px;
        }
      }
      &-location-pair {
        display: flex;
        flex-direction: column;
        gap: 12px;
        &-title {
          color: #2cadd1;
          font-size: 32px;
        }
        &-content {
          font-size: 24px;
        }
      }
    }
  }
}

@media (max-width: 768px) {
  .character-container-header {
    font-size: 2em;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .character-container-content {
    flex-direction: column;
    padding: 0 40px 20px 40px;
    gap: 12px;

    &-image {
      width: 100%;
    }
    &-info {
      gap: 12px;
      &-origin-pair {
        display: flex;
        flex-direction: column;
        gap: 4px;
        &-title {
          color: #2cadd1;
          font-size: 20px;
        }
        &-content {
          font-size: 16px;
        }
      }
      &-species-pair {
        display: flex;
        flex-direction: column;
        gap: 4px;

        &-title {
          color: #2cadd1;
          font-size: 20px;
        }
        &-content {
          font-size: 16px;
        }
      }
      &-gender-pair {
        display: flex;
        flex-direction: column;
        gap: 4px;

        &-title {
          color: #2cadd1;
          font-size: 20px;
        }
        &-content {
          font-size: 16px;
        }
      }
      &-location-pair {
        display: flex;
        flex-direction: column;
        gap: 4px;
        &-title {
          color: #2cadd1;
          font-size: 20px;
        }
        &-content {
          font-size: 16px;
        }
      }
    }
  }
}
</style>
