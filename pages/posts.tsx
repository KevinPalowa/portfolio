import Link from "next/link";
import Layout from "../components/Layout";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/blog";

type Props = { posts: Post[] };
export default function posts({ posts }: Props) {
  return (
    <Layout title="Posts - Kevin Palowa">
      <h1 className="text-5xl font-bold">Blog</h1>
      <p className="my-5">Writing to learning</p>
      <div className="space-y-2">
        {posts.map((post) => {
          return (
            <Link
              key={post.data.slug}
              href={`/post/${post.data.slug}`}
              className="block hover:text-blue-500 rounded-md"
            >
              <h2 className="font-bold text-xl">{post.data.title}</h2>
              <p className="text-slate-500 dark:text-[#5e81ac]">
                {post.data.summary}
              </p>
            </Link>
          );
        })}
      </div>
    </Layout>
  );
}

export function getStaticProps() {
  const posts = getAllPosts();
  return { props: { posts: posts } };
}
