import { useState } from "react";
import { Link } from "react-router-dom";
// import SearchBar from "./SearchBar";

const categories = [
  { name: "World", path: "world" },
  { name: "Technology", path: "technology" },
  { name: "Health", path: "health" },
  { name: "Business", path: "business" },
];

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const navigate = useNavigate();

  // const handleSearch = (query: string) => {
  //   const searchParams = new URLSearchParams();
  //   if (query.trim()) {
  //     searchParams.set("search", query);
  //   }
  //   navigate(`/search?${searchParams.toString()}`);
  // };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <img
              src="/certain-news-logo-transparent.png"
              alt="Certain News Logo"
              className="w-10 h-10 transition-transform duration-300 group-hover:scale-110"
            />
            <span className="hidden sm:block text-xl font-bold text-gray-900 tracking-tight">
              Certain News
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={`/category/${category.path}`}
                className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200"
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${mobileMenuOpen ? "rotate-90" : ""
                }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100 pb-4" : "max-h-0 opacity-0"
            }`}
        >
          <div className="flex flex-col space-y-1 pt-2 border-t border-gray-100">
            {categories.map((category) => (
              <Link
                key={category.path}
                to={`/category/${category.path}`}
                className="px-4 py-3 text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg transition-all duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                {category.name}
              </Link>
            ))}
          </div>

          {/* <div className="mt-4 space-y-3">
            <SearchBar onSearch={handleSearch} mobile />
          </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
