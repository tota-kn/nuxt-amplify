<template>
  <form method="post" action="/test/page">
      <input type="text" name="name" :value="text" />
      <input type="submit" />
  </form>
  index
</template>

<script setup lang="ts">
const s = "1234567890"
let text = ""
for (let i = 0; i < 100000; i++) {
  text += s
}
</script>