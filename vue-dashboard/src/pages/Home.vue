<template>
  <div class="home-container">
    <div class="home-container-title">The Rick & Morty Dashboard</div>
    <div class="home-container-content">
      <div class="home-container-content-table">
        <div class="home-container-content-table-filters">
          <div class="home-container-content-table-filters-pagination">
            <div class="home-container-content-table-filters-pagination-arrows">
              <div
                class="home-container-content-table-filters-pagination-arrows-prev pi pi-chevron-left"
                @click="onPrevPage"
              ></div>
              <div
                class="home-container-content-table-filters-pagination-arrows-next pi pi-chevron-right"
                @click="onNextPage"
              ></div>
            </div>
            <div class="home-container-content-table-filters-pagination-text">
              Results per page :
            </div>
            <div
              class="home-container-content-table-filters-pagination-dropdown"
            >
              <Dropdown
                v-model="selectedLimit"
                :options="paginationOptions"
              ></Dropdown>
            </div>
          </div>
          <div class="home-container-content-table-filters-mode">
            <div
              class="home-container-content-table-filters-mode-list"
              :class="selectedMode == 'list' ? 'selected-icon' : ''"
              @click="selectedMode = 'list'"
            >
              <div class="pi pi-bars" />
            </div>
            <div
              class="home-container-content-table-filters-mode-grid"
              :class="selectedMode == 'grid' ? 'selected-icon' : ''"
              @click="selectedMode = 'grid'"
            >
              <div class="pi pi-th-large" />
            </div>
          </div>
        </div>
        <div
          class="home-container-content-table-cards"
          :class="selectedMode == 'grid' ? 'grid' : 'list'"
        >
          <Card
            v-for="character in characters.results"
            :key="character.id"
            :mode="selectedMode"
            :character="character"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import Card from "../components/Home/Card.vue";
import Dropdown from "primevue/dropdown";
import { useStore } from "vuex";

const page = ref(1);
const store = useStore();
const characters = computed(() => {
  return store.state.characters;
});
onMounted(() => {
  store.dispatch("getCharacters", page.value);
  console.log(characters.value.results);
});

watch(page, () => {
  store.dispatch("getCharacters", page.value);
});
const selectedLimit = ref(20);
const paginationOptions = ref([20]);
const selectedMode = ref<"list" | "grid">("grid");

function onNextPage() {
  if (page.value < 44) {
    page.value++;
  }
}
function onPrevPage() {
  if (page.value > 1) {
    page.value--;
  }
}
</script>

<style scoped lang="scss">
.home-container {
  width: 100%;
  height: 100%;
  &-title {
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 800;
    font-size: 80px;
    background-color: #f5f5f5;
    color: black;
  }
  &-content {
    width: 100%;
    height: 100%;
    padding: 12px;
    color: #f5f5f5;
    &-table {
      width: 100%;
      border-radius: 4px;
      padding: 4px;

      &-filters {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
        gap: 20px;
        padding: 8px;
        &-pagination {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          &-arrows {
            display: flex;
            width: 54px;
            justify-content: space-between;
            align-items: center;
            cursor: pointer;
          }
        }
        &-mode {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 80px;
          height: 40px;
          background-color: #272b33;
          border-radius: 4px;
          color: #ffffff50;
          padding: 4px;
          cursor: pointer;
          &-list {
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &-grid {
            width: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
      &-cards {
        height: 100%;
        width: 100%;
        padding: 0 12px;
      }
    }
  }
}

.selected-icon {
  border-radius: 4px;
  width: 30px;
  height: 30px;
  color: #ffffff;
}

.pi-bars,
.pi-th-large {
  font-size: 20px;
}

.list {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 640px);
  justify-content: center;
  row-gap: 40px;
  column-gap: 40px;
}
</style>
