<template>
  <div class="home-container">
    <div class="home-container-title">The Rick & Morty Dashboard</div>
    <div class="home-container-content">
      <div class="home-container-content-table">
        <div class="home-container-content-table-filters">
          <div class="home-container-content-table-filters-pagination">
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
        <div class="home-container-content-table-cards">
          <div class="home-container-content-table-cards-card">
            <Card />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Card from "../components/Home/Card.vue";
import Dropdown from "primevue/dropdown";
const selectedLimit = ref(20);
const paginationOptions = ref([10, 20, 50, 100]);
const selectedMode = ref<"list" | "grid">("list");
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
      height: 100%;
      background-color: #2d343f;
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
</style>
