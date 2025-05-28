
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-600">InvestConnect</h1>
        <nav className="space-x-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Start-up</button>
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Investisseur</button>
        </nav>
      </header>

      {/* Hero section */}
      <section className="text-center py-20 bg-gradient-to-r from-blue-50 to-green-50">
        <h2 className="text-4xl font-bold mb-4">Relions les Start-ups aux Investisseurs</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Une plateforme qui vous connecte aux meilleures opportunités de l’innovation.
        </p>
        <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700">
          Commencer maintenant
        </button>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-10">
        &copy; 2025 InvestConnect. Tous droits réservés.
      </footer>
    </div>
  );
}

export default App