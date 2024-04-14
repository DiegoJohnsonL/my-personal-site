import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="bg-[#f6f7fb] rounded-[64px] flex flex-wrap w-[500px] md:w-[800px]">
      <div className="max-w-full p-16 pb-0">
        <div className="mb-10 font-bold">
          Diego Johnson <br /> Fullstack, Software engineer bachelor / Lima Peru
        </div>
        <div className="mb-10 font-bold">Contact me via</div>

        <div className="flex mb-10">
          <a target="_blank" href="https://github.com/DiegoJohnsonL">
            <img
              className="Main-module--social--6ae52"
              src="https://img.shields.io/badge/github-%2324292f.svg?&amp;style=for-the-badge&amp;logo=github&amp;logoColor=white"
              alt="github"
            />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/diegojohnsonl">
            <img
              className="Main-module--social--6ae52"
              src="https://img.shields.io/badge/linkedin-%230077B5.svg?&amp;style=for-the-badge&amp;logo=linkedin&amp;logoColor=white"
              alt="linkedin"
            />
          </a>
        </div>
        <div className="flex flex-col mb-10">
          <a href="">
            <button className="button button-border">Resume - Espanol</button>
          </a>
          <br />
          <br />
          <a href="">
            <button className="button button-border">Resume - English</button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
