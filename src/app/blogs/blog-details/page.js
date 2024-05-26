import BlogContent from "@/Blogs/BlogDetails/BlogContent";
import ContentParent from "@/Blogs/BlogDetails/MainContent/ContentParent";
import CommentSection from "@/Blogs/BlogDetails/MainContent/MainContent2/CommentSection";
import NavBar from "@/Blogs/BlogDetails/NavBar";

export default function BlogDetails() {
    return <>
    <BlogContent/>
    <NavBar/>
    <ContentParent/>
    <CommentSection/>
    </>
  }
  