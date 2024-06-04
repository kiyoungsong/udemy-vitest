import { render } from "@testing-library/react";
import { OrderDetailsProvider } from "../contexts/OrderDetails";

const renderWithContext = (ui, options) => {
  return render(ui, { wrapper: OrderDetailsProvider, ...options });
};

// re-export everything
// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { renderWithContext as render };
