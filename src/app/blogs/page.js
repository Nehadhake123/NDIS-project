import BlogContent from "@/Blogs/BlogPage/BlogContent";
import AuthorDetails from "@/Blogs/BlogPage/MainContent/AuthorDetails";
import NavBar from "@/Blogs/BlogPage/Navbar";

export default function Blogs() {
    return <>
    <BlogContent/>
    <NavBar/>
    <section className="self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full">
    <AuthorDetails/>
        </section>
    
    </>
  }
  