<script setup lang="ts">
import { useParameterStore } from '~/composables/store';

const store = useParameterStore()  
onServerPrefetch(() => {
  const event = useRequestEvent();
  if (event?.context?.body) {
    store.setTest(event?.context?.body.name)
  }
});

onMounted(()=>{
  console.log("mounted: "+store.test)
})

const log = () => {
  console.log("log: "+store.test)
}
</script>

<template>
    <div>
        <div>{{ store.test }}</div>
        <div @click="log()">Log</div>
    </div>
</template>