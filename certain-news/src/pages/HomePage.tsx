import { useState, useEffect } from "react";
import ArticleCard, { type Article } from "../components/ArticleCard";
import api from "../services/api";
import SourceFilter from "../components/SourceFilter";
import Loader from "../components/Loader";

const HomePage = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [latestUpdates, setLatestUpdates] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSource, setSelectedSource] = useState("all");

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const [mainArticles, latest] = await Promise.all([
          api.get("/articles"),
          api.get("/articles/latest"),
        ]);

        // Validate and ensure we have arrays
        const articlesData = Array.isArray(mainArticles.data) 
          ? mainArticles.data 
          : mainArticles.data?.articles || mainArticles.data?.data || [];
        
        const latestData = Array.isArray(latest.data) 
          ? latest.data 
          : latest.data?.articles || latest.data?.data || [];

        

        setArticles(articlesData);
        setLatestUpdates(latestData);
        setError(null);
      } catch (err) {
        console.error('API Error:', err);
        setError("Failed to fetch articles. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // Ensure articles is always an array before filtering
  const filteredArticles = Array.isArray(articles) && selectedSource === "all"
    ? articles
    : Array.isArray(articles) 
      ? articles.filter((article) => article.source === selectedSource)
      : [];

  return (
    <div className="container mx-auto px-4 py-8">
      {loading ? (
        <div className="flex items-center justify-center mt-44">
          <Loader />
        </div>
      ) : error ? (
        <div className="text-center py-8">
          <p className="text-red-600 font-medium">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary mt-4"
          >
            Try Again
          </button>
        </div>
      ) : (
        <>
          {/* Latest Updates Section */}
          {Array.isArray(latestUpdates) && latestUpdates.length > 0 && (
            <div className="mb-12 bg-white rounded-xl shadow-lg p-6">
              <div className="flex items-center mb-6">
                <h2 className="text-2xl font-bold text-purple-800 mr-4">
                  Latest Updates
                </h2>
                <div className="flex-1 h-1 bg-purple-200 rounded-full"></div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {latestUpdates.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Main Articles */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Top Stories</h1>
            <div className="w-24 h-1 bg-purple-700 rounded-full mt-2"></div>
          </div>

          {Array.isArray(articles) && articles.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {articles.map((article) => (
                <ArticleCard key={article._id} article={article} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 text-xl">
                No articles found. Please try again later.
              </p>
            </div>
          )}

          {/* Render SourceFilter and pass selectedSource and setSelectedSource */}
          <div className="flex flex-col mt-16 gap-6">
            <SourceFilter
              mobile
              selectedSource={selectedSource}
              onSelect={setSelectedSource}
            />

            {Array.isArray(filteredArticles) && filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredArticles.map((article) => (
                  <ArticleCard key={article._id} article={article} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-xl">
                  No articles found for the selected source.
                </p>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default HomePage;