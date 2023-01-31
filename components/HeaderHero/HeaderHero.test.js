import React from "react";
import { render } from "@testing-library/react";
import HeaderHero from "./HeaderHero";

test("HeaderHero displays text correctly and props is not null", () => {
  const text = "Welcome to my website";
  const { getByText } = render(<HeaderHero text={text} />);
  const heroText = getByText(text);
  expect(heroText).toBeInTheDocument();
  expect(text).not.toBeNull();
});
