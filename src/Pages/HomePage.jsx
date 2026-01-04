import { MessageCircleIcon, UserCircle2, Loader } from "lucide-react";
import NewPost from "../Components/UI/NewPost";
import { usePostStore } from "../store/usePostStore";
import { useEffect } from "react";

export default function HomePage() {
  const { getPosts, posts, isPostsLoading } = usePostStore();

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

  return (
    <main className="w-screen h-full bg-gray-100 min-h-screen">
      <section className="p-4 grid gap-5 pt-20 max-w-2xl mx-auto">
        <NewPost />

        {posts.map((post) => (
          <article
            key={post._id}
            className="rounded-xl bg-white p-4 gap-3 flex flex-col shadow-sm"
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
            </div>

            <p className="text-gray-800">{post.caption}</p>

            {(post.imageUrl || post.image) && (
              <img
                src={post.imageUrl || post.image}
                alt="Post content"
                className="w-full rounded-lg object-cover max-h-125"
              />
            )}

            <button
              onClick={() => {
                const fbContact = post.facebookName || post.facebook;
                if (fbContact) {
                  // Helper to extract username if a URL is provided
                  let username = fbContact;
                  if (
                    fbContact.includes("facebook.com") ||
                    fbContact.includes("messenger.com")
                  ) {
                    // Remove trailing slash if present
                    const cleanUrl = fbContact.replace(/\/$/, "");
                    // Get the last part of the URL
                    const parts = cleanUrl.split("/");
                    username = parts[parts.length - 1];
                    // Handle query parameters (e.g., profile.php?id=...)
                    if (username.includes("?")) {
                      username = username.split("?")[0];
                    }
                  }

                  // Construct the Messenger link
                  const url = `https://m.me/${username}`;
                  window.open(url, "_blank");
                } else {
                  alert("No Facebook contact provided for this post.");
                }
              }}
              className="border rounded-lg text-lg py-1.5 px-4 hover:bg-black hover:text-white transition-all duration-150 w-full mt-2"
            >
              Inquire
            </button>
          </article>
        ))}

        {posts.length === 0 && !isPostsLoading && (
          <div className="text-center text-gray-500 py-10">
            No posts yet. Be the first to post!
          </div>
        )}
      </section>
    </main>
  );
}
