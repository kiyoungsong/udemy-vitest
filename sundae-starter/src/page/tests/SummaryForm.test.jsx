import { render, screen, fireEvent } from "@testing-library/react";
import { expect } from "vitest";
import { SummaryForm } from "../summary/SummaryForm";
test("check render", () => {
  render(<SummaryForm />);

  // 체크박스, 버튼 렌더 확인
  const checkBoxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });

  // 초기값 체크박스 unchecked, 버튼 enable
  expect(checkBoxElement).not.toBeChecked();
  expect(buttonElement).toBeDisabled();
});

test("checkbox flow", () => {
  // 체크박스, 버튼 렌더
  render(<SummaryForm />);
  // 체크박스 초기값 확인, 체크박스 클시 체크유무 확인

  const checkBoxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });

  // 체크박스 체크, 버튼 비활성화
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();

  // 체크박스 체크, 버튼 활성화
  fireEvent.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();
});
