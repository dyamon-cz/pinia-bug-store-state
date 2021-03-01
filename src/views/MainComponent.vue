<template>
  <div>
    <h1>{{ main.innerState.counter }}</h1>
    <router-link to="/second" tag="button">go</router-link>
    <button @click="main.innerState.counter++">click</button>
  </div>
</template>

<script>
import { useMainStore } from "@/stores/test-store";
import { computed, defineComponent } from "@vue/composition-api";

export default defineComponent({
  setup() {
    const main = useMainStore();
    console.log(main.innerState.counter);
    main.innerState.counter = main.innerState.counter + 1;
    console.log("count");
    console.log(main.innerState.counter);

    return {
      // gives access to the whole store
      main,
      // gives access only to specific state
      state: computed(() => main.innerState.counter),
    };
  },
});
</script>
