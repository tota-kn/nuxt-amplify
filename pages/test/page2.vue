<script setup lang="ts">
const router = useRouter();
const postData = ref<any>(null);

const event = useRequestEvent();
postData.value = event?.context?.body
console.log(postData.value)
</script>

<template>
    <div>aaaa</div>
</template>