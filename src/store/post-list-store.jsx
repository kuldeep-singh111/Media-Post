import { createContext, useCallback, useReducer } from "react";

export const PostList = createContext({
    postList: [],
    addPost: () => { },
    deletePost: () => { },
});

const postListReducer = (currPostList, action) => {
    let newPostList = currPostList;
    if (action.type === 'DELETE_POST') {
        newPostList = currPostList.filter(post => post.id !== action.payload.postId)
    }

    else if (action.type === 'ADD_INITIAL_POSTS') {
        newPostList = action.payload.posts;
    }

    else if (action.type === "ADD_POST") {

        newPostList = [action.payload, ...currPostList]
    }
    return newPostList;
};

const PostListProvider = ({ children }) => {
    const [postList, dispatchPostList] = useReducer(
        postListReducer,
        []
    );

    // const [fetching, setFetching] = useState(false);

    const addPost = (post) => {
        dispatchPostList({
            type: "ADD_POST",
            payload: post,
        });
    };


    const addInitialPosts = (posts) => {

        dispatchPostList({
            type: "ADD_INITIAL_POSTS",
            payload: {
                posts,
            },
        });
    };




    const deletePost = useCallback((postId) => {
        dispatchPostList({
            type: "DELETE_POST",
            payload: {
                postId,
            },
        });
    },
        [dispatchPostList]
    );


    // useEffect(() => {
    //     setFetching(true);

    //     const controller = new AbortController();
    //     const signal = controller.signal;

    //     fetch('https://dummyjson.com/posts', { signal })
    //         .then(res => res.json())
    //         .then(data => {
    //             addInitialPosts(data.posts);
    //             setFetching(false);
    //         });

    //     return () => {
    //         console.log("cleaning up UseEffect.");
    //         controller.abort();
    //     };
    // }, []);
    // const addPost = (post) => {
    //     dispatchPostList({
    //         type: "ADD_POST",
    //         payload: post,
    //     });
    // };


    return (
        <PostList.Provider value={{
            postList: postList,
            addPost: addPost,
            deletePost: deletePost,

        }}>
            {children}
        </PostList.Provider>
    );
};

export default PostListProvider;
