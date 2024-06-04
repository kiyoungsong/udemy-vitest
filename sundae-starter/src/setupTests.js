import "@testing-library/jest-dom";

import { beforeAll, afterEach, afterAll } from "vitest";
import { server } from "./mocks/server";

// 모든 테스트를 진행하기전 서버 실행
beforeAll(() => server.listen());

// 다른 테스트에 영향을 주지 않도록 각 테스트를 진행한 후 서버를 리셋
afterEach(() => server.resetHandlers());

// 서버를 닫음
afterAll(() => server.close());
