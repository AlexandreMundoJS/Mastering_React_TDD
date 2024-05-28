import React from "react";
import ReactDOM from "react-dom/client";
import { Appointment } from "../src/Appointment";
import { act } from "react";
// import { act } from "react-dom/test-utils";
// act from react-dom is deprecated

describe("Appointment", () => {
  it("renders the customer first name", () => {
    const customer = {
      firstName: "Ashley",
    };
    const component = <Appointment customer={customer} />;
    const container = document.createElement("div");
    act(() => {
      ReactDOM.createRoot(container).render(component);
    });
    document.body.appendChild(container);
    expect(document.body.textContent).toContain("Ashley");
  });
});
