import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthLoginPage from "./pages/auth/login";
import AuthSignupPage from "./pages/auth/signup";
import Dashboard from "./pages/auth/Dashboard";
import Quiz from "./pages/quiz";
import QuizAcnePage from "./pages/quiz/acne";
import QuizHyperpigmentationPage from "./pages/quiz/hyperpigmentation";
import QuizSkinTypePage from "./pages/quiz/skintype";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />, // Use Page for the homepage
  },
  {
    path: "/auth",
    children: [
      {
        path: "login",
        element: <AuthLoginPage />,
      },
      {
        path: "signup",
        element: <AuthSignupPage />,
      },
      {
        path: "Dashboard",
        element: <Dashboard />,
      }
    ],
  },
  {
    path: "/quiz",
    element: <Quiz />,
    children: [
      {
        path: "acne",
        element: <QuizAcnePage />,
      },
      {
        path: "hyperpigmentation",
        element: <QuizHyperpigmentationPage />,
      },
      {
        path: "skintype",
        element: <QuizSkinTypePage />,
      },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  );
};

export default App;