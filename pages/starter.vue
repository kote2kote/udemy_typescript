<template>
  <div id="Starter" class="Starter">
    <div class="inner"></div>
  </div>
</template>

<script>
import Loader from '~/components/Loader'
import common from '~/mixins/common'
export default {
  name: 'starter',
  components: {
    // Loader
  },
  mixins: [common],
  data() {
    return {
      title: 'ページ名',
      description: 'ページの説明文',
      bodyClass: 'page-category page-pageName'
    }
  },
  head() {
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.description
        }
      ],
      bodyAttrs: {
        class: this.bodyClass
      }
    }
  },
  props: {
    //
  },
  created() {
    //
  },
  mounted() {
    //
  }
}
</script>

<style lang="scss" scoped>
//
</style>
