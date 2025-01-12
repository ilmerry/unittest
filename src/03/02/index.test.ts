/**
 * 원서에 있는 원본 저장소는 중간과정은 생략하고 최종 완성본만 기재한 부분들이 있습니다.
 * 독자의 편의를 위해 책에 있는 코드 블럭을 정리한 뒤 주석처리 했습니다.
 * 독서중인 부분의 코드를 실행해보고 싶다면
 *   1)최종 완성본 코드를 수정하며 실행하거나
 *   2)코드 블럭별로 주석처리된 부분을 제거하고 실행하면서 읽어주세요.
 *
 * 주의 : 책에 있는 실행결과는 원서와 동일하게 최종 완성본을 실행했을 때를 기준으로 작성했습니다.
 * 코드 블럭별로 제가 정리해둔 부분의 주석을 제거한 뒤 실행하고 '책에있는 실행결과와 다른데?'라고 오해하는 일이 없도록 주의해주세요.
 * 예를 들어 원서 최종 완성본의 테스트는 총 126개입니다. 제가 코드 블럭별로 정리한 테스트들의 주석을 해제하면 당연히 테스트 갯수가 늘어납니다.
 */

import { add, sub } from ".";

/* 코드 3-2
test("add: 1 + 2는 3", () => {
  expect(add(1, 2)).toBe(3);
});
*/

/* 코드 3-3
describe("add", () => {
  test("1 + 1은 2", () => {
    expect(add(1, 1)).toBe(2);
  });
  test("1 + 2는 3", () => {
    expect(add(1, 2)).toBe(3);
  });
});
*/

/* 코드 3-5
describe("사칙연산", () => {
  describe("add", () => {
    // test("1 + 1은 2", () => {
    //   expect(add(1, 1)).toBe(2);
    // });
    test("1 + 1은 3", () => {
      expect(add(1, 1)).toBe(3);
    });
    test("1 + 2는 3", () => {
      expect(add(1, 2)).toBe(3);
    });
  });
})
*/

// describe("사칙연산", () => {
//   describe("add", () => {
//     test("1 + 1은 2", () => {
//       expect(add(1, 1)).toBe(2);
//     });
//     test("1 + 2는 3", () => {
//       expect(add(1, 2)).toBe(3);
//     });
//   });
//   describe("sub", () => {
//     test("1 - 1은 0", () => {
//       expect(sub(1, 1)).toBe(0);
//     });
//     test("2 - 1은 1", () => {
//       expect(sub(2, 1)).toBe(1);
//     });
//   });
// });

// test("1+1은 2", () => {
//   expect(add(1, 1)).toBe(2);
// });

// describe("add", () => {
//   test("1+1은 2", () => {
//     expect(add(1, 1)).toBe(2);
//   });
//   test("2+2은 4", () => {
//     expect(add(2, 2)).toBe(4);
//   });
// });

describe("사칙연산", () => {
  describe("add", () => {
    test("1+1은 2", () => {
      expect(add(1, 1)).toBe(2);
    });
    test("2+2은 4", () => {
      expect(add(2, 2)).toBe(4);
    });
  });

  describe("sub", () => {
    test("1-1은 0", () => {
      expect(sub(1, 1)).toBe(0);
    });
    test("2-1은 1", () => {
      expect(sub(2, 1)).toBe(1);
    });
  });
});
