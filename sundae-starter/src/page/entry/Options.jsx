import axios from "axios";
import { useEffect, useState } from "react";
import ScoopOption from "./ScoopOption";
import Row from "react-bootstrap/Row";
import ToppingOptions from "./ToppingOption";

export default function Options({ optionType }) {
  const [items, setItems] = useState([]);
  console.log(items);
  // optionType => scoops or toppings
  useEffect(() => {
    axios
      .get(`http://localhost:3030/${optionType}`)
      .then((response) => setItems(response.data))
      .catch((error) => {
        // TODO: handle error response
      });
  }, [optionType]);

  const ItemComponent = optionType === "scoops" ? ScoopOption : ToppingOptions;

  const optionsItems = items.map((item) => (
    <ItemComponent
      key={item.name}
      name={item.name}
      imagePath={item.imagePath}
    />
  ));
  return <Row>{optionsItems}</Row>;
}
