type Post = {
  content: string;
  data: {
    author: string;
    createdAt: string;
    slug: string;
    summary: string;
    tags: string[];
    thumbnail: string;
    thumbnailCredit: string;
    title: string;
  };
};
export default Post;
