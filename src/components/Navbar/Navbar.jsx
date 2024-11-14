import {
  AppBar,
  Box,
  Button,
  Drawer,
  IconButton,
  InputBase,
  Paper,
  Stack,
  Toolbar,
} from "@mui/material";
import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";

import Logo from "@/assets/imgs/Logo-TIMARK.svg";
import { NavLink } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Stack sx={{ p: 2 }} spacing={3} direction={{ xs: "column", sm: "row" }}>
      <Button
        LinkComponent={NavLink}
        to="/catalog"
        sx={{ bgcolor: "#2F2F2F", color: "#fff", pl: 3, pr: 3 }}
      >
        Каталог
      </Button>
      <Box>
        <Paper
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            backgroundColor: "#ECEFF1",
          }}
        >
          <InputBase
            sx={{ ml: 1, flexGrow: 1 }}
            placeholder="Поиск"
            inputProps={{ "aria-label": "Поиск" }}
          />
          <IconButton type="button" aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
      </Box>
      <Button sx={{ color: "#2F2F2F" }}>О нас</Button>
    </Stack>
  );

  return (
    <Box sx={{ display: "flex", height: 120 }}>
      <AppBar
        sx={{ bgcolor: "#fff", p: 3, width: "100%" }}
        elevation={0}
        component="nav"
      >
        <Toolbar sx={{ width: "100%", paddingLeft: "0px!important" }}>
          <Stack
            sx={{
              display: "flex",
              alignItems: "center",
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box component={NavLink} to="/" sx={{ width: 150 }}>
              <img src={Logo} alt="logo" />
            </Box>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>{drawer}</Box>
          </Stack>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon sx={{ color: "#000" }} />
          </IconButton>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          variant="temporary"
          anchor="top"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};
