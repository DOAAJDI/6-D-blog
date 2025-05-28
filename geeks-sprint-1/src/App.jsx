// src/App.jsx
import "./App.css";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-700 via-blue-600 to-blue-500 text-gray-100 font-sans">
      {/* Navbar */}
      <header className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-red-700 -mt-2">InvestConnect</h1>
        <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 font-semibold">
              🚀 Start-up
            </button>
            <p>ou</p>
            <button className="bg-gradient-to-r from-green-500 to-green-700 text-white px-6 py-2 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition duration-300 font-semibold">
              💼 Investisseur
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="text-center py-24 px-4 bg-blue-600 bg-opacity-80 shadow-inner rounded-lg max-w-4xl mx-auto mt-10">
        <div>
          <h2 className="text-5xl font-extrabold text-white mb-6 leading-tight">
            Relions les Start-ups aux Investisseurs
          </h2>
          <p className="text-lg text-blue-100 mb-10">
            Une plateforme intelligente pour connecter l'innovation aux
            opportunités de financement.
          </p>
          <br></br>
          <button className="bg-white text-blue-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition duration-300 shadow-md mx-auto block">
            Commencer maintenant
          </button>
          <h />
        </div>
      </section>

      {/* Optional: Features Section */}
      <section className="py-20 bg-blue-800 bg-opacity-70 px-6 mt-16 rounded-lg max-w-6xl mx-auto text-center text-blue-100">
        <h3 className="text-3xl font-semibold mb-12">
          Pourquoi nous choisir ?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-700 bg-opacity-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2 text-xl">Opportunités Ciblées</h4>
            <br></br>
            <p>
              Accédez à des projets innovants selon vos intérêts et domaines
              d'expertise.
            </p>
          </div>
          {/* <div className="bg-blue-700 bg-opacity-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2 text-xl">Connexion Instantanée</h4>
            <br></br>
            <p>
              Mettez en relation startups et investisseurs en un clic grâce à
              notre réseau.
            </p>
          </div> */}
          <div className="bg-blue-700 bg-opacity-50 p-6 rounded-2xl shadow hover:shadow-lg transition">
            <h4 className="font-bold mb-2 text-xl">Sécurité & Confiance</h4>
            
            <p>
              Un système fiable avec vérification des profils et des projets
              proposés.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-blue-900 text-blue-200 text-center py-6 mt-10 shadow-inner rounded-t-lg font-medium tracking-wide select-none">
        &copy; 2025 InvestConnect. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App;
