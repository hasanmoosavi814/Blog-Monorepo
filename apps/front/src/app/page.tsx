import Hero from "@/components/templates/Hero";
import Posts from "@/components/templates/Posts";
import { fetchPosts } from "@/lib/postAction";

const Home = async () => {
  const posts = await fetchPosts();
  return (
    <main>
      <Hero />
      <Posts posts={posts} />
    </main>
  );
};

export default Home;
