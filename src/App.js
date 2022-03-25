import "./App.css";
import { rental } from "./rental";

export default function App() {
  return (
    <div className="App">
      {rental.map((rental) => (
        <Hai
          name={rental.name}
          image={rental.image}
          price={rental.price}
          timing={rental.timing}
        />
      ))}
    </div>
  );
}

function Hai({ name, image, price, timing }) {
  return (
    <div className="new">
      <img src={image} alt="not supported" />
      <h1> {name}</h1>
      <p>{price}</p>
      <p>{timing}</p>
    </div>
  );
}
