import { useAuthStore } from "../store/useAuthStore";
import { usePostStore } from "../store/usePostStore";
import { useEffect } from "react";
import { Loader, UserCircle2, X } from "lucide-react";

export default function ProfilePage() {
  const { authUser } = useAuthStore();
  const { posts, getPosts, isPostsLoading, deletePost } = usePostStore();

  useEffect(() => {
    getPosts();
  }, [getPosts]);

  if (isPostsLoading && posts.length === 0) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );
  }

  const userPosts = posts.filter((post) => post.user?._id === authUser?._id);

  return (
    <main className="w-screen min-h-screen bg-gray-100 pt-20 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Profile Header */}
        <div className="bg-white rounded-xl p-6 shadow-sm mb-6 flex items-center gap-4">
          <div className="size-20 rounded-full bg-blue-100 flex items-center justify-center">
            <span className="text-3xl font-bold text-blue-600">
              {authUser?.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              {authUser?.name}
            </h1>
            <p className="text-gray-500">{authUser?.email}</p>
            <p className="text-sm text-gray-400 mt-1">
              {userPosts.length} Posts
            </p>
          </div>
        </div>

        {/* User Posts */}
        <h2 className="text-xl font-semibold mb-4 text-gray-800">My Posts</h2>

        <div className="grid gap-5">
          {userPosts.length > 0 ? (
            userPosts.map((post) => (
              <article
                key={post._id}
                className="rounded-xl bg-white p-4 gap-3 flex flex-col shadow-sm relative group"
              >
                <div className="flex gap-3 items-center">
                  <div className="size-10 rounded-full bg-gray-200 flex items-center justify-center">
                    <UserCircle2 className="w-6 h-6 text-gray-500" />
                  </div>
                  <div>
                    <h1 className="font-medium">
                      {post.user?.name || "Unknown User"}
                    </h1>
                    <p className="text-xs font-light text-gray-500">
                      {new Date(post.createdAt).toLocaleString()}
                    </p>
                  </div>

                  {/* Delete Button */}
                  <button
                    onClick={() => deletePost(post._id)}
                    className="absolute top-4 right-4 p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors"
                    title="Delete Post"
                  >
                    <X className="size-5 text-black" />
                  </button>
                </div>

                <p className="text-gray-800">{post.caption}</p>

                {(post.imageUrl || post.image) && (
                  <img
                    src={post.imageUrl || post.image}
                    alt="Post content"
                    className="w-full rounded-lg object-cover max-h-125"
                  />
                )}
              </article>
            ))
          ) : (
            <div className="text-center py-10 bg-white rounded-xl shadow-sm">
              <p className="text-gray-500">You haven't posted anything yet.</p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
