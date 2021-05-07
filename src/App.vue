<template>
  <div class="site-wrapper">

    <header class="site-header">
      <div v-if="hasNavBar">
        <nav-bar />
      </div>
    </header>

    <main class="site-content">
      <router-view></router-view>
    </main>

    <aside class="site-aside">
      Aside
    </aside>

    <footer class="site-footer">
      Footer
    </footer>

  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';

export default {
  components: {
    NavBar,
  },

  computed: {
    hasNavBar() {
      return !(this.$route.meta.noNavBar || false);
    },
  },
};
</script>

<style lang="scss">
// Cannot be empty?!
.foo {
  content: "bar";
}
</style>
