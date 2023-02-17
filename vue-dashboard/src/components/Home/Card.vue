<template>
  <div class="card-container">
    <div class="card-container-image">
      <img src="https://rickandmortyapi.com/api/character/avatar/106.jpeg" />
    </div>
    <div class="card-container-content">
      <div class="card-container-content-top">
        <div class="card-container-content-top-name">Dr. Schmidt</div>
        <div class="card-container-content-top-status">
          <div class="pi pi-circle-fill"></div>
          <div class="card-container-content-top-status-text">
            Unkown - Human
          </div>
        </div>
      </div>
      <div class="card-container-content-center">
        <div class="card-container-content-center-title">
          Last known location:
        </div>
        <div class="card-container-content-center-location">
          Citadel of Ricks
        </div>
      </div>
      <div class="card-container-content-bottom">
        <div class="card-container-content-bottom-title">First seen in:</div>
        <div class="card-container-content-bottom-seen-in">Mortynight Run</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.card-container {
  width: 600px;
  height: 220px;
  background-color: #606268;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 4px 6px -1px,
    rgb(0 0 0 / 6%) 0px 2px 4px -1px;
  display: flex;

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

.pi-circle-fill {
  font-size: 10px;
}
</style>
