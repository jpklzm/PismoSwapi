import { mount } from "enzyme";
import MovieDetails from "./index";
import { Context } from "../Store/Store";

const contextValues = {
  movie: { title: "filme", producer: "produtor", director: "diretor" },
};

describe("MovieDetails", () => {
  it("renders correctly", () => {
    const wrapper = mount(
      <Context.Provider value={[contextValues, ""]}>
        <MovieDetails />
      </Context.Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
