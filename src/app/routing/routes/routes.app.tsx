import { Outlet, RouteObject, createBrowserRouter } from "react-router-dom";
import { HomePage } from "../../page/home";
import { TutorialPage } from "../../page/tutorial";

export const Router: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/tutorial",
    element: <TutorialPage />,
  },
];

export const RouterPaths = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: Router,
  },
]);

function RootPage() {
  return (
    <div>
      <Outlet />
    </div>
  );
}
