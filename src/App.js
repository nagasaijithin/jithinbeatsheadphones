import React from "react";
import "./App.scss";
//All components
import { Home } from "./components/home.components";
import Contentwapper from "./components/contentwapper.component";
import { Itsoundsbigcontent, Itsimg } from "./components/itsoundsbig.component";
import { Fimg, Fc } from "./components/features.component";
import { Tadcontent, Tadimg } from "./components/tadesigns.component";
import Footer from "./components/footer.component";
import Mynav from "./components/mynav.component";

import Beastapp from "./components/beastapp.component";
function App() {
  return (
    <div className="App">
      <Mynav />
      <Home />
      <Contentwapper>
        <Fc />
        <Fimg />
      </Contentwapper>
      <Contentwapper>
        <Itsimg />
        <Itsoundsbigcontent />
      </Contentwapper>
      <Contentwapper>
        <Tadcontent />
        <Tadimg />
      </Contentwapper>
      <Beastapp />
      <Footer />
    </div>
  );
}

export default App;
