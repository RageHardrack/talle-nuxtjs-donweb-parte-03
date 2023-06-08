export default defineNuxtRouteMiddleware(() => {
  const user = useCookie("username");

  // @ts-ignore
  if (!user?.value) {
    return navigateTo("/login");
  }
});
