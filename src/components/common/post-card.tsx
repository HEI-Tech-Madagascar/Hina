import { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal } from 'lucide-react';
import type { Post } from '@/constants';
import { getTypeColor, getTypeText } from '@/components/common/utils';

type PostCardProps = {
  post: Post;
};

export default function PostCard({ post }: PostCardProps) {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);

  const handleLike = () => {
    setLiked(!liked);
    setLikes(liked ? likes - 1 : likes + 1);
  };

  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="p-6">
        <div className="mb-4 flex items-start justify-between">
          <div className="flex items-start space-x-3">
            <img src={post.author.avatar} alt={post.author.name} className="h-10 w-10 rounded-full object-cover" />
            <div>
              <h3 className="font-semibold text-gray-900">{post.author.name}</h3>
              <p className="text-sm text-gray-500">
                {post.author.role} • {post.timestamp}
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className={`rounded-full px-2 py-1 text-xs font-medium ${getTypeColor(post.type)}`}>
              {getTypeText(post.type)}
            </span>
            <button className="rounded-lg p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600">
              <MoreHorizontal className="h-4 w-4" />
            </button>
          </div>
        </div>
        <div className="mb-4">
          <p className="leading-relaxed text-gray-800">{post.content}</p>
        </div>
        <div className="max-w-full">
          {post.image && <img src={post.image} className="w-full rounded-2xl bg-cover" alt="Post Image" />}
        </div>
        <div className="flex items-center justify-between border-t border-gray-100 pt-4">
          <div className="flex items-center space-x-6">
            <button
              onClick={handleLike}
              className={`flex items-center space-x-2 rounded-lg px-3 py-2 transition-colors ${
                liked ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'text-gray-500 hover:bg-red-50 hover:text-red-600'
              }`}
            >
              <Heart className={`h-4 w-4 ${liked ? 'fill-current' : ''}`} />
              <span className="text-sm font-medium">{likes}</span>
            </button>

            <button className="hover:text-azure-600 hover:bg-azure-50 flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-500 transition-colors">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-medium">{post.comments}</span>
            </button>
          </div>

          <button className="hover:text-ocean-600 hover:bg-ocean-50 flex items-center space-x-2 rounded-lg px-3 py-2 text-gray-500 transition-colors">
            <Share2 className="h-4 w-4" />
            <span className="text-sm font-medium">Partager</span>
          </button>
        </div>
      </div>
    </div>
  );
}
