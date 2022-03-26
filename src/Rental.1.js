import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";

export function Rental({ name, image, price, timing }) {
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
            <button className="button">cart</button>
          </CardActions>
        </div>
      </Card>
    </div>
  );
}
