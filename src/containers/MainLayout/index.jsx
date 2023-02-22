import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <>
      <h2>GET.ANIME</h2>

      <Outlet />
    </>
  );
}

export default MainLayout;
