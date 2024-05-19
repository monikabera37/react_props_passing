import React from "react";
import ReactDom from "react-dom";
import Card from "./Card";

const App = () => {
  return (
    <div>
      <h1>My Contacts</h1>
      <Card
        title="Beyonce"
        email="b@beyonce.com}"
        tel="+123 456 789"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
      />
      <Card
        title="Jack Bauer"
        email="jack@nowhere.com"
        tel="+987 654 321"
        image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
      />
      <Card
        title="Chuck Norris"
        email="gmail@chucknorris.com"
        tel="+918 372 5749"
        image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
      />
    </div>
  );
};

export default App;
