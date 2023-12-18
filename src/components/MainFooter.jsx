import React from "react";
import { Box, IconButton } from "@mui/material";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import classes from "./MainFooter.module.css";

const MainFooter = () => {
  return (
    <Box className={classes.footer}>
      <p>Thanks for visiting, please check the actual 
        <a href="https://www.futbin.com/">
         <img src="https://cdn.futbin.com/design/img/logos/futbin-green-small.png?v=5" alt="FUTBIN logo" />
        </a>.
      </p>
      <IconButton href="https://github.com/cmpinzonh">
        <FaGithub />
      </IconButton>
      <IconButton href="https://www.linkedin.com/in/miguel-pinz%C3%B3n-727b34187/">
        <FaLinkedin />
      </IconButton>
    </Box>
  );
};

export default MainFooter;
