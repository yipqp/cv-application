import { useState } from "react";
import "./App.css";
import Section from "./components/section";

function App() {
  const personalDetails = [
    { title: "first name", inputType: "text", className: "first" },
    { title: "last name", inputType: "text", className: "last" },
    { title: "email", inputType: "email" },
    { title: "phone #", inputType: "tel" },
  ];

  return (
    <>
      <Section
        title="personal details"
        formGroups={personalDetails}
        className="personal-details-form"
      ></Section>
    </>
  );
}

export default App;
