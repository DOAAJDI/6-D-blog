import { useState } from "react";
import { Eye, EyeOff, Mail, Lock, LogIn, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

export default function LoginPage() {
  const navigate = useNavigate(); // ✅ React Router navigation
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email.trim()) {
      newErrors.email = "L'email est requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Format d'email invalide";
    }

    if (!formData.password) {
      newErrors.password = "Le mot de passe est requis";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);

    setTimeout(() => {
      console.log("Données de connexion:", formData);
      console.log("Se souvenir de moi:", rememberMe);
      alert("Connexion réussie ! Redirection...");

      // ✅ Redirect to blog post editor
      navigate("/BlogEditor");
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-400 to-violet-400 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Se connecter
          </h1>
          <p className="text-gray-600">
            Bienvenue ! Connectez-vous à votre compte
          </p>
        </div>

        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl border border-white/20 p-8">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Adresse email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="jean.dupont@email.com"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Mot de passe
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 text-sm text-gray-700"
                >
                  Se souvenir de moi
                </label>
              </div>
              <button
                type="button"
                className="text-sm text-blue-600 hover:text-blue-700 font-medium"
              >
                Mot de passe oublié ?
              </button>
            </div>

            <div
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-4 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all flex justify-center items-center cursor-pointer"
            >
              {isLoading ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <>
                  Se connecter
                  <ArrowRight className="ml-2 w-5 h-5" />
                </>
              )}
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-500">
          En vous connectant, vous acceptez nos{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Conditions d'utilisation
          </a>{" "}
          et notre{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Politique de confidentialité
          </a>
          .
        </p>
      </div>
    </div>
  );
}
