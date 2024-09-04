import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthLoginPage from "./pages/auth/login";
import AuthSignupPage from "./pages/auth/signup";
import ForgotPassword from "./pages/auth/forgotpassword";
import UserDashboard from "./pages/mydashboard/userdashboard";
import ConsultantDashboard from "./pages/mydashboard/consultantdashboard";
import Consultation from "./pages/mydashboard/Consultation";
import Diagnosis from "./pages/mydashboard/Diagnosis";
import Results from "./pages/mydashboard/Results";
import Profile from "./pages/mydashboard/profile";
import Quiz from "./pages/quiz";
import QuizAcnePage from "./pages/quiz/acne";
import QuizHyperpigmentationPage from "./pages/quiz/hyperpigmentation";
import QuizSkinTypePage from "./pages/quiz/skintype";
import SkinTypeResult from "./pages/quiz/skintyperesult";
import SkinTypeSavedResult from "./pages/quiz/skintypesavedresult";
import AcneResult from "./pages/quiz/acneresult";
import AcneSavedResult from "./pages/quiz/acnesavedresult";
import HyperpigmentationResult from "./pages/quiz/hyperpigmentationresult";
import HyperpigmentationSavedResult from "./pages/quiz/hyperpigmentationsavedresult";
import ProductRecommendation from "./pages/quiz/productrecommendations"
import UnifiedQuizForm from "./pages/quiz/unifiedquizform";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/auth",
    children: [
      { path: "login", element: <AuthLoginPage /> },
      { path: "signup", element: <AuthSignupPage /> },
      { path: "forgotpassword", element: <ForgotPassword /> },
    ],
  },
  {
    path: "/mydashboard",
    children: [
      { path: "userdashboard", element: <UserDashboard /> },
      { path: "consultation", element: <Consultation /> },
      { path: "diagnosis", element: <Diagnosis /> },
      { path: "results", element: <Results /> },
      { path: "consultantdashboard", element: <ConsultantDashboard /> },
      { path: "profile", element: < Profile /> },
    ],
  },
  {
    path: "/quiz",
    element: <Quiz />,
    children: [
      { path: "acne", element: <QuizAcnePage /> },
      { path: "hyperpigmentation", element: <QuizHyperpigmentationPage /> },
      { path: "skintype", element: <QuizSkinTypePage /> },
      { path: "acneresult", element: <AcneResult /> },
      { path: "hyperpigmentationresult", element: <HyperpigmentationResult /> },
      { path: "skintyperesult", element: <SkinTypeResult /> },
      { path: "acnesavedresult", element: <AcneSavedResult /> },
      { path: "hyperpigmentationsavedresult", element: <HyperpigmentationSavedResult /> },
      { path: "skintypesavedresult", element: <SkinTypeSavedResult /> },
      { path: "productrecommendations", element: <ProductRecommendation /> },
      { path: "unifiedquizform", element: <UnifiedQuizForm /> },

    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;