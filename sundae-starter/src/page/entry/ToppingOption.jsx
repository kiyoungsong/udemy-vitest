import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useOrderDetails } from "../../contexts/OrderDetails";

export default function ToppingOptions({ name, imagePath }) {
  const { updateItemCount } = useOrderDetails();

  const handleChecked = (e) => {
    const { checked } = e.target;
    updateItemCount(name, Number(checked), "toppings");
  };
  return (
    <Col
      xs={12}
      sm={6}
      md={4}
      lg={2}
      style={{
        textAlign: "center",
      }}
    >
      <img
        style={{
          width: "75%",
        }}
        src={`http://localhost:3030${imagePath}`}
        alt={`${name} topping`}
      />
      <Form.Group
        controlId={`${name}-count`}
        as={Row}
        style={{ marginTop: "10px" }}
      >
        <Col xs="5" style={{ textAlign: "left" }}>
          <Form.Check
            type="checkbox"
            defaultChecked={false}
            onChange={handleChecked}
            label={name}
          />
        </Col>
      </Form.Group>
    </Col>
  );
}
