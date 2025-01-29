import { greet, sayGoodBye } from "./greet";

// jest.mock(대체할 모듈, 대체할 함수)
jest.mock("./greet", () => ({
  sayGoodBye: (name: string) => `Good bye, ${name}.`,
}));

test("인사말이 구현되어 있지 않다(원래 구현과 다르게)", () => {
  expect(greet).toBe(undefined); // greet은 정의하지 않음
});

test("작별 인사를 반환한다(원래 구현과 다르게)", () => {
  const message = `${sayGoodBye("Taro")} See you.`;
  expect(message).toBe("Good bye, Taro. See you.");
});
