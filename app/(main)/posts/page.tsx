import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";

const PostsPage = () => {
    return (<>
        <BackButton text='Go Back' link='/'/>
        <PostsTable/>
    </>)
}
export default PostsPage;