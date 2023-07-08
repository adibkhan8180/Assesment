import React, { useState } from "react";
import ShareImage from "./ShareImage";
import { Helmet } from "react-helmet";

const App = () => {
  const [show, setShow] = useState(true);

  return (
    <>
      <div className="container">
        <Helmet>
          <meta property="og:title" content="My Image" />
          <meta
            property="og:description"
            content="This is the current image displayed on the page"
          />
          {/* <meta property="og:image" content={imageURL} /> */}
          <meta property="og:image:width" content="500" />{" "}
          {/* Set the width of the image */}
          <meta property="og:image:height" content="500" />{" "}
          {/* Set the height of the image */}
        </Helmet>
        <div className="title">
          <h1>Random Image Display and Share with React</h1>
        </div>
        <hr />
        <div className="image">
          <img
            src="https://fastly.picsum.photos/id/841/500/500.jpg?hmac=FC7lqq-csDi1TM3lvuKNRi9_sPlJCDUKRz-a5FC1Tns"
            alt="alt_img"
          />
        </div>
        <div className="btn">
          <button onClick={() => setShow(!show)}>Share</button>
          {show && <ShareImage />}
        </div>
      </div>
    </>
  );
};

export default App;
