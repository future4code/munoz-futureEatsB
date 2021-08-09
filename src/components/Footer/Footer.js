import React from "react";
import { Container, ImageIcon } from "./styled";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import PermIdentityOutlinedIcon from "@material-ui/icons/PermIdentityOutlined";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import { useHistory } from "react-router-dom";

const Footer = () => {
  const history = useHistory();

  const routeFooter = (action) => () => {
    switch (action) {
      case 1:
        return history.push("/");

      case 2:
        return history.push("/carrinho");

      case 3:
        return history.push("/perfil");
      default:
        break;
    }
  };

  return (
    <Container>
      <ImageIcon onClick={routeFooter(1)}>
        <HomeOutlinedIcon color="disabled" fontSize="large" />
      </ImageIcon>

      <ImageIcon onClick={routeFooter(2)}>
        <ShoppingCartOutlinedIcon color="disabled" fontSize="large"/>
      </ImageIcon>

      <ImageIcon onClick={routeFooter(3)}>
        <PermIdentityOutlinedIcon color="disabled" fontSize="large"/>
      </ImageIcon>
    </Container>
  );
};

export default Footer;
