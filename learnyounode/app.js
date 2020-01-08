import * as React from 'react';
import * as ReactDOM from 'react-dom';
import TodoBox from "./views/index.jsx";

let data = JSON.parse(
  document.getElementById("initial-data").getAttribute("data-json")
);

ReactDOM.render(<TodoBox data={data} />, document.getElementById("app"));
