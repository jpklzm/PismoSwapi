import { mount } from "enzyme";
import MovieList from "./index";
import { Context } from "../Store/Store";

const contextValues = {
  movieList: [{ title: "filme" }, { title: "outrofilme" }],
};

describe("MovieList", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <Context.Provider value={[contextValues, ""]}>
        <MovieList />
      </Context.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
