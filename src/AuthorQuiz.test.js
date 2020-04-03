import React from "react";
import ReactDom from "react-dom";
import AuthorQuiz from "./AuthorQuiz";
import Enzyme, { mount, shallow, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

const state = {
  turnData: {
    author: {
      name: "Charles Dickens",
      imageUrl: "images/authors/charlesdickens.jpg",
      imageSource: "Wikimedia Commons",
      books: ["David Copperfield", "A Tale of Two Cities"]
    },
    books: ["David Copperfield", "A Tale of Two Cities"]
  },
  highlight: "none"
};

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<AuthorQuiz {...state} onAnsrSelected={() => {}} />, div);
  });

  describe("when no answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(<AuthorQuiz {...state} onAnsrSelected={() => {}} />);
    });

    it("it should have no background", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        ""
      );
    });
  });

  describe("when the wrong answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz
          {...Object.assign({}, state, { highlight: "wrong" })}
          onAnsrSelected={() => {}}
        />
      );
    });

    it("it should have a red background", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "red"
      );
    });
  });

  describe("when the correct answer has been selected", () => {
    let wrapper;

    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz
          {...Object.assign({}, state, { highlight: "correct" })}
          onAnsrSelected={() => {}}
        />
      );
    });

    it("it should have a green background", () => {
      expect(wrapper.find("div.row.turn").props().style.backgroundColor).toBe(
        "green"
      );
    });
  });

  describe("when the correct answer has been selected", () => {
    let wrapper;
    let onAnsrSelected = jest.fn();

    beforeAll(() => {
      wrapper = mount(
        <AuthorQuiz {...state} onAnsrSelected={onAnsrSelected} />
      );
      wrapper
        .find(".answer")
        .first()
        .simulate("click");
    });

    it("onAnsrSelected should be called", () => {
      expect(onAnsrSelected).toHaveBeenCalled();
    });

    it('should receive "David Copperfield"', () => {
      expect(onAnsrSelected).toHaveBeenCalledWith("David Copperfield");
    });
  });
});
