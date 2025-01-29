import * as Fetchers from "../fetchers";
import { getGreet } from "./index"; // spyOn할 객체와 별도의 모듈 안에 존재해야한다. 스텁(../fetchers) -> 테스트 대상(./index) -> test.ts 순으로 import 해야함

jest.mock("../fetchers");

const internalServerError = {
  err: { mesage: "internal server error" },
};

test("데이터 취득 성공 시: 사용자 이름이 없는 경우", async () => {
  /*
   * jest.spyOn(테스트할 객체, 테스트할 함수 이름)
   * .mockResolvedValueOnce(응답으로 기대하는 객체)
   * .mockRejectedValueOnce(에러 객체)
   */
  jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
    id: "xxxxxxx-123456",
    email: "taroyamada@myapi.testing.com",
  });
  await expect(getGreet()).resolves.toBe("Hello, anonymous user!");

  jest
    .spyOn(Fetchers, "getMyProfile")
    .mockRejectedValueOnce(internalServerError);
  try {
    await getGreet();
  } catch (err) {
    expect(err).toMatchObject(internalServerError);
  }
});

// jest.mock("../fetchers");

/* 코드 4-9
// id, email을 가진 응답 객체를 작성
jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
  id: "xxxxxxx-123456",
  email: "taroyamada@myapi.testing.com",
});
*/

/* 코드 4-14
jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
*/

// describe("getGreet", () => {
//   test("데이터 취득 성공 시 : 사용자 이름이 없는 경우", async () => {
//     // getMyProfile이 resolve됐을 때의 값을 재현
//     jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
//       id: "xxxxxxx-123456",
//       email: "taroyamada@myapi.testing.com",
//     });
//     await expect(getGreet()).resolves.toBe("Hello, anonymous user!");
//   });
//   test("데이터 취득 성공 시: 사용자 이름이 있는 경우", async () => {
//     jest.spyOn(Fetchers, "getMyProfile").mockResolvedValueOnce({
//       id: "xxxxxxx-123456",
//       email: "taroyamada@myapi.testing.com",
//       name: "taroyamada",
//     });
//     await expect(getGreet()).resolves.toBe("Hello, taroyamada!");
//   });
//   test("데이터 취득 실패 시", async () => {
//     // getMyProfile이 reject됐을 때의 값을 재현
//     jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
//     await expect(getGreet()).rejects.toMatchObject({
//       err: { message: "internal server error" },
//     });
//   });
//   test("데이터 취득 실패 시 에러가 발생한 데이터와 함께 예외가 throw된다", async () => {
//     expect.assertions(1);
//     jest.spyOn(Fetchers, "getMyProfile").mockRejectedValueOnce(httpError);
//     try {
//       await getGreet();
//     } catch (err) {
//       expect(err).toMatchObject(httpError);
//     }
//   });
// });
