import { MantineProvider } from '@mantine/core';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import IndexPage from "./pages/index";
import Auth from "./pages/auth";
import AuthLoginPage from "./pages/auth/login";
import AuthSignupPage from "./pages/auth/signup";
import Quiz from "./pages/quiz";
import QuizAcnePage from "./pages/quiz/acne";
import QuizHyperpigmentationPage from "./pages/quiz/hyperpigmentation";
import QuizSkinTypePage from "./pages/quiz/skintype";
const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexPage />,

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
  {
    path: "/auth",
    element: <Auth />,
    children: [
      {
        path: "login",
        element: <AuthLoginPage />,
      },
      {
        path: "signup",
        element: <AuthSignupPage />,
      },
    ],
  }

]);

const App = () => {
  return (
    <MantineProvider>
      <RouterProvider router={router} />
    </MantineProvider>
  );
};

export default App;