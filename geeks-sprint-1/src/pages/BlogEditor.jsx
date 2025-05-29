import React, { useState, useRef } from 'react';
import { Camera, Image, Trash2, Edit, Calendar, User } from 'lucide-react';

const BlogEditor = () => {
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState({
    title: '',
    content: '',
    image: null,
    imagePreview: null
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const fileInputRef = useRef(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCurrentPost(prev => ({
          ...prev,
          image: file,
          imagePreview: e.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = () => {
    if (!currentPost.content.trim()) return;

    const newPost = {
      id: isEditing ? editingId : Date.now(),
      title: currentPost.title || "Sans titre",
      content: currentPost.content,
      image: currentPost.imagePreview,
      createdAt: new Date().toLocaleDateString('fr-FR'),
      author: "Auteur"
    };

    if (isEditing) {
      setPosts(posts.map(post => post.id === editingId ? newPost : post));
      setIsEditing(false);
      setEditingId(null);
    } else {
      setPosts([newPost, ...posts]);
    }

    // Reset form
    setCurrentPost({
      title: '',
      content: '',
      image: null,
      imagePreview: null
    });
  };

  const handleEdit = (post) => {
    setCurrentPost({
      title: post.title,
      content: post.content,
      image: null,
      imagePreview: post.image
    });
    setIsEditing(true);
    setEditingId(post.id);
  };

  const handleDelete = (id) => {
    setPosts(posts.filter(post => post.id !== id));
  };

  const cancelEdit = () => {
    setCurrentPost({
      title: '',
      content: '',
      image: null,
      imagePreview: null
    });
    setIsEditing(false);
    setEditingId(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">✏️ Mon Blog</h1>
          <p className="text-gray-600">Créez et partagez vos articles</p>
        </div>

        {/* Editor Section */}
        <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            {isEditing ? '✏️ Modifier le Post' : '📝 Créer un Nouveau Post'}
          </h2>
          
          {/* Title Input */}
          <input
            type="text"
            placeholder="Titre de votre article..."
            value={currentPost.title}
            onChange={(e) => setCurrentPost(prev => ({...prev, title: e.target.value}))}
            className="w-full p-4 mb-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none text-lg font-medium"
          />

          {/* Content Textarea */}
          <textarea
            placeholder="Qu'avez-vous en tête ?"
            value={currentPost.content}
            onChange={(e) => setCurrentPost(prev => ({...prev, content: e.target.value}))}
            className="w-full h-32 p-4 border-2 border-gray-200 rounded-xl focus:border-blue-500 focus:outline-none resize-none text-gray-700"
          />

          {/* Image Preview */}
          {currentPost.imagePreview && (
            <div className="mt-4 relative">
              <img 
                src={currentPost.imagePreview} 
                alt="Preview" 
                className="w-full h-48 object-cover rounded-xl"
              />
              <button
                onClick={() => setCurrentPost(prev => ({...prev, image: null, imagePreview: null}))}
                className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors"
              >
                <Trash2 size={16} />
              </button>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-between items-center mt-6">
            <div className="flex gap-3">
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageUpload}
                accept="image/*"
                className="hidden"
              />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-xl hover:bg-purple-200 transition-colors"
              >
                <Image size={20} />
                Ajouter Image
              </button>
            </div>

            <div className="flex gap-3">
              {isEditing && (
                <button
                  onClick={cancelEdit}
                  className="px-6 py-2 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors"
                >
                  Annuler
                </button>
              )}
              <button
                onClick={handleSubmit}
                disabled={!currentPost.content.trim()}
                className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isEditing ? 'Mettre à jour' : 'Publier'}
              </button>
            </div>
          </div>
        </div>

        {/* Posts Display */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            📚 Articles Publiés ({posts.length})
          </h2>
          
          {posts.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <div className="text-6xl mb-4">📝</div>
              <p className="text-gray-500 text-lg">Aucun article publié pour le moment</p>
              <p className="text-gray-400">Créez votre premier post ci-dessus !</p>
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <div key={post.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                  {/* Image */}
                  {post.image && (
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.content}
                    </p>
                    
                    {/* Meta Info */}
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <User size={14} />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar size={14} />
                        {post.createdAt}
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => handleEdit(post)}
                        className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Modifier"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Supprimer"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogEditor;