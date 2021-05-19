import {
  render,
  screen,
  findByTestId,
  fireEvent,
} from "@testing-library/react";
import renderer from "react-test-renderer";
import Checkbox from "./CheckBox";

describe("Check box", () => {
  test("check snapshot", () => {
    const AppComponent = renderer.create(<Checkbox />).toJSON();
    expect(AppComponent).toMatchSnapshot();
  });

  test("check checkbox list for Title", () => {
    const changeHandler = jest.fn();
    const item = {
      flag: true,
      value: "title",
      text: "Title",
    };
    const { getByTestId } = render(
      <Checkbox {...item} changeHandler={changeHandler} />
    );

    expect(getByTestId("Title")).toHaveTextContent("Title");
  });

  test("check checkbox list for All", () => {
    const changeHandler = jest.fn();
    const item = {
      flag: true,
      value: "all",
      text: "All",
    };
    const { getByTestId } = render(
      <Checkbox {...item} changeHandler={changeHandler} />
    );

    expect(getByTestId("All")).toHaveTextContent("All");
  });

  test("check checkbox list for Keywords", () => {
    const changeHandler = jest.fn();
    const item = {
      flag: true,
      value: "keywords",
      text: "Keywords",
    };
    const { getByTestId } = render(
      <Checkbox {...item} changeHandler={changeHandler} />
    );

    expect(getByTestId("Keywords")).toHaveTextContent("Keywords");
  });

  test("check checkbox list for Description", () => {
    const changeHandler = jest.fn();
    const item = {
      flag: true,
      value: "description",
      text: "Description",
    };
    const { getByTestId } = render(
      <Checkbox {...item} changeHandler={changeHandler} />
    );

    expect(getByTestId("Description")).toHaveTextContent("Description");
  });

  test("check checkbox list events", async () => {
    const changeHandler = jest.fn();
    const item = {
      flag: true,
      value: "title",
      text: "Title",
    };
    const { getByTestId, findByTestId } = render(
      <Checkbox {...item} changeHandler={changeHandler} />
    );
    const chkEvent = await findByTestId("title");
    fireEvent.click(chkEvent);

    expect(getByTestId("title")).toBeChecked();
  });

  test("check checkbox list events for All", async () => {
    const changeHandler = jest.fn();
    const item = {
      flag: true,
      value: "all",
      text: "All",
    };
    const { getByTestId, findByTestId } = render(
      <Checkbox {...item} changeHandler={changeHandler} />
    );
    const chkEvent = await findByTestId("all");
    fireEvent.click(chkEvent);

    expect(getByTestId("all")).toBeChecked();
  });
});
