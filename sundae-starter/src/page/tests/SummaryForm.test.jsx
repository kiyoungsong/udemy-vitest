import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
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

test("checkbox flow", async () => {
  const user = userEvent.setup();
  // 체크박스, 버튼 렌더
  render(<SummaryForm />);
  // 체크박스 초기값 확인, 체크박스 클시 체크유무 확인
  const checkBoxElement = screen.getByRole("checkbox", {
    name: /terms and conditions/i,
  });
  const buttonElement = screen.getByRole("button", { name: /confirm order/i });

  // 체크박스 체크, 버튼 비활성화
  await user.click(checkBoxElement);
  expect(buttonElement).toBeEnabled();

  // 체크박스 체크, 버튼 활성화
  await user.click(checkBoxElement);
  expect(buttonElement).toBeDisabled();
});

test("popover", async () => {
  const user = userEvent.setup();

  render(<SummaryForm />);

  //popover starts out hidden
  const popoverElement =
    // 체크박스 라벨에 마우스 가져다 대면 popover
    await user.hover();
  // 체크박스 라벨에 마우스를 빼면 popover 사라짐
});
