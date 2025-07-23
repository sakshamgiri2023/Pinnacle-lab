import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, User, Eye, Clock, Share2, Facebook, Twitter, Linkedin, Copy } from 'lucide-react';
import { articles, comments, categories } from '../data/mockData';
import { formatDistanceToNow, format } from 'date-fns';
import CommentSection from '../components/Comments/CommentSection';
import ArticleCard from '../components/ArticleCard';

export default function ArticlePage() {
  const { id } = useParams<{ id: string }>();
  const article = articles.find(a => a.id === id);
  
  if (!article) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Article Not Found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-700">
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const category = categories.find(c => c.name === article.category);
  const relatedArticles = articles.filter(a => a.id !== article.id && a.category === article.category).slice(0, 3);
  const articleComments = comments.filter(c => c.articleId === article.id);
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const title = article.title;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
      case 'copy':
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
        return;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Article header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
            <Link to="/" className="hover:text-blue-600">Home</Link>
            <span>/</span>
            <Link to={`/category/${category?.slug}`} className="hover:text-blue-600">
              {article.category}
            </Link>
            <span>/</span>
            <span className="text-gray-900">Article</span>
          </nav>

          {/* Category badge */}
          <div className="mb-4">
            <Link
              to={`/category/${category?.slug}`}
              className="inline-flex items-center px-3 py-1 text-sm font-semibold text-white rounded-full hover:opacity-90 transition-opacity"
              style={{ backgroundColor: category?.color }}
            >
              {article.category}
            </Link>
          </div>

          {/* Title */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
            {article.title}
          </h1>

          {/* Summary */}
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {article.summary}
          </p>

          {/* Article meta */}
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>By <strong className="text-gray-900">{article.author}</strong></span>
            </div>
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{format(new Date(article.publishedAt), 'MMMM d, yyyy')}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-4 w-4" />
              <span>{article.readTime} min read</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>{article.views.toLocaleString()} views</span>
            </div>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main content */}
          <div className="lg:col-span-3">
            {/* Featured image */}
            <div className="mb-8">
              <img
                src={article.imageUrl}
                alt={article.title}
                className="w-full h-96 object-cover rounded-xl shadow-lg"
              />
            </div>

            {/* Article content */}
            <div className="prose prose-lg max-w-none mb-12">
              {article.content.split('\n\n').map((paragraph, index) => (
                <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-gray-900 mb-3">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <Link
                    key={tag}
                    to={`/search?q=${encodeURIComponent(tag)}`}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full hover:bg-gray-200 transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>

            {/* Comments section */}
            <CommentSection articleId={article.id} comments={articleComments} />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Share buttons */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-24">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Share2 className="h-5 w-5 mr-2" />
                Share Article
              </h3>
              <div className="space-y-3">
                <button
                  onClick={() => handleShare('facebook')}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </button>
                <button
                  onClick={() => handleShare('twitter')}
                  className="w-full flex items-center justify-center space-x-2 bg-sky-500 text-white py-2 rounded-lg hover:bg-sky-600 transition-colors"
                >
                  <Twitter className="h-4 w-4" />
                  <span>Twitter</span>
                </button>
                <button
                  onClick={() => handleShare('linkedin')}
                  className="w-full flex items-center justify-center space-x-2 bg-blue-700 text-white py-2 rounded-lg hover:bg-blue-800 transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                  <span>LinkedIn</span>
                </button>
                <button
                  onClick={() => handleShare('copy')}
                  className="w-full flex items-center justify-center space-x-2 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  <Copy className="h-4 w-4" />
                  <span>Copy Link</span>
                </button>
              </div>
            </div>

            {/* Related articles */}
            {relatedArticles.length > 0 && (
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Related Articles
                </h3>
                <div className="space-y-4">
                  {relatedArticles.map((relatedArticle) => (
                    <div key={relatedArticle.id}>
                      <ArticleCard article={relatedArticle} variant="compact" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}