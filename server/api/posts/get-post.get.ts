interface Post {
    id: number;
    userid: number;
    title: string;
    body: string;
}

export default defineEventHandler(async (event) => {
    const posts: Post[] = await $fetch("https://jsonplaceholder.typicode.com/posts");
  
    return { posts };
  });
  