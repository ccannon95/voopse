import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useWindowSizeStore = defineStore('windowSize', () => {
  const width = ref(0);
  const height = ref(0);

  function updateWindowSize() {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  }

  function start() {
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
  }

  function stop() {
    window.removeEventListener('resize', updateWindowSize);
  }

  return { width, height, start, stop };
});