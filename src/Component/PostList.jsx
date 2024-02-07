
import Post from './Post';
import { PostList as PostListData } from "../store/post-list-store";
import Welcome from './Welcome';
import { useLoaderData } from 'react-router-dom';


// using as we can change name of the statement!

const PostList = () => {

    const postList = useLoaderData();


    // const [dataFetched, setDataFetched] = useState(false);

    // if (dataFetched === false) {
    //     fetch('https://dummyjson.com/posts')
    //         .then(res => res.json())
    //         .then(data => {
    //             addInitialPosts(data.posts);
    //         });
    //     setDataFetched(true);
    // }
    return (
        <>

            {postList.length === 0 &&
                <Welcome />}
            {postList.map((post) => (
                <Post key={post.id} post={post} />
            ))}



        </>
    );

};


export const postLoader = () => {
    return fetch('https://dummyjson.com/posts')
        .then(res => res.json())
        .then(data => {
            return data.posts;

        });
}
export default PostList;
