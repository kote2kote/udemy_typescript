<template>
  <div class="w-full">
    <div class="container">
      <h1 v-if="error.statusCode === 404">
        <div class="inner h-full flex justify-center items-center i-size text-gray-500">
          <span class="inline-block"><i class="fas fa-exclamation-circle"></i></span>
          <span class="inline-block pl-4">404 page not found...</span>
        </div>
      </h1>
      <h1 v-else>エラーが発生しました</h1>
      <!-- <nuxt-link to="/">ホーム</nuxt-link> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  .inner {
    padding-top: 6.8rem;
  }
  .i-size {
    font-size: rem(60);
  }
}
</style>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null,
    },
  },
}
</script>
