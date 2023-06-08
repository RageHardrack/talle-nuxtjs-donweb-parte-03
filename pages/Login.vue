<script setup lang="ts">
const user = reactive({
  username: "",
  password: "",
});
const error = ref(false);
const errorMessage = ref("Usuario incorrecto");
const { push } = useRouter();

const handleSubmit = async () => {
  const { data } = await useFetch("/api/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  });
  console.log({ data: data.value });

  if (data.value?.success) return push("/");

  error.value = true;

  setTimeout(() => {
    error.value = false;
  }, 3000);
};
</script>

<template>
  <form
    @submit.prevent="handleSubmit"
    class="flex flex-col gap-4 bg-zinc-200 w-1/4 rounded shadow p-4 mx-auto"
  >
    <h2>Iniciar sesión</h2>
    <label for="username">
      <input
        class="input"
        v-model="user.username"
        type="text"
        placeholder="Username"
      />
    </label>
    <label for="password">
      <input
        class="input"
        v-model="user.password"
        type="password"
        placeholder="Password"
      />
    </label>

    <button
      class="flex px-3 py-1 bg-blue-600 rounded items-center justify-center text-white"
      type="submit"
    >
      Login
    </button>
    <p
      class="p-2 bg-red-600 text-white flex items-center justify-center rounded"
      v-if="error"
    >
      {{ errorMessage }}
    </p>
  </form>
</template>

<style lang="postcss">
.input {
  @apply flex px-2 py-1 rounded;
}
</style>
