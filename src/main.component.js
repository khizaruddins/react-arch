import { BrowserRouter as Router } from "react-router-dom";
import LayoutsModule from "./layouts/layouts.module";

function MainComponent() {
  return (
    <Router>
      <LayoutsModule></LayoutsModule>
    </Router>
  );
}

export default MainComponent;
