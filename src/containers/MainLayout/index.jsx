import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h2>GetAnime</h2>

      <Outlet />
    </>
  );
}

export default MainLayout;
