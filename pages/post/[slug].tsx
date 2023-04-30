import Image from "next/image";
import { MDXRemote } from "next-mdx-remote";
import Layout from "../../components/Layout";
import Post from "../../interfaces/post";
import { getAllSlug, getPostBySlug } from "../../lib/blog";
type Props = { post: Post };
export default function post({ post }: Props) {
  return (
    <Layout title={`${post.data.title} - Kevin Palowa`}>
      <h1 className="font-bold text-4xl mb-5">{post.data.title}</h1>
      <div className="w-[700px] h-[475px] relative">
        <Image
          alt="banner"
          src={`/images/post${post.data.thumbnail}`}
          fill
          className="object-cover"
        />
      </div>
      <p className="text-sm mt-2 italic mb-5 text-[#5e81ac]">
        Published on {post.data.createdAt}
      </p>

      <article className="prose dark:prose-invert">
        <MDXRemote compiledSource={post.content} />
      </article>
    </Layout>
  );
}
type Params = {
  params: {
    slug: string;
  };
};
export async function getStaticProps({ params }: Params) {
  const post = await getPostBySlug(params.slug);
  return { props: { post: post } };
}

export function getStaticPaths() {
  const slugs = getAllSlug().map((slug) => ({
    params: { slug: slug.replace(".mdx", "") },
  }));
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
}
