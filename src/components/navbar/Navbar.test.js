import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import Navbar from "./Navbar";

describe("Navbar  ", () => {
  test("renders learn react link", () => {
    const NavbarComponent = renderer.create(<Navbar />).toJSON();
    expect(NavbarComponent).toMatchSnapshot();
  });
});
