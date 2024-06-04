import { http, HttpResponse } from "msw";

export const handlers = [
  http.get("http://localhost:3030/scoops", () => {
    // 서버가 반환하는 모든것을 넣진 않음 하지만 서버가 반환하는 값 형태는 동일해야함
    return HttpResponse.json([
      {
        name: "Chocolate",
        imagePath: "/images/chocolate.png",
      },
      {
        name: "Vanilla",
        imagePath: "/images/vanilla.png",
      },
    ]);
  }),
  http.get("http://localhost:3030/toppings", () => {
    return HttpResponse.json([
      {
        name: "Cherries",
        imagePath: "/images/cherries.png",
      },
      {
        name: "M&Ms",
        imagePath: "/images/m-and-ms.png",
      },
      {
        name: "Hot fudge",
        imagePath: "/images/hot-fudge.png",
      },
    ]);
  }),
];
