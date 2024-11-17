<script setup lang="ts">
const router = useRouter();
const postData = ref<any>(null);

const event = useRequestEvent();
postData.value = event?.context?.body
</script>

<template>
    <div>aaaa</div>
    <pre>{{ postData }}</pre>
</template>