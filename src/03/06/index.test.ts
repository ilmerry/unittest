describe("진릿값 검증", () => {
  // test("참인 진릿값 검증", () => {
  //   expect(1).toBeTruthy();
  //   expect("1").toBeTruthy();
  //   expect(true).toBeTruthy();
  //   expect(0).not.toBeTruthy();
  //   expect("").not.toBeTruthy();
  //   expect(false).not.toBeTruthy();
  // });
  // test("거짓인 진릿값 검증", () => {
  //   expect(0).toBeFalsy();
  //   expect("").toBeFalsy();
  //   expect(false).toBeFalsy();
  //   expect(1).not.toBeFalsy();
  //   expect("1").not.toBeFalsy();
  //   expect(true).not.toBeFalsy();
  // });
  // test("null과 undefined 검증", () => {
  //   expect(null).toBeFalsy();
  //   expect(undefined).toBeFalsy();
  //   expect(null).toBeNull();
  //   expect(undefined).toBeUndefined();
  //   expect(undefined).not.toBeDefined();
  // });
  test("참인 진릿값 검증", () => {
    expect(1).toBeTruthy();
    expect(!0).toBeTruthy();
    expect("").not.toBeTruthy();
  });

  test("거짓인 진릿값 검증", () => {
    expect(undefined).toBeFalsy();
    expect(null).toBeFalsy();
    expect(!0).not.toBeFalsy();
  });

  test("null, undefined, NaN 검증", () => {
    expect(undefined).toBeUndefined();
    expect(null).toBeNull();
    expect(NaN).toBeNaN();
  });
});

describe("수치 검증", () => {
  // const value = 2 + 2;
  // test("검증값이 기댓값과 일치한다", () => {
  //   expect(value).toBe(4);
  //   expect(value).toEqual(4);
  // });
  // test("검증값이 기댓값보다 크다", () => {
  //   expect(value).toBeGreaterThan(3); // 4 > 3
  //   expect(value).toBeGreaterThanOrEqual(4); // 4 >= 4
  // });
  // test("검증값이 기댓값보다 작다", () => {
  //   expect(value).toBeLessThan(5); // 4 < 5
  //   expect(value).toBeLessThanOrEqual(4); // 4 <= 4
  // });
  // test("소수 계산은 정확하지 않다", () => {
  //   expect(0.1 + 0.2).not.toBe(0.3);
  // });
  // test("소수 계산 시 지정한 자릿수까지 비교한다", () => {
  //   expect(0.1 + 0.2).toBeCloseTo(0.3); // 두 번째 인수의 기본값은 2다.
  //   expect(0.1 + 0.2).toBeCloseTo(0.3, 15);
  //   expect(0.1 + 0.2).not.toBeCloseTo(0.3, 16);
  // });

  test("JS 소수 계산이 정확하지 않다는 증거", () => {
    expect(0.1 + 0.2).not.toBe(0.3);
  });

  test("소수 계산 시 지정한 자릿수까지 비교", () => {
    expect(0.1 + 0.2).toBeCloseTo(0.3);
    expect(0.1 + 0.2).toBeCloseTo(0.3, 15); // 여기까진 통과
    expect(0.1 + 0.2).toBeCloseTo(0.3, 16); // 미통과
  });
});

describe("문자열 검증", () => {
  // const str = "Hello World";
  // const obj = { status: 200, message: str };
  // test("검증값이 기댓값과 일치한다", () => {
  //   expect(str).toBe("Hello World");
  //   expect(str).toEqual("Hello World");
  // });
  // test("toContain", () => {
  //   expect(str).toContain("World");
  //   expect(str).not.toContain("Bye");
  // });
  // test("toMatch", () => {
  //   expect(str).toMatch(/World/);
  //   expect(str).not.toMatch(/Bye/);
  // });
  // test("toHaveLength", () => {
  //   expect(str).toHaveLength(11);
  //   expect(str).not.toHaveLength(12);
  // });
  // test("stringContaining", () => {
  //   expect(obj).toEqual({
  //     status: 200,
  //     message: expect.stringContaining("World"),
  //   });
  // });
  // test("stringMatching", () => {
  //   expect(obj).toEqual({
  //     status: 200,
  //     message: expect.stringMatching(/World/),
  //   });
  // });
  const str = "Hello World";
  test("문자열 비교", () => {
    expect(str).toContain("Hello");
    expect(str).toMatch(/Hello/);
    expect(str).toHaveLength(11);
  });

  const obj = {
    status: 200,
    message: "Hello World",
  };
  test("객체에 포함된 문자열 비교", () => {
    expect(obj).toEqual({
      status: 200,
      message:
        expect.stringContaining("World") || expect.stringMatching(/World/),
    });
  });
});

describe("배열 검증", () => {
  // describe("원시형 값들로 구성된 배열", () => {
  //   const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];
  //   test("toContain", () => {
  //     expect(tags).toContain("Jest");
  //     expect(tags).toHaveLength(5);
  //   });
  // });
  // describe("객체들로 구성된 배열", () => {
  //   const article1 = { author: "taro", title: "Testing Next.js" };
  //   const article2 = { author: "jiro", title: "Storybook play function" };
  //   const article3 = { author: "hanako", title: "Visual Regression Testing" };
  //   const articles = [article1, article2, article3];
  //   test("toContainEqual", () => {
  //     expect(articles).toContainEqual(article1);
  //   });
  //   test("arrayContaining", () => {
  //     expect(articles).toEqual(expect.arrayContaining([article1, article3]));
  //   });
  // });
  const tags = ["Jest", "Storybook", "Playwright", "React", "Next.js"];
  const objs = [{ a: 1 }, { b: 1 }, { c: 2 }];
  test("원시값 배열 검증", () => {
    expect(tags).toContain("Jest");
    expect(tags).toHaveLength(5);
  });

  test("객체를 포함하는 배열", () => {
    expect(objs).toContainEqual({ a: 1 });
    expect(objs).toEqual(expect.arrayContaining([{ b: 1 }, { c: 2 }]));
  });
});

describe("객체 검증", () => {
  const author = { name: "taroyamada", age: 38 };
  const article = {
    title: "Testing with Jest",
    author,
  };
  test("통과하는 케이스", () => {
    expect(author).toMatchObject({ name: "taroyamada" }); // 값까지 동일해야함
    expect({ ...article, ...author }).toMatchObject(author);
    expect(article).toMatchObject({ author });
    expect(article).toHaveProperty("title");
    expect(article).toEqual({
      ...article,
      author: expect.objectContaining({ name: "taroyamada" }),
    });
  });

  test("실패하는 케이스", () => {
    expect(author).toMatchObject({ name: "asdf" }); // 값 다르면 실패
    expect(author).toMatchObject({
      name: "taroyamada",
      age: 38,
      email: "aaa@example.com",
    }); // 일치하지 않는 프로퍼티
    expect(article).toHaveProperty("name");
    expect(article).toEqual({
      ...article,
      author: expect.objectContaining({
        email: "aaa@example.com",
      }),
    });
  });

  // test("toMatchObject", () => {
  //   expect(author).toMatchObject({ name: "taroyamada", age: 38 });
  //   expect(author).toMatchObject({ name: "taroyamada" });
  //   expect(author).not.toMatchObject({ gender: "man" });
  // });
  // test("toHaveProperty", () => {
  //   expect(author).toHaveProperty("name");
  //   expect(author).toHaveProperty("age");
  // });
  // test("objectContaining", () => {
  //   expect(article).toEqual({
  //     title: "Testing with Jest",
  //     author: expect.objectContaining({ name: "taroyamada" }),
  //   });
  //   expect(article).toEqual({
  //     title: "Testing with Jest",
  //     author: expect.not.objectContaining({ gender: "man" }),
  //   });
  // });
});
