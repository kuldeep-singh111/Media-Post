import { Form, redirect } from "react-router-dom";

const CreatePost = () => {

    // const { addPost } = useContext(PostList);
    // const navigate = useNavigate();



    return (
        <>
            <Form method="POST" className='create-post' >
                <div className="mb-3">
                    <label htmlFor="userId" className="form-label">Enter your User Id here</label>

                    <input type="text" name="userId" placeholder='Your User Id'
                        className="form-control" id="userId" />

                </div>

                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Post Title</label>

                    <input type="text" name="title" placeholder='How are you feeling today'
                        className="form-control" id="title" />
                </div>
                <div className="mb-3">
                    <label htmlFor="body" className="form-label">Post Content</label>

                    <textarea type="text" name="body" rows="4" placeholder='Tell us more about it'
                        className="form-control" id="title" />

                </div>
                <div className="mb-3">
                    <label htmlFor="reactions" className="form-label">Number of Reactions</label>

                    <input type="text" name=" reactions" placeholder='How many people reacted to this post'
                        className="form-control" id="reactions" />

                </div>

                <div className="mb-3">
                    <label htmlFor="tags" className="form-label">Enter your Hashtags here</label>

                    <input type="text" name="tags" placeholder='please Enter tags using space'
                        className="form-control" id="tags" />

                </div>

                <button type="submit" className="btn btn-primary">Post</button>
            </Form>
        </>
    )
};

export async function createPostAction(data) {
    const formData = await data.request.formData();
    const postData = Object.fromEntries(formData);
    postData.tags = postData.tags.split(" ");

    fetch('https://dummyjson.com/posts/add', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postData)
    })
        .then((res) => res.json())
        .then((post) => {

        });

    return redirect("/");

}

export default CreatePost;
