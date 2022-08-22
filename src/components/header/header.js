import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import Logo from "../../assets/Logo.png";

const pages = [
  "First Link",
  "Second Link",
  "Third Link",
  "Fourth Link",
  "Fifth Link",
  "Button",
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ bgcolor: "white", boxShadow: 0, maxWidth: "100%", height: 88 }}
      style={{ position: "fixed" }}
      className="appB_header_1st"
    >
      <Container
        maxWidth="auto"
        style={{ height: 88 }}
        className="Cont_header_1st"
      >
        <Toolbar
          disableGutters
          style={{ height: 88 }}
          className="tool_header_1st"
        >
          <img src={Logo} width={48} height={48} className="img_header_1st" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              color: "black",
              marginLeft: 1,
              textDecoration: "none",
              fontFamily: "Inter",
              fontSize: 23,
            }}
            className="typo_header_1st"
          >
            Sections
          </Typography>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              color: "#969696",
              justifyContent: "flex-end",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ color: "black" }}
                >
                  <Typography
                    sx={{ color: "black", fontSize: 15, fontWeight: 600 }}
                    textAlign="center"
                    autoCapitalize="none"
                  >
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} /> */}
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "none", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,

              color: "inherit",
              textDecoration: "none",
              fontFamily: "Inter",
            }}
          >
            Sections
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              color: "black",
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page, i) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
                style={
                  i === 4
                    ? {
                        color: "#FF8364",
                        fontSize: 15,
                        fontWeight: 600,
                        textTransform: "none",
                        fontFamily: "Inter",
                        padding: "6px 12px",
                      }
                    : i === 5
                    ? {
                        backgroundColor: "#FF8364",
                        color: "#fff",
                        fontSize: 15,
                        fontWeight: 600,
                        textTransform: "none",
                        fontFamily: "Inter",
                        borderRadius: 6,
                        padding: "6px 12px",
                      }
                    : {
                        fontSize: 15,
                        fontWeight: 600,
                        textTransform: "none",
                        fontFamily: "Inter",
                        padding: "6px 12px",
                      }
                }
              >
                {page} &nbsp; {i === 5 && "▢"}
              </Button>
            ))}
          </Box>

          <Box
            sx={{ flexGrow: 0, justifyContent: "center", alignItems: "center" }}
          >
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography autoCapitalize="none" textAlign="center">
                    {setting}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
