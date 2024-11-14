import { Navbar } from "@/components/Navbar/Navbar";
import { userRoutes } from "@/routes/user.routes";

import { Box } from "@mui/material";
import { Route, Routes } from "react-router";

export const UserLayout = () => {
  const routes = () => {
    return (
      <Routes>
        {userRoutes.map((route, key) => (
          <Route key={key} path={route.path} element={route.element} />
        ))}
      </Routes>
    );
  };
  return (
    <>
      <Navbar />
      <Box sx={{ p: 3 }}>{routes()}</Box>
    </>
  );
};
