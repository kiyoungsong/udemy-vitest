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
  const nullPopover = screen.queryByText(
    /no ice cream will actually be delivered/i
  );

  // null 체크
  expect(nullPopover).not.toBeInTheDocument();

  // 체크박스 라벨에 마우스 가져다 대면 popover
  const termsAndConditions = screen.getByText(/terms and conditions/i);
  await user.hover(termsAndConditions);

  // get을사용해서 팝업이 있을것으로 가정해야하니 get을 사용해서 가져옴
  const popover = screen.getByText(/no ice cream will actually be delivered/i);
  expect(popover).toBeInTheDocument();

  // 체크박스 라벨에 마우스를 빼면 popover 사라짐
  await user.unhover(termsAndConditions);
  expect(popover).not.toBeInTheDocument();
});
