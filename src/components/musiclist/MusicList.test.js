import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import "@testing-library/jest-dom/extend-expect";
import MusicList from "./MusicList";

describe("MusicList", () => {
  const song = {
    title: "Growing in Faith, Growing in Christ (Version 2)",
    supplement_information: ["(Duration: 2 min 49 sec)"],
    description: ["Words <em>and</em> Music by: Jan Bentham"],
    links: [
      {
        type: "button",
        placement: "inside_card",
        functionality: "modal_popup_audio",
        icon_url: "images/play.png",
        icon_alt_text: "",
        text: "Play Vocal",
        target_type: "code_snippet",
        file_url:
          "../spp_embed/index.php?sppid=ca_sch_aud_bishops_gifgic_6_001",
      },
      {
        type: "button",
        placement: "inside_card",
        functionality: "modal_popup_audio",
        icon_url: "images/play.png",
        icon_alt_text: "",
        text: "Play Instrumental",
        target_type: "code_snippet",
        file_url:
          "../spp_embed/index.php?sppid=ca_sch_aud_bishops_gifgic_6_002",
      },
      {
        type: "link",
        placement: "inside_card_modal",
        functionality: "new_window",
        icon_url: "",
        icon_alt_text: "",
        text: "Lyrics and Score (PDF)",
        target_type: "file",
        file_url: "../music/lyrics_score/re6_01_lysc_grow_faith_v2.pdf",
      },
    ],
  };

  const filterChkArr = [
    { flag: false, value: "all", text: "All" },
    { flag: true, value: "title", text: "Title" },
    { flag: false, value: "description", text: "Description" },
    { flag: false, value: "keywords", text: "Keywords" },
  ];

  afterEach(() => {
    cleanup();
  });

  test("renders component", () => {
    const MusicListComponent = renderer
      .create(
        <MusicList
          {...song}
          searchStrArr={["faith"]}
          filterChkArr={filterChkArr}
        />
      )
      .toJSON();
    expect(MusicListComponent).toMatchSnapshot();
  });

  test("check data loading", () => {
    const { getByTestId } = render(
      <MusicList
        {...song}
        searchStrArr={["faith"]}
        filterChkArr={filterChkArr}
      />
    );
    expect(getByTestId("title")).toHaveTextContent(
      "Growing in Faith, Growing in Christ (Version 2)"
    );
    expect(getByTestId("information")).toHaveTextContent(
      "(Duration: 2 min 49 sec)"
    );
    expect(getByTestId("description")).toHaveTextContent(
      "Words and Music by: Jan Bentham"
    );
  });

  test("check for tags parsing in the description", () => {
    const { getByTestId } = render(
      <MusicList
        {...song}
        searchStrArr={["faith"]}
        filterChkArr={filterChkArr}
      />
    );

    expect(getByTestId("description")).not.toHaveTextContent(
      '"Words <em>and</em> Music by: Jan Bentham"'
    );
  });

  test("check for searched string", () => {
    const { getByTestId } = render(
      <MusicList
        {...song}
        searchStrArr={["Faith"]}
        filterChkArr={filterChkArr}
      />
    );

    expect(getByTestId("title")).toHaveTextContent("Faith");
  });
});
