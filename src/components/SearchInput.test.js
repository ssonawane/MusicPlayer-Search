import {
  render,
  screen,
  findByTestId,
  fireEvent,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import SearchInput from "./SearchInput";

describe("Check box", () => {
  test("check snapshot", () => {
    const AppComponent = renderer.create(<SearchInput />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });

  test("check input field data as empty", () => {
    const getSearchIp = jest.fn();
    const { getByTestId } = render(<SearchInput getSearchIp={getSearchIp} />);

    expect(getByTestId("input-search")).toBeEmptyDOMElement();
  });

  test("check input field data as filled", () => {
    const getSearchIp = jest.fn();
    const { getByTestId } = render(<SearchInput getSearchIp={getSearchIp} />);
    const inputField = getByTestId("input-search");
    fireEvent.change(inputField, { target: { value: "faith" } });
    expect(inputField.value).toBe("faith");
  });

  test("check input field for keywords- negative scenario", () => {
    const getSearchIp = jest.fn();
    const { getByTestId } = render(<SearchInput getSearchIp={getSearchIp} />);
    const inputField = getByTestId("input-search");
    fireEvent.change(inputField, { target: { value: "faith done" } });
    expect(inputField.value).not.toBe("faith");
  });

  test("check input field for multiple keywords", () => {
    const getSearchIp = jest.fn();
    const { getByTestId } = render(<SearchInput getSearchIp={getSearchIp} />);
    const inputField = getByTestId("input-search");
    fireEvent.change(inputField, { target: { value: "faith done" } });
    expect(inputField.value).toBe("faith done");
  });
});
