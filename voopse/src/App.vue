<script setup>
import { onMounted, onUnmounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useWindowSizeStore } from '@/stores/windowSize';
import { RouterView } from 'vue-router'

const windowSizeStore = useWindowSizeStore();

const { width, height } = storeToRefs(windowSizeStore);

onMounted(() => {
  windowSizeStore.start();
});

onUnmounted(() => {
  windowSizeStore.stop();
});
</script>

<template>
  <RouterView />
</template>

<style scoped>

</style>
