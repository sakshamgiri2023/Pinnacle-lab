import React, { useState } from 'react';
import { MessageCircle, Reply, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Comment } from '../../types';
import { useAuth } from '../../contexts/AuthContext';
import { formatDistanceToNow } from 'date-fns';

interface CommentSectionProps {
  articleId: string;
  comments: Comment[];
}

export default function CommentSection({ articleId, comments }: CommentSectionProps) {
  const [newComment, setNewComment] = useState('');
  const [replyTo, setReplyTo] = useState<string | null>(null);
  const [replyContent, setReplyContent] = useState('');
  const { user, isAuthenticated } = useAuth();

  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newComment.trim() || !isAuthenticated) return;

    // Mock comment submission - in production, this would call your API
    console.log('New comment:', { articleId, content: newComment, userId: user?.id });
    setNewComment('');
  };

  const handleSubmitReply = (e: React.FormEvent, parentId: string) => {
    e.preventDefault();
    if (!replyContent.trim() || !isAuthenticated) return;

    // Mock reply submission - in production, this would call your API
    console.log('New reply:', { articleId, content: replyContent, parentId, userId: user?.id });
    setReplyContent('');
    setReplyTo(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center space-x-2 mb-6">
        <MessageCircle className="h-6 w-6 text-gray-600" />
        <h3 className="text-lg font-semibold text-gray-900">
          Comments ({comments.length})
        </h3>
      </div>

      {/* Comment form */}
      {isAuthenticated ? (
        <form onSubmit={handleSubmitComment} className="mb-8">
          <div className="mb-4">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your thoughts..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-500">
              Commenting as {user?.username}
            </span>
            <button
              type="submit"
              disabled={!newComment.trim()}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              Post Comment
            </button>
          </div>
        </form>
      ) : (
        <div className="mb-8 p-4 bg-gray-50 rounded-lg text-center">
          <p className="text-gray-600 mb-2">Please sign in to join the conversation</p>
          <button className="text-blue-600 hover:text-blue-700 font-medium">
            Sign In
          </button>
        </div>
      )}

      {/* Comments list */}
      <div className="space-y-6">
        {comments.map((comment) => (
          <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-b-0">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">
                    {comment.username.charAt(0).toUpperCase()}
                  </span>
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-semibold text-gray-900">{comment.username}</span>
                  <span className="text-gray-500 text-sm">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true })}
                  </span>
                </div>
                
                <p className="text-gray-700 mb-3">{comment.content}</p>
                
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-green-600 transition-colors">
                    <ThumbsUp className="h-4 w-4" />
                    <span className="text-sm">Like</span>
                  </button>
                  <button className="flex items-center space-x-1 text-gray-500 hover:text-red-600 transition-colors">
                    <ThumbsDown className="h-4 w-4" />
                    <span className="text-sm">Dislike</span>
                  </button>
                  {isAuthenticated && (
                    <button
                      onClick={() => setReplyTo(replyTo === comment.id ? null : comment.id)}
                      className="flex items-center space-x-1 text-gray-500 hover:text-blue-600 transition-colors"
                    >
                      <Reply className="h-4 w-4" />
                      <span className="text-sm">Reply</span>
                    </button>
                  )}
                </div>

                {/* Reply form */}
                {replyTo === comment.id && (
                  <form onSubmit={(e) => handleSubmitReply(e, comment.id)} className="mt-4">
                    <textarea
                      value={replyContent}
                      onChange={(e) => setReplyContent(e.target.value)}
                      placeholder="Write a reply..."
                      rows={3}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-sm"
                    />
                    <div className="flex justify-end space-x-2 mt-2">
                      <button
                        type="button"
                        onClick={() => setReplyTo(null)}
                        className="px-4 py-1 text-sm text-gray-600 hover:text-gray-800"
                      >
                        Cancel
                      </button>
                      <button
                        type="submit"
                        disabled={!replyContent.trim()}
                        className="px-4 py-1 text-sm bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        Reply
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        ))}

        {comments.length === 0 && (
          <div className="text-center py-8">
            <MessageCircle className="h-12 w-12 text-gray-300 mx-auto mb-3" />
            <p className="text-gray-500">No comments yet. Be the first to share your thoughts!</p>
          </div>
        )}
      </div>
    </div>
  );
}