import BlogSectionCards from "./BlogSectionCards";

const BlogSection = () => {
  return (
    <div className="my-20">
      <div className="text-center">
        <p className="font-medium text-sky-600 my-5">BLOG</p>
        <p className="text-3xl font-medium mb-5">
          Health insights from experts
        </p>
      </div>

      <div className="flex flex-wrap">
        <BlogSectionCards
          blogImage="src/assets/images/person-silhouette.jpg"
          alt="person-hands-raised-silhouette"
          theme="Psychology"
          topic="Why Is It So Hard for Us to Change?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <BlogSectionCards
          blogImage="src/assets/images/child-happy.jpg"
          alt="happy-child"
          theme="Psychiatry"
          topic="What is attention-deficit or hyperactivity disorder?"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />

        <BlogSectionCards
          blogImage="src/assets/images/male-depressed.jpg"
          alt="male-depressed"
          theme="Psychiatry"
          topic="Everything You Need To Know About Depression"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <BlogSectionCards
          blogImage="src/assets/images/female-selfie.jpg"
          alt="female-taking-selfie"
          theme="Psychology"
          topic="Add 'health checkup' to teens' back-to-school list"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>

      <p className="flex justify-center cursor-pointer">
        <span className="m-2 text-blue-600 font-medium">All Posts</span>
        <img src="src/assets/svg/right-arrow.svg" alt="right-arrow" />
      </p>
    </div>
  );
};

export default BlogSection;
