import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Eye, User } from 'lucide-react';
import { Article } from '../types';
import { formatDistanceToNow } from 'date-fns';
import { categories } from '../data/mockData';

interface ArticleCardProps {
  article: Article;
  variant?: 'featured' | 'standard' | 'compact';
}

export default function ArticleCard({ article, variant = 'standard' }: ArticleCardProps) {
  const category = categories.find(c => c.name === article.category);
  const timeAgo = formatDistanceToNow(new Date(article.publishedAt), { addSuffix: true });

  if (variant === 'featured') {
    return (
      <article className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
        <Link to={`/article/${article.id}`} className="block">
          <div className="relative h-96 bg-gray-900">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            
            {/* Category badge */}
            <div className="absolute top-4 left-4">
              <span
                className="px-3 py-1 text-sm font-semibold text-white rounded-full"
                style={{ backgroundColor: category?.color }}
              >
                {article.category}
              </span>
            </div>

            {/* Content overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                {article.title}
              </h2>
              <p className="text-gray-200 mb-4 line-clamp-2">
                {article.summary}
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-300">
                <div className="flex items-center space-x-1">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{timeAgo}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{article.views.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </article>
    );
  }

  if (variant === 'compact') {
    return (
      <article className="flex space-x-4 hover:bg-gray-50 p-4 rounded-lg transition-colors">
        <div className="flex-shrink-0">
          <Link to={`/article/${article.id}`}>
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-20 h-20 object-cover rounded-lg"
            />
          </Link>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center space-x-2 mb-1">
            <span
              className="px-2 py-1 text-xs font-medium text-white rounded"
              style={{ backgroundColor: category?.color }}
            >
              {article.category}
            </span>
          </div>
          <Link to={`/article/${article.id}`}>
            <h3 className="text-sm font-semibold text-gray-900 hover:text-blue-600 line-clamp-2 mb-1">
              {article.title}
            </h3>
          </Link>
          <div className="flex items-center space-x-3 text-xs text-gray-500">
            <span>{article.author}</span>
            <span>{timeAgo}</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <Link to={`/article/${article.id}`} className="block">
        <div className="relative">
          <img
            src={article.imageUrl}
            alt={article.title}
            className="w-full h-48 object-cover"
          />
          <div className="absolute top-3 left-3">
            <span
              className="px-3 py-1 text-sm font-semibold text-white rounded-full"
              style={{ backgroundColor: category?.color }}
            >
              {article.category}
            </span>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link to={`/article/${article.id}`}>
          <h3 className="text-xl font-bold text-gray-900 hover:text-blue-600 mb-3 line-clamp-2 transition-colors">
            {article.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-4 line-clamp-2">
          {article.summary}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{timeAgo}</span>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Eye className="h-4 w-4" />
            <span>{article.views.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </article>
  );
}