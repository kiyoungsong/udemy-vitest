import { findAllByRole, render, screen } from "@testing-library/react";

import Options from "../Options";
import { expect } from "vitest";

test("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  // find images
  // 이미지의 모든지의 끝에 scoop이 존재한다고 가정
  // 서버에서 데이터를 가져올때 비동기식 방법으로 데이터를 채움
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });

  // 이미지 개수 확인
  expect(scoopImages).toHaveLength(2);

  // 이미지를 alt text 확인
  const altText = scoopImages.map((element) => element.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});

test("display image for topping options from server", async () => {
  render(<Options optionType={"toppings"} />);

  // 비동기로 온 데이터를 찾아
  const toppingImages = await screen.findAllByRole("img", {
    name: /topping$/i,
  });

  // 이미지 개수 확인
  expect(toppingImages).toHaveLength(3);

  // 이미지가 제대로 된건지 확인
  const imageAlt = toppingImages.map((element) => element.alt);
  expect(imageAlt).toEqual([
    "Cherries topping",
    "M&Ms topping",
    "Hot fudge topping",
  ]);
});
