import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { Nav, NavLink, Bars, NavMenu } from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to="/">
          <img
            src={require("../../images/logo.png")}
            alt="logo"
            width="55"
            height="55"
          />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/cryptocurrencies">Cryptocurrencies</NavLink>
          <NavLink to="/exchanges">Exchanges</NavLink>
          <NavLink to="/news">News</NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
