import FooterSection from "../sections/FooterSection";

const posts = [
  {
    title: "5 Reasons to Switch to Cold-Pressed Juice",
    excerpt:
      "Cold-pressing keeps more vitamins and enzymes intact than heat-based juicing. Here's why it's worth the switch.",
    img: "/images/freshpick/best-watermelon.jpg",
    tag: "Health",
  },
  {
    title: "Behind the Counter at Ggaba Rd",
    excerpt:
      "A look at how every FreshPick cup gets hand-picked, washed and pressed the same morning it's served.",
    img: "/images/freshpick/team-1.jpg",
    tag: "Our Story",
  },
  {
    title: "Avocado Cream: Our Best Seller, Explained",
    excerpt:
      "Why one flavor keeps outselling the rest — and what makes it so creamy without adding a drop of dairy.",
    img: "/images/freshpick/best-avocado.jpg",
    tag: "Flavors",
  },
  {
    title: "Passion Fruit Season Is Here",
    excerpt:
      "Tangy, bright and in peak season — here's what makes this batch of passion fruit special.",
    img: "/images/freshpick/best-passionfruit.jpg",
    tag: "Flavors",
  },
  {
    title: "Meet the Team Keeping It Fresh",
    excerpt:
      "The faces behind every delivery bag and every cup, hand-picking and pressing your juice every single day.",
    img: "/images/freshpick/team-2.jpg",
    tag: "Our Story",
  },
  {
    title: "Why We Skip Added Sugar",
    excerpt:
      "Ripe fruit is sweet enough on its own. Here's our take on why added sugar has no place in real juice.",
    img: "/images/freshpick/best-mango.jpg",
    tag: "Health",
  },
];

const BlogPage = () => {
  return (
    <>
      <section className="blog-hero">
        <div className="container mx-auto md:px-10 px-5 pt-36 md:pt-48 pb-16 md:pb-20 text-center">
          <span className="menu-kicker">The Juice Journal</span>
          <h1 className="menu-title mt-4">From Our Blog</h1>
          <p className="font-paragraph text-lg mt-4 text-[#123b1b99] max-w-xl mx-auto">
            Stories from behind the counter, flavor deep-dives, and the odd
            juice tip worth knowing.
          </p>
        </div>
      </section>

      <section className="blog-grid-section">
        <div className="container mx-auto md:px-10 px-5 pb-24">
          <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 md:gap-8">
            {posts.map((post) => (
              <article key={post.title} className="blog-card">
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
