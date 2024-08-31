import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UserProvider } from './pages/auth/usercontext'; // Import UserProvider  
import HomePage from "./pages/HomePage";
import AuthLoginPage from "./pages/auth/login";
import AuthSignupPage from "./pages/auth/signup";
import UserDashboard from "./pages/mydashboard/userdashboard";
import ConsultantDashboard from "./pages/mydashboard/consultantdashboard";
import Consultation from "./pages/mydashboard/Consultation";
import FindNearbyClinics from "./pages/mydashboard/findnearbyclinic";
import Diagnosis from "./pages/mydashboard/Diagnosis";
import Results from "./pages/mydashboard/Results";
import Quiz from "./pages/quiz";
import QuizAcnePage from "./pages/quiz/acne";
import QuizHyperpigmentationPage from "./pages/quiz/hyperpigmentation";
import QuizSkinTypePage from "./pages/quiz/skintype";
import SkinTypeResult from "./pages/quiz/skintyperesult";
import ProductRecommendations from "./pages/quiz/productrecommendations";
import ProductRecommendation from "./pages/quiz/productrecommendation";
import AcneResult from "./pages/quiz/acneresult";
import HyperpigmentationResult from "./pages/quiz/hyperpigmentationresult";

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
      { path: "usercontext", element: <UserContext /> },
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
      { path: "findnearbyclinic", element: <FindNearbyClinics /> },
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
      { path: "productrecommendations", element: <ProductRecommendations /> },
      { path: "productrecommendation", element: <ProductRecommendation /> },
    ],
  },
]);

const App = () => {
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
};

export default App;