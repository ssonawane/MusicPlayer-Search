import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import SearchBody from "./SearchBody";

describe("Search Body", () => {
  const mock = new MockAdapter(axios);

  beforeEach(() => {
    mock.onGet("/data.json").reply(200, {
      users: [
        {
          title: "All Who Enter Here are strong",
          supplement_information: ["(Duration: 3 min 26 sec)"],
          description: [
            "Text and Music by John Angotti & <strong>Daniel</strong> Houze",
          ],
          links: [
            {
              type: "button",
              text: "Play Vocal",
              target_type: "code_snippet",
              file_url:
                "../spp_embed/index.php?sppid=ca_sch_aud_bishops_gifgic_6_037",
            },
            {
              type: "link",
              text: "Lyrics (PDF)",
              target_type: "file",
              file_url: "../music/lyrics_score/re6_22_lyr_all_who_enter.pdf",
            },
          ],
        },
      ],
    });
  });

  const drpDwnFilter = [
    { flag: false, value: "all", text: "All" },
    { flag: true, value: "title", text: "Title" },
    { flag: false, value: "description", text: "Description" },
    { flag: false, value: "keywords", text: "Keywords" },
  ];

  afterEach(() => {
    cleanup();
    mock.reset();
  });

  test("renders component", () => {
    const SearchBodyComponent = renderer.create(<SearchBody />).toJSON();
    expect(SearchBodyComponent).toMatchSnapshot();
  });
});
