import { Link } from "react-router-dom";
import { format } from "date-fns";

export type Article = {
  _id: number;
  image?: {
    src: string;
    alt: string
  };
  title: string;
  sourceName: string;
  description: string;
  publishedAt: string;
  content: string;
  source?: string;
  url: string;
}

const ArticleCard = ({ article }: {article: Article}) => {
  return (
    <Link to={`/article/${article._id}`} className="card h-full block">
      {article.image ? (
        <img
          src={article.image.src}
          alt={article.image.alt}
          className="w-full h-48 object-cover"
        />
      ) : (
        <img 
        src="/certain-news-logo.png"
        alt='Certain News Logo'
        className="w-full h-48 object-cover" />
      )}

      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <span className="chip">{article.sourceName}</span>
          <span className="text-xs text-gray-500">
            {format(new Date(article.publishedAt), "MM dd, yyyy")}
          </span>
        </div>

        <h3 className="font-bold text-lg mb-2 line-clamp-2">{article.title}</h3>
        <p className="text-gray-600 text-sm line-clamp-3">
          {article.description || article.content.substring(0, 150) + "..."}
        </p>
      </div>
    </Link>
  );
}

export default ArticleCard;
