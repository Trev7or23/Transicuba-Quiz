import { createBrowserRouter, redirect, RouterProvider } from "react-router";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import { lazy, Suspense } from "react";
import { useQuestionsStore } from "@/stores/questions";
import QuizSkeleton from "@/components/quiz/QuizSkeleton";

const Quiz = lazy(() => import("@/pages/quiz"));
const Result = lazy(() => import("@/pages/result"));

const VALID_LEVELS = ["easy", "medium", "hard"];

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/result",
    element: (
      <Suspense>
        <Result />
      </Suspense>
    ),
    loader: () => {
      const result = useQuestionsStore.getState().result;
      if (!result) return redirect("/");
      return null;
    },
  },
  {
    path: "/:difficulty",
    element: (
      <Suspense fallback={<QuizSkeleton />}>
        <Quiz />
      </Suspense>
    ),
    loader: ({ params }) => {
      if (!params.difficulty || !VALID_LEVELS.includes(params.difficulty))
        throw new Response("Not Found", { status: 404 });

      return null;
    },
    errorElement: <NotFound />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
