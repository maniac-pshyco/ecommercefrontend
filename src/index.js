import React from "react";
import Routes from "./Routes";
import ReactDOM from "react-dom";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";

if(process.env.NODE_ENV === "production") {
    disableReactDevTools();
}

ReactDOM.render(<Routes />, document.getElementById("root"));
