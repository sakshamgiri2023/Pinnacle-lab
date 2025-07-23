import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ArrowLeft } from 'lucide-react';
import ArticleCard from '../components/ArticleCard';
import { articles } from '../data/mockData';

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState(articles);

  useEffect(() => {
    const searchQuery = searchParams.get('q');
    if (searchQuery) {
      setQuery(searchQuery);
      performSearch(searchQuery);
    }
  }, [searchParams]);

  const performSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setResults(articles);
      return;
    }

    const filtered = articles.filter(article =>
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setResults(filtered);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      setSearchParams({ q: query.trim() });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Search header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-6 transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>

          <div className="flex items-center space-x-4 mb-6">
            <Search className="h-8 w-8 text-blue-600" />
            <h1 className="text-3xl font-bold text-gray-900">Search News</h1>
          </div>

          {/* Search form */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="flex max-w-2xl">
              <input
                type="text"
                placeholder="Search for articles, topics, authors..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-r-lg hover:bg-blue-700 transition-colors"
              >
                Search
              </button>
            </div>
          </form>

          {/* Search results summary */}
          {searchParams.get('q') && (
            <div className="text-gray-600">
              {results.length > 0 ? (
                <p>
                  Found <strong>{results.length}</strong> {results.length === 1 ? 'result' : 'results'} for "<strong>{searchParams.get('q')}</strong>"
                </p>
              ) : (
                <p>No results found for "<strong>{searchParams.get('q')}</strong>"</p>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Search results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {results.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : searchParams.get('q') ? (
          <div className="text-center py-16">
            <Search className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">No Results Found</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              We couldn't find any articles matching your search. Try different keywords or browse our categories.
            </p>
            <Link
              to="/"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Browse All Articles
            </Link>
          </div>
        ) : (
          <div className="text-center py-16">
            <Search className="h-24 w-24 text-gray-300 mx-auto mb-6" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Search Our News</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Enter keywords above to find articles, topics, or authors you're interested in.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}