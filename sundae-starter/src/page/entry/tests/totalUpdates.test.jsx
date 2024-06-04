import {
  findByRole,
  render,
  screen,
} from "../../../test-utils/testing-library-utils";
import userEvent from "@testing-library/user-event";
import Options from "../Options";
import { expect } from "vitest";

test("updatescoop subtotal when scoops change", async () => {
  const user = userEvent.setup();
  render(<Options optionType={"scoops"} />);

  // make sure total starts out at $0.00
  const scoopsSubtotal = screen.getByText("Scoops total: $", {
    exact: false, // 부분적으로 일치하기 때문에 false
  });
  expect(scoopsSubtotal).toHaveTextContent("0.00");

  // update vanilla scoops to 1, and check subtotal
  const vanillaInput = await screen.findByRole("spinbutton", {
    name: "Vanilla",
  });
  // 요소를 클리어해줌, 왜냐면 커서의 위치를 모르기때문에
  await user.clear(vanillaInput);
  await user.type(vanillaInput, "1");
  expect(scoopsSubtotal).toHaveTextContent("2.00");

  // update chocolate scoops to 2, and check subtotl
  const chocolateInput = await screen.findByRole("spinbutton", {
    name: "Chocolate",
  });

  await user.clear(chocolateInput);
  await user.type(chocolateInput, "2");
  // 바닐라2, 초콜릿 4 해서 총 6
  expect(scoopsSubtotal).toHaveTextContent("6.00");
});

test("updatetopping subtotal when topping change", async () => {
  const user = userEvent.setup();
  // 토핑이 서버에서 가져와졌는지 확인
  render(<Options optionType={"toppings"} />);

  // 토핑의 모든 가격의 기존값을 확인
  const toppingSubtotal = screen.getByText("toppings total: $", {
    exact: false,
  });

  expect(toppingSubtotal).toHaveTextContent("0.0");

  // checkbox을 가져오고
  const hotfudecheckBox = await screen.findByRole("checkbox", {
    name: "Hot fudge",
  });
  // 클릭
  await user.click(hotfudecheckBox);
  expect(toppingSubtotal).toHaveTextContent("1.5");

  const cherriesCheckbox = await screen.findByRole("checkbox", {
    name: "Cherries",
  });

  // 클릭
  await user.click(cherriesCheckbox);

  // 토핑의 모든 가격 의 총합을 확인
  expect(toppingSubtotal).toHaveTextContent("3.0");

  const mnmsCheckBox = await screen.findByRole("checkbox", {
    name: "M&Ms",
  });
  await user.click(mnmsCheckBox);
  // 토핑의 모든 가격 의 총합을 확인
  expect(toppingSubtotal).toHaveTextContent("4.5");

  // 체크 해제했을때 가격
  await user.click(mnmsCheckBox);
  expect(toppingSubtotal).toHaveTextContent("3.0");
});
