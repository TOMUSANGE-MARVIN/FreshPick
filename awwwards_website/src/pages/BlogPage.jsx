import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { blogTopics } from "../constants";
import FooterSection from "../sections/FooterSection";

const BlogPage = () => {
  useGSAP(() => {
    gsap.from(".blog-card", {
      y: 30,
      opacity: 0,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: ".blog-grid-section",
        start: "top 80%",
      },
    });
  });

  return (
    <>
      <section className="blog-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-16 md:pb-20 text-center">
          <span className="menu-kicker">FreshPick Journal</span>
          <h1 className="menu-title mt-4">FreshPick Journal</h1>
          <p className="font-paragraph text-lg mt-4 text-[#123b1b99] max-w-xl mx-auto">
            Discover fresh ideas, food stories, juice inspiration, FreshPick
            updates and helpful guides from the FreshPick team.
          </p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container mx-auto md:px-10 px-5 pb-24">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
            {blogTopics.map((post) => (
              <article key={post.title} className="blog-card relative">
                <span className="blog-teaser-badge">Coming Soon</span>
                <div className="blog-card-img">
                  <img src={post.img} alt={post.title} />
                  <span className="blog-card-tag">{post.tag}</span>
                </div>
                <div className="p-6">
                  <h3 className="blog-card-title">{post.title}</h3>
                  <p className="font-paragraph text-sm mt-2 text-[#123b1b99] leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FooterSection />
    </>
  );
};

export default BlogPage;
