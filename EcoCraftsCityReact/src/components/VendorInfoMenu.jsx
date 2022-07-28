import { Margin } from '@mui/icons-material';
import React from 'react';
import SettingsShop from "../components/SettingsShop";
import{
    
  GreenST,
  
  SpanTextTitleSC,
  
  DivInfoVendorBoxSC,
  DivButtonChangrInformSC,
  OlifnoSC,
  LiInfoSC,
  DivButtonChangrInformBottomSC,
 
 
    
  } from "../styled-components-css/styles.VendorInfoMenu";
const VendorInfoMenu = () =>{
    return (
        
                
                 <DivInfoVendorBoxSC>
                 <OlifnoSC>
                <LiInfoSC> <img src="/default-images/elips.svg" class="marginRight" />  Адрес</LiInfoSC>
                <LiInfoSC> <img src="/default-images/elips.svg"class="marginRight" /> Время существования магазина</LiInfoSC>
                <LiInfoSC> <img src="/default-images/elips.svg" class="marginRight"/> Магазин: е-mail</LiInfoSC>
                <LiInfoSC> <img src="/default-images/elips.svg" class="marginRight"/> Товары:<GreenST>Готовые(1),На заказ(0),Все(1)</GreenST></LiInfoSC>
               
                 </OlifnoSC>
                 <DivButtonChangrInformBottomSC>Изменить информацию</DivButtonChangrInformBottomSC>

                        </DivInfoVendorBoxSC>
                 

        

    )
    
}
export default VendorInfoMenu;