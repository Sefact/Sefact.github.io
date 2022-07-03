<script lang="ts">
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
  components: {},
  setup() {
    onMounted(() => {});

    onUnmounted(() => {});

    return {};
  },
  methods: {},
});
</script>

<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import "assets/css/app.scss";
</style>
