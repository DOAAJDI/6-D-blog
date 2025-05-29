import { useState } from "react";
import { ImagePlus, UploadCloud } from "lucide-react";

export default function BlogEditor() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState(null);

  const handlePostSubmit = () => {
    if (!title || !body) {
      alert("Please fill out both title and content.");
      return;
    }

    // Simulate sending post to backend
    console.log("New Post:", { title, body, image });
    alert("Post created!");
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-xl p-6">
        <h1 className="text-2xl font-bold mb-4">Create a New Post</h1>

        {/* Title Input */}
        <input
          type="text"
          placeholder="Post title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Body Input */}
        <textarea
          rows="8"
          placeholder="Write your post here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full mb-4 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        />

        {/* Image Upload */}
        <div className="flex items-center gap-4 mb-4">
          <label className="flex items-center gap-2 cursor-pointer text-blue-600 hover:underline">
            <ImagePlus className="w-5 h-5" />
            <span>Add Image</span>
            <input type="file" accept="image/*" onChange={handleImageChange} hidden />
          </label>
          {image && (
            <img src={image} alt="preview" className="h-20 rounded shadow border" />
          )}
        </div>

        {/* Post Button */}
        <button
          onClick={handlePostSubmit}
          className="flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-all"
        >
          <UploadCloud className="w-5 h-5" />
          Post
        </button>
      </div>
    </div>
  );
}
