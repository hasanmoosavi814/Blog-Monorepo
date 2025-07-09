import { DEFAULT_PAGE_SIZE } from "@/utils/constant";
import { fetchPosts } from "@/lib/postAction";

import Posts from "@/components/templates/Posts";
import Hero from "@/components/templates/Hero";

type Props = {
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};

const Home = async ({ searchParams }: Props) => {
  const resolvedSearchParams = await searchParams;
  const page = resolvedSearchParams?.page
    ? parseInt(resolvedSearchParams.page.toString(), 10)
    : 1;

  const { totalPosts, posts } = await fetchPosts({ page, pageSize: 10 });

  return (
    <main>
      <Hero />
      <Posts
        posts={posts}
        currentPage={page ? +page : 1}
        totalPages={Math.ceil(totalPosts / DEFAULT_PAGE_SIZE)}
      />
    </main>
  );
};

export default Home;
