import { create } from "zustand";
import { axiosInstance } from "../lib/axios";
import toast from "react-hot-toast";

export const usePostStore = create((set) => ({
  posts: [],
  isPostsLoading: false,
  isCreatingPost: false,

  getPosts: async () => {
    set({ isPostsLoading: true });
    try {
      const res = await axiosInstance.get("/posts");
      set({ posts: res.data });
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to fetch posts");
    } finally {
      set({ isPostsLoading: false });
    }
  },

  createPost: async (data) => {
    set({ isCreatingPost: true });
    try {
      const res = await axiosInstance.post("/posts", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      set((state) => ({ posts: [res.data, ...state.posts] }));
      toast.success("Post created successfully");
      return true;
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to create post");
      return false;
    } finally {
      set({ isCreatingPost: false });
    }
  },

  deletePost: async (postId) => {
    try {
      await axiosInstance.delete(`/posts/${postId}`);
      set((state) => ({
        posts: state.posts.filter((post) => post._id !== postId),
      }));
      toast.success("Post deleted successfully");
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to delete post");
    }
  },
}));
