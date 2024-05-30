import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";
import { kebabCaseToTitleCase } from "./helper";

// test("App contains correct heading", () => {
//   render(<App />);
//   // 정규식을통해 텍스트가 일치한 글자를 불러옴, 정규식은 아니여도 되지만 글자가 정확히 일치해야함
//   // const headingElement = screen.getByText(/learn react/i);
//   // 아래 구문을 통해 테스트 성공/실패유무를 반환함
//   // expect(headingElement).toBeInTheDocument();

//   // 에러 발생시킴
//   // throw new Error("fail this test!");

//   const headingElement = screen.getByRole("heading", { name: /learn React/i });
//   expect(headingElement).toBeInTheDocument();
// });

test("button click flow", () => {
  // render App
  render(<App />);
  // find the button
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  // check inital color
  expect(buttonElement).toHaveClass("red");
  // click the button
  fireEvent.click(buttonElement);
  // check button text
  expect(buttonElement).toHaveTextContent(/red/i);
  // check button color
  expect(buttonElement).toHaveClass("blue");
});

test("test checkbox flow and change button color", () => {
  render(<App />);
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // 초기조건
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // 체크박스 눌렀을때 버튼이 disable, 색상변경
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeDisabled();
  expect(buttonElement).toHaveClass("gray");

  // 체크박스 해제시 버튼 enable, 색상 원복
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(buttonElement).not.toHaveClass("gray");
});

test("체크박스 테스트 및 버튼 동작 테스트", () => {
  render(<App />);
  // 버튼 빨강 -> 파랑
  // find elements
  const buttonElement = screen.getByRole("button", { name: /blue/i });
  const checkboxElement = screen.getByRole("checkbox", {
    name: /disable button/i,
  });

  // check initial conditions
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // click checkbox
  fireEvent.click(checkboxElement);

  // check conditions
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass("gray");

  // re-click checkbox
  fireEvent.click(checkboxElement);
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();

  // button change color
  fireEvent.click(buttonElement);
  expect(buttonElement).toHaveClass("blue");
  expect(buttonElement).toHaveTextContent(/red/i);

  // click checkbox
  fireEvent.click(checkboxElement);

  // check conditions
  expect(buttonElement).toBeDisabled();
  expect(checkboxElement).toBeChecked();
  expect(buttonElement).toHaveClass("gray");

  // re-click checkbox
  fireEvent.click(checkboxElement);

  // rollback condition
  expect(buttonElement).toBeEnabled();
  expect(checkboxElement).not.toBeChecked();
});

// 그룹 테스트하는 방법
describe("kebabCaseToTitleCase", () => {
  test("works for no hyphens", () => {
    expect(kebabCaseToTitleCase("red")).toBe("Red");
  });
  test("works for one hyphens", () => {
    expect(kebabCaseToTitleCase("midnight-blue")).toBe("Midnight Blue");
  });
  test("works for multiple hyphens", () => {
    expect(kebabCaseToTitleCase("medium-violet-red")).toBe("Medium Violet Red");
  });
});
