import React from "react";

function Hello(props) {
  const things = ["Write code ", "hang with Mic ", "Take a nap "];
  const listOfthings = things.map(thing => <li>{things}</li>);
  return (
    <div>
      <h1>What it do {props.human}</h1>
      <h2>
        today is{" "}
        {new Date().getDay() === 1
          ? "A monday"
          : "The day you do something productive"}
      </h2>
      <br />
      <h3>today Im going to </h3>
      <ul>{listOfthings}</ul>
    </div>
  );
}
export default Hello;