import React from 'react';
import {
    DivBoxCheckSC,
    DivBoxListSC,
    DivBoxRowProductSC, DivBoxTitleSC, DividerSC, DivImageSC,
    DivItemListSC, DivPriceSC,
    H2TitleProductList, SpanTitleSC
} from "../../styled-components-css/styles.cart";

const BoxProductList = (props) => {
    const {
        arrayProd
    } = props;



    return (
        <DivBoxRowProductSC>
            <div>
                <H2TitleProductList>Корзина</H2TitleProductList>
            </div>
            <DivBoxCheckSC>
                <input id={'all'} type="checkbox"/>
                <label htmlFor="all"> Выбрать все</label>
            </DivBoxCheckSC>
            <DividerSC></DividerSC>
            <DivBoxListSC>
                {
                    arrayProd.map((item,i) => {
                        return(<DivItemListSC>
                            <input id={'item'} type="checkbox"/>
                            <DivImageSC src={'https://n1s1.hsmedia.ru/e2/9c/6b/e29c6b4349a2b5041217444a950379ec/728x546_1_1dc8eb41ed097b4e4d17ef9e4f055113@1200x900_0xac120003_6237097351644515659.jpeg'}>
                            </DivImageSC>
                            <DivBoxTitleSC>
                                <SpanTitleSC>
                                    {item}
                                </SpanTitleSC>
                                <span>
                            описание товара
                        </span>
                            </DivBoxTitleSC>
                            <div></div>
                            <DivPriceSC>
                                5 000 &#8381;
                            </DivPriceSC>
                        </DivItemListSC>)
                    })
                }


            </DivBoxListSC>
        </DivBoxRowProductSC>
    );
}

export default BoxProductList;