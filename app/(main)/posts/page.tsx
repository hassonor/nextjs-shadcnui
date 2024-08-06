import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostPagination from "@/components/posts/PostPagination";

const PostsPage = () => {
    return (<>
        <BackButton text='Go Back' link='/'/>
        <PostsTable/>
        <PostPagination/>
    </>)
}
export default PostsPage;