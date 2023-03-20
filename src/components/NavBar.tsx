import * as React from "react";
import "./NavBar.scss";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import BoboFrog from "../assets/images/BoboFrog.png";
import Avatar from "@mui/material/Avatar";
import FeedIcon from "@mui/icons-material/Feed";

const drawerWidth = 240;
const navLinks = ["01.About", "02.Experience", "03.project"];

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  refs: HTMLDivElement[];
}

function NavBar(props: Props) {
  const { window, refs } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  console.log("HERE", refs);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleClick = (ref: HTMLDivElement) => {
    if (ref) {
      ref.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("NOTHING");
    }
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <div className="nav-bar__drawer__title">
        <Avatar alt={BoboFrog} src={BoboFrog} />
        <span>Bodin's Website</span>
      </div>
      <Divider />
      <List>
        {navLinks.map((link, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ListItemText primary={link} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className="nav-bar">
          <Box className="nav-bar__logo">
            <Avatar alt={BoboFrog} src={BoboFrog} />
            <Typography className="nav-bar__logo__text">Bodinzzz</Typography>
          </Box>
          <IconButton aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ mr: 2, display: { sm: "none" } }}>
            <MenuIcon />
          </IconButton>
          <Box className="nav-bar__links" sx={{ display: { xs: "none", sm: "block" } }}>
            {navLinks.map((link, index) => (
              <Button
                className="nav-bar__links__link"
                key={index}
                onClick={() => {
                  handleClick(refs[index]);
                }}
              >
                <span>{link}</span>
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      {/* DRAWER */}
      <Box component="nav">
        <Drawer
          anchor="right"
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {/* DRAWER END*/}
      <Box component="main">
        <Toolbar />
      </Box>
    </Box>
  );
}

export default NavBar;
