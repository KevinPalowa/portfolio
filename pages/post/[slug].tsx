import Layout from "../../components/Layout";
import Post from "../../interfaces/post";
import { getAllSlug, getPostBySlug } from "../../lib/blog";

type Props = { post: Post };
export default function post({ post }: Props) {
  return (
    <Layout title={`${post.data.title} - Kevin Palowa`}>
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
