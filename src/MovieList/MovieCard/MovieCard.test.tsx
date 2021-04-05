import { mount } from "enzyme";
import MovieCard from "./index";
import { Context } from "../../Store/Store";

const contextValues = {
  movieList: [{ title: "filme" }, { title: "outrofilme" }],
};

describe("MovieCard", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <Context.Provider value={[contextValues, ""]}>
        <MovieCard />
      </Context.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
