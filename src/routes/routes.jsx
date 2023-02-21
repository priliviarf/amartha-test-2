import React from "react";
import { useRoutes } from "react-router-dom";

import { HomePage, MainLayout, NotFound } from "../containers";
import paths from "./paths";

export default function Routes() {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: paths.home, element: <HomePage /> },
        { path: paths.nomatch, element: <NotFound /> },
      ],
    },
  ]);

  return element;
}
