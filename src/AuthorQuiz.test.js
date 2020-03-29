import React from "react";
import ReactDom from "react-dom";
import AuthorQuiz from "./AuthorQuiz";

const authors = [
  {
    name: "Mark Twain",
    imageUrl: "images/authors/marktwain.jpg",
    imageSource: "Wikimedia Commons",
    books: [
      "The adventures of Huckleberry Finn",
      "life on the Mississippi",
      "Roughing It"
    ]
  }
];

const state = {
  turnData: {
    author: authors[0],
    books: authors[0].books
  }
};

describe("Author Quiz", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDom.render(<AuthorQuiz {...state} />, div);
  });
});
