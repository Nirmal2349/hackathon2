import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import * as React from "react";
import Button from "@mui/material/Button";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

export function Rental({ name, image, price, timing }) {
  const history = useHistory();
  return (
    <div className="new-container">
      <Card>
        <img src={image} alt={name} className="image" />
        <div className="specs">
          <h3 className="name">
            {name}
            <br />
            <p className="price">
              {price}/{timing}
            </p>
          </h3>
          <CardActions>
            <Button
              variant="text"
              onClick={() => history.goForward(`/rental/order`)}
            >
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
