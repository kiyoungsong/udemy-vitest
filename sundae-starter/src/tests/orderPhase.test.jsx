import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { expect } from "vitest";

test("order phases for happy path", async () => {
  const user = userEvent.setup();
  // 애플리케이션 렌더링
  render(<App />);
  // 스쿱과 토핑을 추가
  const chocolateElement = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  await user.clear(chocolateElement);
  await user.type(chocolateElement, "1");

  const vanillaElement = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });

  await user.clear(vanillaElement);
  await user.type(vanillaElement, "2");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  await user.click(cherriesCheckbox);

  const hotfudgeCheckbox = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });

  await user.click(hotfudgeCheckbox);

  // 주문 입력 페이지에서 주문 버튼을 찾아 클릭
  const orderSundaeButton = screen.getByRole("button", {
    name: /order sundae!/i,
  });

  expect(orderSundaeButton).toBeInTheDocument();

  await user.click(orderSundaeButton);

  // 주문 내용을 기반으로 요약 정보가 맞는지 확인

  // const scoopsTotalElement = screen.getByRole("heading", {
  //   name: /Scoops: \$/i,
  // });

  // expect(scoopsTotalElement).toHaveTextContent("4.0");

  // const chocolateTextElement = screen.getByText(/2 Vanilla/i, { exact: false });
  // expect(chocolateTextElement).toBeInTheDocument();

  // const toppingsTotalElement = screen.getByRole("heading", {
  //   name: /Toppings: \$/i,
  // });

  // expect(toppingsTotalElement).toHaveTextContent("3.0");
  // const hotfudge = screen.getByAltText("Hot fudge");
  // expect(hotfudge).toBeInTheDocument();

  // const cherries = screen.getByAltText("Cherries");
  // expect(cherries).toBeInTheDocument();

  // const totalElement = screen.getByText("Total", { exact: false });
  // expect(totalElement).toHaveTextContent("7.0");
  // 이용약관을 수락하고 버튼을 클릭해 주문을 확인
  // 주문 확인 페이지에서 주문 번호가 있는지 확인
  // 새 주문 버튼을 클릭합니다
  // 스쿱 토핑 소계가 재설정됬는지 확인
});
