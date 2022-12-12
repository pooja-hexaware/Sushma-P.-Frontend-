import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenu } from "./store/menu.action";
import Item from "./Item";

const MenuList = ({id, price}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.menu.menu);
  const totalCount = useSelector(state => state.cart.totalCount)

  const loadData = () => {
    dispatch(fetchMenu())
  };

  useEffect(() => {
    loadData();
  }, []);
 

  return (
    <div
      style={{
        backgroundImage: `url("https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png")`,
      }}
    >
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <b>WIWI Food App (Capstone)</b>
            </Typography>
            <Button
              variant="outlined"
              color="inherit"
              //onClick={() => navigate("/cart  
              onClick={() => navigate('/cart')}
            >
              <ShoppingCartIcon />
              Cart {totalCount}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <br />
      <br />
      <div class="contents-wrapper">
        <center>
          <Card
            className="body"
            sx={{ maxWidth: 500, backgroundColor: "lightBlue" }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 30 }}
                color="text.secondary"
                gutterBottom
              >
                {" "}
                <b>Good Food Great Time</b>
              </Typography>
              <Typography
                sx={{ fontSize: 15 }}
                color="text.secondary"
                gutterBottom
              >
                <i>
                  Our chefs at WiWi make delicious food selections every week-
                  You pick, we cook and deliver
                </i>
              </Typography>
            </CardContent>
          </Card>
          <br />
          <Card sx={{ maxWidth: 900, backgroundColor: "lightYellow" }}>
            <CardContent>
              <Typography
                sx={{ fontSize: 20 }}
                color="text.secondary"
                gutterBottom
              >
                {console.log("data", data)}
                {data.map((menu) => {
                  return (<Item menu={menu} />);
                })}
  
              </Typography>
            </CardContent>
          </Card>
          <br />
        </center>
      </div>
    </div>
  );
};

export default MenuList;
