import React from "react";
import MyFirstComponent from "./FullName";
import MySecondcomponent from "./Adress";
import MyThirsdcomponent from "./Photo";

const App = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "red", fontSize: 60 }}>
          <MyFirstComponent />
        </h1>

        <MySecondcomponent />
        <MyThirsdcomponent />
      </div>
    </div>
  );
};
export default App;
