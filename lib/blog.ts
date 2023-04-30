import { readdirSync, readFileSync } from "fs";
import matter from "gray-matter";
import { remark } from "remark";
import remarkHtml from "remark-html";
import remarkGfm from "remark-gfm";
import rehypePrism from "rehype-prism-plus";
import { serialize } from "next-mdx-remote/serialize";
export function getAllSlug(): string[] {
  return readdirSync("./blogs");
}
async function markdownToHtml(markdown: string) {
  const html = await serialize(markdown, {
    mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypePrism] },
    parseFrontmatter: true,
  });

  return html;
}
export function getAllPosts() {
  const files = getAllSlug();
  let res: any = [];
  files.forEach(async (file) => {
    const post = matter(readFileSync(`./blogs/${file}`, "utf8"));
    const html = await remark().use(remarkHtml).process(post.content);
    res.push({
      data: { ...post.data, slug: file.replace(".mdx", "") },
      content: html.value as string,
    });
  });
  return res;
}

export async function getPostBySlug(slug: string) {
  const { data, content } = matter(readFileSync(`./blogs/${slug}.mdx`, "utf8"));
  const html = await markdownToHtml(content);
  return {
    data: data,
    content: html.compiledSource,
  };
}
