import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FacebookIcon, TwitterIcon, WhatsappIcon } from "react-share";
import { Helmet } from "react-helmet";

const RandomImage = () => {
  const [imageURL, setImageURL] = useState("");

  // API request to get a random image
  useEffect(() => {
    const getRandomImage = async () => {
      try {
        const response = await axios.get(
          "https://api.unsplash.com/photos/random",
          {
            params: {
              client_id: "fgVfaSDyuOKrbg-Jbcwbw9Ppn208V8y99hcMuS1Vlz0",
            },
          }
        );
        const image = response.data.urls.regular;
        setImageURL(image);
      } catch (error) {
        console.log(error);
      }
    };

    getRandomImage();
  }, []);

  // Function to handle sharing the image
  //   const handleShare = (e) => {
  //     e.preventDefault();
  //     const { social } = e.currentTarget.dataset;

  //     let url = "";
  //     switch (social) {
  //       case "facebook":
  //         url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
  //           imageURL
  //         )}`;
  //         break;
  //       case "twitter":
  //         url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
  //           imageURL
  //         )}`;
  //         break;
  //       case "whatsapp":
  //         url = `whatsapp://send?text=${encodeURIComponent(imageURL)}`;
  //         break;
  //       default:
  //         break;
  //     }

  //     if (social === "facebook") {
  //       window.open(url, "_blank");
  //     } else {
  //       console.log(`Sharing on ${social} is not supported in this example.`);
  //     }
  //   };

  return (
    <div>
      {imageURL && (
        <div>
          <Helmet>
            <meta property="og:title" content="Random Image" />
            <meta
              property="og:description"
              content="Check out this random image!"
            />
            <meta property="og:image" content={imageURL} />
            {/* <meta property="og:image" content="." /> */}
            <meta property="og:image:width" content="500" />
            <meta property="og:url" content={imageURL} />

            {/* For Twitter */}

            <meta property="twitter:title" content="Random Image" />
            <meta property="twitter:description" content="Random Image" />
            <meta property="twitter:image" content={imageURL} />
            <meta property="twitter:card" content="Random" />
          </Helmet>
          <img src={imageURL} alt="Random" />
          <div>
            <FacebookShareButton data-social="facebook" url={imageURL}>
              <FacebookIcon size={32} round />
              Share on Facebook
            </FacebookShareButton>
            <TwitterShareButton data-social="twitter" url={imageURL}>
              <TwitterIcon size={32} round />
              Share on Twitter
            </TwitterShareButton>
            <WhatsappShareButton data-social="whatsapp" url={imageURL}>
              <WhatsappIcon size={32} round />
              Share on WhatsApp
            </WhatsappShareButton>
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomImage;
