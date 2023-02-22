import React from "react";
import { useRoutes } from "react-router-dom";

import { DetailPage, HomePage, MainLayout, NotFoundPage } from "../containers";
import paths from "./paths";

export default function Routes() {
  let element = useRoutes([
    {
      element: <MainLayout />,
      children: [
        { path: paths.home, element: <HomePage /> },
        { path: paths.detail, element: <DetailPage /> },
        { path: paths.nomatch, element: <NotFoundPage /> },
      ],
    },
  ]);

  return element;
}
