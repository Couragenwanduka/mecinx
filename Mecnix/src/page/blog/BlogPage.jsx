import BlogNavBar from "../../components/BlogNav";
// import mangetMan from "../../images/magnetman.png";
import blog from "../../images/blogimage.jpeg";
import FeatureSlideshow from "./features";
import Footer from "../../components/Footer";

const BlogPage = () => {
    const blogs = [
        {
            title: "Title",
            description: "Description",
            author: "author",
            date: "6, August 2015",
            image: blog
        },
        {
            title: "Title2",
            description: "Description",
            author: "author",
            date: "6, August 2016",
            image: blog
        },
        {
            title: "Title3",
            description: "Description",
            author: "author",
            date: "6, August 2017",
            image: blog
        },
        {
            title: "Title4",
            description: "Description",
            author: "author",
            date: "6, August 2018",
            image: blog
        },
        {
            title: "Title3",
            description: "Description",
            author: "author",
            date: "6, August 2017",
            image: blog
        },
        {
            title: "Title3",
            description: "Description",
            author: "author",
            date: "6, August 2017",
            image: blog
        },{
            title: "Title3",
            description: "Description",
            author: "author",
            date: "6, August 2017",
            image: blog
        },{
            title: "Title3",
            description: "Description",
            author: "author",
            date: "6, August 2017",
            image: blog
        },
    ]

    return(
      <>
         <header className="z-50">
            <BlogNavBar />
         </header>
         <main className="z-30">

            <section>
                <FeatureSlideshow className=''/>
            </section>

            <section>
               <div>
                  <div>
                    <h1 className="mt-10 ml-5 text-xl font-saira font-semibold">Recent Blog</h1>
                  </div>
                  <div className=" max-h-full mt-5 md:grid md:grid-flow-row md:grid-cols-3 md:gap-4 max-w-96 md:max-w-full md:mr-5  ml-5">
                    {blogs.map((blog,index)=>{
                        return (
                            <div key={index} className="flex flex-col mt-5">
                                <img src={blog.image} alt="Blog" className=" md:h-72 rounded-xl"/>
                                <div className="ml-5">
                                    <h2 className="font-semibold text-xl font-saira">{blog.title}</h2>
                                    <p className="text-gray-500 text-base font-saira">{blog.description}</p>
                                    <small className="text-gray-500 text-base font-saira">{blog.author}</small>
                                </div>
                            </div>
                        )

                     }) }
                    
                  </div>
               </div>
            </section>

            <section>
               <Footer/>
            </section>
         </main>
      </>
    )
}

export default BlogPage;