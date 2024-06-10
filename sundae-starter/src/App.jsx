import Container from "react-bootstrap/Container";
import OrderEntry from "./page/entry/OrderEntry";
import { OrderDetailsProvider } from "./contexts/OrderDetails";
import { useState } from "react";

function App() {
  const [status, setStatus] = useState("inProgress");

  let Component = OrderEntry;

  switch (status) {
    case "inProgress":
      Component = OrderEntry;
      break;
    case "review":
      Component = OrderEntry;
      break;
    case "completed":
      Component = OrderEntry;
  }

  return (
    <Container>
      <OrderDetailsProvider>
        <Component setStatus={setStatus} />
      </OrderDetailsProvider>
    </Container>
  );
}

export default App;
