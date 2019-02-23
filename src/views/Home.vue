<template>
  <div class="container">
    <div class="container__downloader">
      <Downloader />
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  components: {
    Downloader: () => import('@/components/Downloader')
  }
}
</script>

<style>
.container {
  width: 90%;
  max-width: 1092px;
  min-width: 819px;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(247, 247, 247);
}
.container__downloader {
  width: 50%;
  padding: 50px 0;
  margin-left: auto;
  margin-right: auto;
}
</style>
