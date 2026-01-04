import { useState, useRef } from "react";
import { useAuthStore } from "../../store/useAuthStore";
import { usePostStore } from "../../store/usePostStore";
import { Image, X, Loader2 } from "lucide-react";
import toast from "react-hot-toast";

export default function NewPost() {
  const { authUser } = useAuthStore();
  const { createPost, isCreatingPost } = usePostStore();
  const [isOpen, setIsOpen] = useState(false);
  const [caption, setCaption] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        return toast.error("File size too large. Max 5MB");
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!caption.trim() && !selectedImage) return;

    const formData = new FormData();
    formData.append("caption", caption);
    formData.append("facebookName", facebookLink.replace(/\s/g, ""));
    if (selectedImage) {
      formData.append("image", selectedImage);
    }

    const success = await createPost(formData);

    if (success) {
      setIsOpen(false);
      setCaption("");
      setFacebookLink("");
      handleRemoveImage();
    }
  };

  if (!authUser) return null;

  return (
    <>
      {/* Trigger Button */}
      <div className="bg-white p-4 rounded-lg shadow mb-4">
        <div className="flex gap-3 items-center">
          <div className="size-10 rounded-xl bg-gray-200 flex items-center justify-center overflow-hidden">
            {/* Placeholder for user avatar if not available */}
            <span className="text-xl font-bold text-gray-500">
              {authUser.name?.charAt(0).toUpperCase()}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(true)}
            className="bg-gray-100 hover:bg-gray-200 text-gray-500 text-left rounded-full px-4 py-2.5 w-full transition-colors"
          >
            What's on your mind, {authUser.name}?
          </button>
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-xl shadow-xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-200 max-h-[90vh] flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-xl font-bold text-gray-900">Create Post</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
              >
                <X className="size-6 text-gray-500" />
              </button>
            </div>

            {/* Body */}
            <form onSubmit={handleSubmit} className="p-4 overflow-y-auto">
              {/* User Info */}
              <div className="flex items-center gap-3 mb-4">
                <div className="size-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-600">
                    {authUser.name?.charAt(0).toUpperCase()}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {authUser.name}
                  </h3>
                  <span className="text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                    Public
                  </span>
                </div>
              </div>

              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Facebook Username"
                  className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                  value={facebookLink}
                  onChange={(e) => setFacebookLink(e.target.value)}
                />
              </div>

              {/* Caption Input */}
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder={`What's on your mind, ${authUser.name}?`}
                className="w-full min-h-30 resize-none border-none focus:ring-0 text-lg placeholder:text-gray-400 p-1 mb-4"
              />

              {/* Image Preview */}
              {imagePreview && (
                <div className="relative mb-4 rounded-lg overflow-hidden border border-gray-200">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full max-h-75 object-cover"
                  />
                  <button
                    type="button"
                    onClick={handleRemoveImage}
                    className="absolute top-2 right-2 p-1.5 bg-white rounded-full shadow-md hover:bg-gray-100"
                  >
                    <X className="size-4 text-gray-600" />
                  </button>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center justify-between border rounded-lg p-3 mb-4">
                <span className="text-sm font-medium text-gray-700">
                  Add to your post
                </span>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => fileInputRef.current?.click()}
                    className="p-2 hover:bg-gray-100 rounded-full text-green-600 transition-colors"
                    title="Photo/Video"
                  >
                    <Image className="size-6" />
                  </button>
                  <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleImageChange}
                    accept="image/*"
                    className="hidden"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={(!caption.trim() && !selectedImage) || isCreatingPost}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {isCreatingPost ? (
                  <>
                    <Loader2 className="size-5 animate-spin" />
                    Posting...
                  </>
                ) : (
                  "Post"
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
