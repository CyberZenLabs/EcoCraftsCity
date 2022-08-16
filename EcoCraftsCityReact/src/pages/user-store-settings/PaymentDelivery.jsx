import React from 'react';
import { BreadCrumbs } from '../../components/BreadCrumbs';
import SettingsShopCatalog from '../../components/components-user-store-settings/SettingsShopCatalog';
import { 
  DivMainBlockSC,
   DivBorderBlockSC,
   DivBannerShopContainerSC,
   DivGridCatalogShopSC,
   DivPageContentSC,
   SpanTitlePageSC
  } from "../../styled-components-css/styles-user-store-settings/styles.store-user";

import {
  DivBlocksContainer,
  DivBoxCatalogShopSC,
  DivDeliveryColumns,
  DivDeliveryMethods,
  DivImgDotSC,
  DivInnerWrap,
  DivLeftBlock,
  DivPaymentMethods,
  DivReturnExchange,
  DivRightBlock,
  H1TextTitle,
  PTextBlock,
  PTextDotBlock,
} from '../../styled-components-css/styled.payment-delivery-customer';
import { DivBoxNewProductsBigST } from '../../styled-components-css/styles-seller-store-settings/styles.StoreNewProduct';
import { DivBoxCatalog, DivBoxContentSC, SpanTitleCatalog, WrapShopContainerSC } from '../../styled-components-css/styles-user-store-settings/styles.StoreNoAuth';



const PaymentDelivery = () => {
  return (
    <DivMainBlockSC>
      <BreadCrumbs />

      <DivBorderBlockSC>
        <DivBannerShopContainerSC />

        <DivGridCatalogShopSC>
          <SettingsShopCatalog page={3} />

          <DivPageContentSC>
            <SpanTitlePageSC>Delivery and payment</SpanTitlePageSC>

            <DivBlocksContainer>
              <DivPaymentMethods>
                <DivInnerWrap>
                  <H1TextTitle>Способы оплаты</H1TextTitle>
                  <PTextDotBlock>
                    <DivImgDotSC />
                    With a card on the site
                  </PTextDotBlock>
                </DivInnerWrap>
              </DivPaymentMethods>
              <DivDeliveryMethods>
                <DivInnerWrap>
                  <H1TextTitle>Способы доставки</H1TextTitle>
                  <DivDeliveryColumns>
                    <DivLeftBlock>
                      <PTextDotBlock>
                        <DivImgDotSC />
                        Russian Post 
                      </PTextDotBlock>
                      <PTextDotBlock>
                        <DivImgDotSC />
                        CDEK
                      </PTextDotBlock>
                    </DivLeftBlock>
                    <DivRightBlock>
                      <PTextBlock>от 180руб</PTextBlock>
                      <PTextBlock>от 300руб</PTextBlock>
                    </DivRightBlock>
                  </DivDeliveryColumns>
                </DivInnerWrap>
              </DivDeliveryMethods>
              <DivReturnExchange>
                <DivInnerWrap>
                  <H1TextTitle>Условия возврата и обмена</H1TextTitle>
                  <PTextBlock>Предусмотрен если брак по нашей вине</PTextBlock>
                </DivInnerWrap>
              </DivReturnExchange>
            </DivBlocksContainer>
            
          </DivPageContentSC>
        </DivGridCatalogShopSC>
      </DivBorderBlockSC>
    </DivMainBlockSC>
  );
};

export default PaymentDelivery;
