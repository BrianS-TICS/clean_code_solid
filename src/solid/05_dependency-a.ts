import { PostService } from './05_dependency-b';
import { JsonDataBaseService, LocalDataBaseService, WebApiService } from './05_dependency-c';


// Main
(async () => {

    const provider = new WebApiService();
    const postService = new PostService(provider);

    const posts = await postService.getPosts();

    console.log({ posts })


})();