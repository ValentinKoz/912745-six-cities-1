import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const init = () => {
  const data = {
    names: [`Beautiful & luxurious apartment at great location`, `Canal View Prinsengracht`, `Nice, cozy, warm big bed apartment`, `Wood and stone place`],
    onClick() { },
  };

  ReactDOM.render(
      <App
        names={data.names}
        onClick={data.onClick}
      />,
      document.getElementById(`root`)
  );
};

init();
