import { Catalog } from "@/UserComponents/Catalog/Catalog";
import { Index } from "@/UserComponents/Index/Index";

export const userRoutes = [
  {
    path: "/",
    name: "Главная",
    element: <Index />,
  },
  {
    path: "/catalog",
    name: "Каталог",
    element: <Catalog />,
  },
];
