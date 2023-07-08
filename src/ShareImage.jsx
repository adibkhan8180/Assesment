import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";

const ShareImage = () => {
  const shareUrl = "https://picsum.photos/";
  return (
    <div className="share">
    <h2>Share this image,</h2>
      <div className="icons">
        <FacebookShareButton className="icon" url={shareUrl} quote={"title"} hashtag={"#image"}>
          <FacebookIcon size={40} />
        </FacebookShareButton>
        <TwitterShareButton className="icon" url={shareUrl} quote={"title"} hashtag={"#image"}>
          <TwitterIcon size={40} />
        </TwitterShareButton>
        <WhatsappShareButton className="icon" url={shareUrl} quote={"title"} hashtag={"#image"}>
          <WhatsappIcon size={40} />
        </WhatsappShareButton>
      </div>
    </div>
  );
};

export default ShareImage;
