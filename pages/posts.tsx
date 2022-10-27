import Link from "next/link";
import Layout from "../components/Layout";
import Post from "../interfaces/post";
import { getAllPosts } from "../lib/blog";

type Props = { posts: Post[] };
export default function posts({ posts }: Props) {
  return (
    <Layout title="Posts - Kevin Palowa">
      <div className="space-y-2">
        {posts.map((post) => {
          return (
            <Link key={post.data.slug} href={`/post/${post.data.slug}`}>
              <a className="block hover:bg-gray-700 p-2 rounded-md">
                <h2 className="font-bold text-xl">{post.data.title}</h2>
                <p className="text-slate-500 dark:text-[#5e81ac]">
                  {post.data.summary}
                </p>
              </a>
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
