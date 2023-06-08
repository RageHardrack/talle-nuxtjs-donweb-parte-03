<script setup lang="ts">
const { data } = await useFetch("/api/posts/get-post");

definePageMeta({
  middleware: "auth",
  title: "Home page",
});
</script>

<template>
  <div class="flex flex-col gap-4">
    <h2>Bienvenidos al Curso de Vue y Nuxt, parte 3 desde pages</h2>

    <ul v-if="data" class="p-4 rounded flex flex-col gap-2">
      <li
        class="bg-zinc-200 p-2 rounded"
        v-for="post in data.posts"
        :key="post.id"
      >
        <NuxtLink :to="`/post/${post.id}`">{{ post.title }}</NuxtLink>
      </li>
    </ul>
  </div>
</template>
