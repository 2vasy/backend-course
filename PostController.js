import Post from "./Post.js";

export const getAll = async (req, res) => {
  const posts = await Post.find();
  if (!posts) throw new Error("No post found");
  res.json(posts);
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);
  if (!post) throw new Error("Post not found");
  res.json(post);
};

export const create = async (req, res) => {
  const post = new Post(req.body);
  await post.save();
  res.json(post);
};

export const update = async (req, res) => {
  const { id } = req.params;
  const updatedPost = await Post.findByIdAndUpdate(id, req.body, { new: true });
  if (!updatedPost) throw new Error("Post not found");
  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;
  const deletedPost = await Post.findByIdAndDelete(id);
  if (!deletedPost) throw new Error("Post not found");
  res.json({ message: "Post deleted successfully!" });
};
