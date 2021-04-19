import { DndContext } from "@dnd-kit/core";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(
  <DndContext>
    <App />
  </DndContext>,
  document.getElementById("root")
);
