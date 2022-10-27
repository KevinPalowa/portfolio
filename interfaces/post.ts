type Post = {
  content: string;
  data: {
    author: string;
    createdAt: string;
    slug: string;
    summary: string;
    tags: string[];
    thumbail: string;
    thumbnailCredit: string;
    title: string;
    updateAt: string;
  };
};
export default Post;
