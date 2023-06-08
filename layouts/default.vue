<script setup lang="ts">
useHead({
  title: "Taller de NuxtJS con DonWeb",
});
</script>

<template>
  <div class="flex flex-col items-center justify-between h-screen">
    <header
      class="flex w-full items-center justify-center bg-green-700 text-white"
    >
      <nav class="container flex items-center justify-between p-4">
        <NuxtLink to="/">
          <h1 class="text-3xl">Taller NuxtJS</h1>
        </NuxtLink>

        <ul>
          <li><NuxtLink to="login">Login</NuxtLink></li>
        </ul>
      </nav>
    </header>

    <main class="flex-1 container p-8">
      <slot />
    </main>

    <footer
      class="text-white p-4 bg-zinc-700 flex w-full items-center justify-center"
    >
      <h2>Curso de VueJS y NuxtJS desde 0</h2>
    </footer>
  </div>
</template>
