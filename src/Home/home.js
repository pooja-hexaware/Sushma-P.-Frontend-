import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import * as React from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SearchIcon from "@mui/icons-material/Search";
import CardMedia from "@mui/material/CardMedia";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      // style={{
      //   backgroundImage: `url("https://thumbs.dreamstime.com/b/assorted-indian-recipes-food-various-spices-rice-wooden-table-92742528.jpg")`,
      //   maxHeight: 100,
      // }}
    >
      <Typography>
        <h1>
          <SearchIcon />
          <b>Find A Store</b>
        </h1>
      </Typography>
      <Card
        sx={{ maxWidth: 500, marginLeft: 20, backgroundColor: "lightGreen" }}
      >
        <CardMedia
          component="img"
          height="100"
          image="https://i.pinimg.com/736x/af/7b/82/af7b822183faa85e7b136a6521bf9b8d.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            {" "}
            <Button
              variant="inherit"
              color="inherit"
              onClick={() => navigate("/menu")}
            >
              <b>WiWi Store @1234</b>
            </Button>
            <br />
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            <b>Address:</b>
            Robert Robertson, 1234 NW Bobcat Lane, St. Robert, MO 65584-5678.
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card
        sx={{ maxWidth: 500, marginLeft: 20, backgroundColor: "lightBlue" }}
      >
        <CardMedia
          component="img"
          height="100"
          image="https://i.pinimg.com/736x/41/d1/ac/41d1ac31fa3711c97858633f500a9933.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{ fontSize: 30 }} color="text.secondary" gutterBottom>
            {" "}
            <Button
              variant="inherit"
              color="inherit"
              onClick={() => navigate("/home")}
            >
              <b>XYZ Store</b>
            </Button>
            <br />
            {/* <Button variant="inherit" color="inherit">
              XYZ Store
            </Button> */}
          </Typography>
          <Typography sx={{ fontSize: 15 }} color="text.secondary" gutterBottom>
            <b>Address:</b>
            2025 M Street, Northwest, India, 20036.
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
