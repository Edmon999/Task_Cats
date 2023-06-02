import { CatsPage } from "./features/Cats/components/CatsPage/CatsPage";
import { Home } from "./features/Main/components/Home/Home";

export const API_URL = "https://api.thecatapi.com/v1";

export const ROUTES = [
  {
    path: "/",
    element: Home,
  },
//   {
//     path: "/category/:category",
//     element: CatsPage,
//   },
];
