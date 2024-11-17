<template>
    <form method="post" action="test/page">
        <input type="text" name="name" />
        <input type="submit" />
    </form>
    index
</template>

<script setup lang="ts">
const headers = useRequestHeaders()
console.log(headers["User-Agent"])
</script>