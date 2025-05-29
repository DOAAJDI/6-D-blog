import { useState } from "react";
import { ImagePlus, Trash2, Send } from "lucide-react";

export default function BlogEditor() {
  const [postText, setPostText] = useState("");
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // Just preview, not actual upload
    }
  };

  const handlePost = () => {
    if (!postText.trim() && !image) {
      alert("Please write something or upload an image.");
      return;
    }

    console.log("New post:", { postText, image });
    alert("✅ Post submitted!");
    setPostText("");
    setImage(null);
  };

  const handleDelete = () => {
    setPostText("");
    setImage(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 flex justify-center items-center p-6">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-xl p-6 space-y-4 border border-gray-200">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">📝 Create a New Post</h2>

        {/* Post Text Area */}
        <textarea
          value={postText}
          onChange={(e) => setPostText(e.target.value)}
          placeholder="What's on your mind?"
          className="w-full min-h-[120px] p-4 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-400 resize-none"
        />

        {/* Image Upload */}
        <div className="flex items-center justify-between">
          <label
            htmlFor="image-upload"
            className="flex items-center gap-2 cursor-pointer text-purple-600 hover:text-purple-800"
          >
            <ImagePlus className="w-5 h-5" />
            Add Image
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="hidden"
          />

          <div className="flex gap-2">
            <button
              onClick={handleDelete}
              className="flex items-center gap-2 text-sm text-red-600 border border-red-500 px-4 py-2 rounded-md hover:bg-red-100 transition"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>

            <button
              onClick={handlePost}
              className="flex items-center gap-2 text-sm text-white bg-purple-600 px-4 py-2 rounded-md hover:bg-purple-700 transition"
            >
              <Send className="w-4 h-4" />
              Post
            </button>
          </div>
        </div>

        {/* Preview */}
        {image && (
          <div className="mt-4">
            <img src={image} alt="preview" className="rounded-md w-full object-cover max-h-80" />
          </div>
        )}
      </div>
    </div>
  );
}
