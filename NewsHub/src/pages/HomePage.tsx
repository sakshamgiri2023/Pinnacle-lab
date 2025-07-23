import React from 'react';
import { Link } from 'react-router-dom';
import { TrendingUp, Clock, ArrowRight } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articles, categories } from '../data/mockData';

export default function HomePage() {
  const featuredArticles = articles.filter(article => article.featured);
  const recentArticles = articles.filter(article => !article.featured).slice(0, 6);
  const trendingArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero section with featured articles */}
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredArticles.slice(0, 2).map((article, index) => (
              <div key={article.id} className={index === 0 ? "lg:col-span-1" : "lg:col-span-1"}>
                <ArticleCard article={article} variant="featured" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2">
            {/* Categories showcase */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <span className="bg-blue-600 w-1 h-6 mr-3"></span>
                Browse by Category
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {categories.slice(0, 8).map((category) => (
                  <Link
                    key={category.id}
                    to={`/category/${category.slug}`}
                    className="group p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-center"
                  >
                    <div
                      className="w-12 h-12 rounded-full mx-auto mb-2 flex items-center justify-center text-white font-bold group-hover:scale-110 transition-transform"
                      style={{ backgroundColor: category.color }}
                    >
                      {category.name.charAt(0)}
                    </div>
                    <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                      {category.name}
                    </h3>
                  </Link>
                ))}
              </div>
            </section>

            {/* Recent articles */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Clock className="h-6 w-6 mr-2 text-blue-600" />
                  Latest News
                </h2>
                <Link
                  to="/latest"
                  className="flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  View All
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {recentArticles.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Trending articles */}
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-red-500" />
                Trending Now
              </h3>
              <div className="space-y-1">
                {trendingArticles.map((article, index) => (
                  <ArticleCard key={article.id} article={article} variant="compact" />
                ))}
              </div>
            </div>

            {/* Newsletter signup */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-sm p-6 text-white mb-8">
              <h3 className="text-xl font-bold mb-2">Stay Informed</h3>
              <p className="text-blue-100 mb-4">
                Get breaking news alerts and daily summaries delivered to your inbox.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-blue-600 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Advertisement placeholder */}
            <div className="bg-gray-100 rounded-xl p-6 text-center">
              <p className="text-gray-500 mb-2">Advertisement</p>
              <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">Ad Space</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}