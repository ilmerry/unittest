import { greet } from "./greet";

jest.mock("./greet"); // 테스트할 모듈 대체

test("인사말을 반환하지 않는다(원래 구현과 다르게)", () => {
  expect(greet("Taro")).toBe(undefined); // 모듈이 대체되었으므로 undefined 반환
});
