import Image from "next/image";
import Layout from "../../components/Layout";
import Post from "../../interfaces/post";
import { getAllSlug, getPostBySlug } from "../../lib/blog";
type Props = { post: Post };
export default function post({ post }: Props) {
  return (
    <Layout title={`${post.data.title} - Kevin Palowa`}>
      <h2 className="font-bold text-3xl mb-5">{post.data.title}</h2>
      <Image
        width={700}
        height={475}
        sizes="100vw"
        style={{
          width: "100%",
          height: "auto",
        }}
        alt="banner"
        src="/images/post/git.png"
      />
      <p className="text-sm mt-2 italic mb-5">
        Published on {post.data.createdAt}
      </p>
      <article
        className="prose dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: post.content }}
      ></article>
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
    params: { slug: slug.replace(".md", "") },
  }));
  return {
    paths: slugs,
    fallback: false, // can also be true or 'blocking'
  };
}
