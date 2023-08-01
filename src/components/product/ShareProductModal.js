import { Fragment } from "react";
import {FacebookShareButton,
  FacebookIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  TwitterShareButton,
  TwitterIcon,
  LineShareButton,
  LineIcon} from "react-share";
function ShareProductModal({ productUrl, productName }) {
  const currentUrl = productUrl;
  return (
    <div className="share-content" style={{width:"100px", height:"100px", backgroundColor:"white"}}>
      {/* { productUrl}{ productName } */}
      <FacebookShareButton style={{ marginRight: "20px" }} url={currentUrl}>
        <FacebookIcon size={48} round={true} borderRadius={24}></FacebookIcon>
      </FacebookShareButton>
      <button type="button" id="shareKt" class="btn_comm"></button> INSTAGRAM
      <button type="button" id="shareKs" class="btn_comm"></button> GOOGLE+
      <button type="button" id="shareKs" class="btn_comm"></button> APPLE
    </div>
  );
}

export default ShareProductModal;
