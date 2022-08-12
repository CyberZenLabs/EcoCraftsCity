
import React, { useState, useEffect } from "react";
import {
  DivAvatarDateRatingInfoSC,
  DivDateRatingInfoSC,
  DivDateReviewCreateSC,
  DivReviewShowWrapSC,
  DivStarRaitingSC,
  DivUserReviewSC,
  ImgUserAvatarSC,
  LinkOnUserSC,
  TextBoxReviewSC,
  ElipsIconSC,
  SpanDataTextSC,
  DivStarRaitingAdaptiveSC
} from "../styled-components-css/styles.ShowItemCarousel";
import StarRating from "./StarRating";

const ShowItemCarousel = () => {
  const [widthWindow, setWidthWindow] = useState(
    document.documentElement.clientWidth
  );

  return (
    <>
      <DivReviewShowWrapSC>
        
          <LinkOnUserSC to="/">
            <ImgUserAvatarSC src={"/default-images/plant.jpg"} />
          </LinkOnUserSC>

          <DivDateRatingInfoSC>
            <DivDateReviewCreateSC>
              <LinkOnUserSC to="/">
                <TextBoxReviewSC>
                  Название магазина
                </TextBoxReviewSC>
              </LinkOnUserSC>
              <SpanDataTextSC>
                ●
              </SpanDataTextSC>
              <SpanDataTextSC>
                дд.мм.гг
              </SpanDataTextSC>
            </DivDateReviewCreateSC>
            <DivStarRaitingSC>
              <StarRating value={5} fixed={true} size={20} />
            </DivStarRaitingSC>
            <DivStarRaitingAdaptiveSC>
              <StarRating value={5} fixed={true} size={12} />
            </DivStarRaitingAdaptiveSC>
            <DivUserReviewSC>
          <TextBoxReviewSC>
            Текст отзыва
          </TextBoxReviewSC>
        </DivUserReviewSC>
          </DivDateRatingInfoSC>

          

        
      </DivReviewShowWrapSC>
    </>
  );
};

export default ShowItemCarousel;