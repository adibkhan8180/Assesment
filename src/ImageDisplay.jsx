import React, { useEffect, useState } from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { Helmet } from "react-helmet";

const ImageDisplay = () => {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    fetchRandomImage();
  }, []);

  const fetchRandomImage = () => {
    const randomImageUrl = `https://picsum.photos/500?random=${Math.random()}`;
    setImageUrl(randomImageUrl);
    console.log(randomImageUrl);
  };

  const handleShare = () => {
    // Implement any additional logic here if needed
  };

  return (
    <div className="container">
      <Helmet>
        {/* <meta property="og:title" content="Random Image" />
        <meta property="og:description" content="Check out this random image!" />
        <meta property="og:image" content={imageUrl} /> */}
      </Helmet>
      <img src={"https://picsum.photos/"} alt="Random Image" />
      <div className="share-buttons">
        <FacebookShareButton url={"https://64a978676a675c0b9ec4cc51--random-image-reactjs.netlify.app/"}>
          <FacebookIcon size={32} round />
        </FacebookShareButton>
        <TwitterShareButton url={"https://picsum.photos/"}>
          <TwitterIcon size={32} round />
        </TwitterShareButton>
        <WhatsappShareButton url={"https://picsum.photos/"}>
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ImageDisplay;


// import React, { useEffect, useState } from 'react';
// import {
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   FacebookIcon,
//   TwitterIcon,
//   WhatsappIcon,
// } from "react-share";
// import { Helmet } from 'react-helmet';
// import img1 from "./images/image1.jpeg";
// import img2 from "./images/image2.jpeg";
// import img3 from "./images/image3.jpeg";
// import img4 from "./images/image4.jpeg";
// import img5 from "./images/image5.jpeg";


// const ImageComponent = () => {
//   const imageObject = {
//     image1: img1,
//     image2: img2,
//     image3: img3,
//     image4: img4,
//     image5: img5,
//   };

//   const [imageURL, setImageURL] = useState('');

//   // Function to select a random image URL
//   const getRandomImageURL = () => {
//     const keys = Object.keys(imageObject);
//     const randomKey = keys[Math.floor(Math.random() * keys.length)];
//     return imageObject[randomKey];
//   };

//   useEffect(() => {
//     const randomImageURL = getRandomImageURL();
//     setImageURL(randomImageURL);
//   }, []);


//   return (
//     <div>
//       <Helmet>
//         <meta property="og:title" content="My Image" />
//         <meta property="og:description" content="This is the current image displayed on the page" />
//         <meta property="og:image" content={imageURL} />
//         <meta property="og:image:width" content="500" /> {/* Set the width of the image */}
//         <meta property="og:image:height" content="500" /> {/* Set the height of the image */}
//       </Helmet>
//       <img src={imageURL} alt="Image" />
//       <div className="share-buttons">
//          <FacebookShareButton url={"https://picsum.photos/"}>
//            <FacebookIcon size={32} round />
//          </FacebookShareButton>
//          <TwitterShareButton url={"https://picsum.photos/"}>
//            <TwitterIcon size={32} round />
//          </TwitterShareButton>
//          <WhatsappShareButton url={"https://picsum.photos/"}>
//            <WhatsappIcon size={32} round />
//          </WhatsappShareButton>
//        </div>
//     </div>
//   );
// };

// export default ImageComponent;
