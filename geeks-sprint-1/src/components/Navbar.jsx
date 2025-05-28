import { useEffect, useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigation = [
    { title: "Accueil", path: "#hero" },
    { title: "À propos", path: "#about" },
    { title: "Avantages", path: "#features" },
    { title: "Start-ups", path: "#startups" },
    { title: "Investisseurs", path: "#investors" },
    { title: "Contact", path: "#contact" },
  ];

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest(".menu-btn")) setMenuOpen(false);
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <nav
      className={`bg-white shadow-md sticky top-0 z-50 ${
        menuOpen ? "rounded-xl border mx-2 mt-2" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between py-4 md:px-8">
        <a href="#hero" className="text-2xl font-bold text-red-700">
          InvestConnect
        </a>
        <div className="md:hidden">
          <button
            className="menu-btn text-gray-700 hover:text-gray-900"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            )}
          </button>
        </div>
        <div
          className={`md:flex items-center space-x-6 ${
            menuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="md:flex items-center space-y-6 md:space-y-0 md:space-x-6">
            {navigation.map((item, index) => (
              <li key={index}>
                <a
                  href={item.path}
                  className="block text-gray-700 hover:text-blue-700 font-medium transition"
                >
                  {item.title}
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <a
              href="#login"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Connexion
            </a>
            <a
              href="#register"
              className="bg-blue-700 text-white px-4 py-2 rounded-full hover:bg-blue-800 transition"
            >
              S’inscrire
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
