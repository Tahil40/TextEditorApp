import React, { useState } from "react";

export default function Form(props) {
  // creating useState for textarea..........
  const [text, set_text] = useState("Enter The Text; ");

  //creating useState for setting textarea colors...........
  const [textarea_color, set_textarea_color] = useState({
    color: "black",
    backgroundColor: "white",
  });

  // creating useState for setting text of the button.......
  const [button_text, set_button_text] = useState("Enable Dark Mode");

  // creating function for to convert text to upper case........
  const button_upper_click = () => {
    let user_text_upper = text.toUpperCase();
    set_text(user_text_upper);
    props.show_alert("Text Successfully Converted to upper case...", "Success");
  };

  // creating function to convert text to lower case......
  const button_lower_click = () => {
    let user_text_lower = text.toLowerCase();
    set_text(user_text_lower);
    props.show_alert("Text Successfully Converted to Lower case...", "Success");
  };

  // creating function to clear the textarea..........
  const button_clear_click = () => {
    let user_text_clear = "";
    set_text(user_text_clear);
    props.show_alert("Text Successfully Deleted...", "Success");
  };

  // creating function to change text for text area........
  const HandleOnChange = function (event) {
    set_text(event.target.value);
  };

  // creating function to enable the dark mode for website.....
  const button_dark_click = (event) => {
    console.log("dark mode");
    if (
      textarea_color.color == "black" &&
      textarea_color.backgroundColor == "white"
    ) {
      set_textarea_color({
        color: "black",
        backgroundColor: "grey",
        border: "1px solid black",
      });
      set_button_text("Enable Light Mode");
    } else {
      button_dark_click.value = "Enable Dark Mode";
      set_textarea_color({
        color: "black",
        backgroundColor: "white",
      });
      set_button_text("Enable Dark Mode");
    }
  };

  // creating function to copy text from textarea...........
  const button_copy_click = () => {
    let copy_variable = document.getElementById("textarea_identity");
    copy_variable.select();
    navigator.clipboard.writeText(copy_variable.value);
    props.show_alert("Text Successfully Copied...", "Success");
  };

  // create function to remove extra spaces from textarea...........
  const button_remove_click = () => {
    let new_text = text.split(/[ ]+/);
    set_text(new_text.join(" "));
    props.show_alert("Extra Spaces Successfully Removed....", "Success");
  };

  return (
    <>
      <div className="container my-4">
        {/* Adding text-area.... */}
        <div className="mb-3">
          <textarea
            className="form-control"
            id="textarea_identity"
            rows="8"
            value={text}
            onChange={HandleOnChange}
            style={textarea_color}
          ></textarea>
        </div>
      </div>

      <div className="form-button-container">
        {/* Adding Buttons........ */}
        <button
          type="button"
          className="btn btn-primary px-4"
          onClick={button_upper_click}
          disabled={text.length === 0}
        >
          UpperCase
        </button>

        <button
          type="button"
          className="btn btn-secondary px-4"
          onClick={button_lower_click}
          disabled={text.length === 0}
        >
          LowerCase
        </button>

        <button
          type="button"
          className="btn btn-danger px-4"
          onClick={button_clear_click}
          disabled={text.length === 0}
        >
          Clear Text
        </button>

        <button
          type="button"
          className="btn btn-warning px-4"
          onClick={button_copy_click}
          disabled={text.length === 0}
        >
          Copy
        </button>

        <button
          type="button"
          className="btn btn-info px-4"
          onClick={button_remove_click}
          disabled={text.length === 0}
        >
          Remove Extra Spaces
        </button>
      </div>

      <hr className="my-4" />
      <div className="form-container">
        <h3>Your Text Summary</h3>
        <p>
          No of word;{" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length != 0;
            }).length
          }{" "}
          from {text.length}
        </p>
        <p>
          Time Taken;{" "}
          {0.5 *
            text.split(" ").filter((element) => {
              return element.length != 0;
            }).length}
        </p>
        <h5>Preview</h5>
      </div>
      <p className="form-preview-text">
        {text.length > 0 ? text : "Enter Something to Preview Here"}
      </p>
    </>
  );
}
