import { render, screen } from "@testing-library/react";
import { ArticleListItem, ItemProps } from "./ArticleListItem";

const item: ItemProps = {
  id: "howto-testing-with-typescript",
  title: "TypeScript를 사용한 테스트 작성법",
  body: "테스트 작성시 TypeScript를 사용하면 테스트의 유지보수가 쉬워진다",
};

test("링크에 id로 만들어진 URL이 표시되었는지 확인", () => {
  render(<ArticleListItem {...item} />);
  expect(screen.getByRole("link", { name: "더 알아보기" })).toHaveAttribute(
    "href",
    "/articles/howto-testing-with-typescript"
  );
});

test("Snapshot: 개별 아이템이 표시되었는지 확인", () => {
  const { container } = render(<ArticleListItem {...item} />);
  expect(container).toMatchSnapshot();
});
