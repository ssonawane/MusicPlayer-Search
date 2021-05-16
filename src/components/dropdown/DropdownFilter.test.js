import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";
import DropdownFilter from "./DropdownFilter";

describe("DropdownFilter ", () => {
  test("renders learn react link", () => {
    const NavbarComponent = renderer.create(<DropdownFilter />).toJSON();
    expect(NavbarComponent).toMatchSnapshot();
  });

  test("check for searched string", () => {
    const getDrpDwnFilter = jest.fn();
    const { getByTestId } = render(
      <DropdownFilter getDrpDwnFilter={getDrpDwnFilter} />
    );

    expect(getByTestId("activity")).toHaveTextContent("Activities");
  });
});
