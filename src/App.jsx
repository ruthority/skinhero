import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AuthLoginPage from "./pages/auth/login";
import AuthSignupPage from "./pages/auth/signup";
import UserDashboard from "./pages/mydashboard/userdashboard"; // Correct path for UserDashboard  
import Consultation from "./pages/mydashboard/Consultation"; // Correct path for Consultation  
import Diagnosis from "./pages/mydashboard/Diagnosis"; // Correct path for Diagnosis  
import Results from "./pages/mydashboard/Results"; // Correct path for History  
import Quiz from "./pages/quiz"; // Assuming there is an index file within /quiz  
import QuizAcnePage from "./pages/quiz/acne";
import QuizHyperpigmentationPage from "./pages/quiz/hyperpigmentation";
import QuizSkinTypePage from "./pages/quiz/skintype";
import SkinTypeResult from "./pages/quiz/skintyperesult";
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
      {
        path: "login", // URL: /auth/login  
        element: <AuthLoginPage />,
      },
      {
        path: "signup", // URL: /auth/signup  
        element: <AuthSignupPage />,
      },
    ],
  },
  {
    path: "/mydashboard", // Updated to be directly under the root path  
    children: [
      {
        path: "userdashboard", // URL: /dashboard/userdashboard  
        element: <UserDashboard />, // Component path: ./pages/mydashboard/userdashboard  
      },
      {
        path: "consultation", // URL: /dashboard/consultation  
        element: <Consultation />, // Component path: ./pages/mydashboard/Consultation  
      },
      {
        path: "diagnosis", // URL: /dashboard/diagnosis  
        element: <Diagnosis />, // Component path: ./pages/mydashboard/Diagnosis  
      },
      {
        path: "results", // URL: /dashboard/history  
        element: <Results />, // Component path: ./pages/mydashboard/History  
      },
    ],
  },
  {
    path: "/quiz", // URL: /quiz  
    element: <Quiz />,
    children: [
      {
        path: "acne", // URL: /quiz/acne  
        element: <QuizAcnePage />,
      },
      {
        path: "hyperpigmentation", // URL: /quiz/hyperpigmentation  
        element: <QuizHyperpigmentationPage />,
      },
      {
        path: "skintype", // URL: /quiz/skintype  
        element: <QuizSkinTypePage />,
      },
      {
        path: "acneresult", // URL: /quiz/acne  
        element: <AcneResult />,
      },
      {
        path: "hyperpigmentationresult", // URL: /quiz/hyperpigmentation  
        element: <HyperpigmentationResult />,
      },
      {
        path: "skintyperesult", // URL: /quiz/skintype  
        element: <SkinTypeResult />,
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