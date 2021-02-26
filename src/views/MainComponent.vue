<template>
  <div>
    <h1>{{ main.counter }}</h1>
    <router-link to="/second" tag="button">go</router-link>
    <button @click="main.counter++">click</button>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/test-store";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const main = useMainStore();
    console.log(main.counter);
    main.counter = main.counter + 1;
    console.log("count");
    console.log(main.counter);

    return {
      // gives access to the whole store
      main,
      // gives access only to specific state
      state: computed(() => main.counter),
      // gives access to specific getter; like `computed` properties
      doubleCount: computed(() => main.doubleCount),
    };
  },
});
</script>
