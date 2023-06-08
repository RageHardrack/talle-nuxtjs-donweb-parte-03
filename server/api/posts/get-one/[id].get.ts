interface Post {
    id: number;
    userid: number;
    title: string;
    body: string;
}

export default defineEventHandler(async (event) => {
    const id = event.context.params!.id;

    const post: Post = await $fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  
    return { post };
  });
  