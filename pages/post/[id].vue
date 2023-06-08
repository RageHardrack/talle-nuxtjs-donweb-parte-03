<script setup lang="ts">
const { params } = useRoute();

const { data } = await useLazyFetch(`/api/posts/get-one/${params.id}`);

definePageMeta({
  middleware: "auth",
});
</script>

<template>
  <div v-if="data" class="flex flex-col gap-4">
    <h2 class="font-bold text-2xl">{{ data.post!.title }}</h2>
    <p>{{ data.post!.body }}</p>
  </div>
</template>
