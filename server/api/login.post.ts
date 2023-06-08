export default defineEventHandler(async (event) => {
  const { username, password } = await readBody(event);

  console.log({ username, password });

  if (username === "dcolmenares" && password === "password") {
    setCookie(event, "username", "dcolmenares");
    return { success: true };
  }

  return { success: false };
});
