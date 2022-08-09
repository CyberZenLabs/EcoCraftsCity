import React, { useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import {
  DivBackBoxSC,
  DivHistorySC,
  NavLinkSC,
} from "../styled-components-css/styles.product-detail";
import {
  DivStoreLeftPanelSC,
  DivStoreRightPanelSC,
  DivStoreWrapSC,
  DivWrapLinkSC,
  H1BoldTextSC,
} from "../styled-components-css/styles.store";
import AppContext from "../context/AppContext";
import {
  ButtonContentEditSC,
  ButtonSave,
  DivContent1PageSC,
  DivContent2SC,
  DivContentDivisionSC,
  DivContentInfoButtonSC,
  DivContentRows2Page2SC,
  DivContentRows2PageSC,
  DivContentRowsSC,
  DivContentSC,
  DivFirstColumnSC,
  DivMainInfo2PageSC,
  DivMainInfoSC,
  DivPagesSC,
  DivStoreInfoStuffSC,
  EmailFieldSC,
  H1ContentDefinSC,
  H1ContentInfoSC,
  H1ContentNameMailSC,
  H1ContentNameSC,
  H1PageOptionHidesSC,
  H1PageOptionSC,
} from "../styled-components-css/styles.settingsSeller";
import VendorNavMenu from "../components/VendorNavMenu";
import { BreadCrumbs } from "../components/BreadCrumbs";

const SellerSettings = ({ product }) => {
  const { setPass, setMail } = React.useContext(AppContext);
  const openPass = () => {
    setPass(true);
  };
  const openMail = () => {
    setMail(true);
  };

  const [indexSelectedButton, getIndexButton] = useState(0);
  const onClickTab = (index) => (e) => {
    getIndexButton(index);
  };
  const listContent = [
    {
      blocks: (
        <>
          <DivMainInfoSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Телефон, email и пароль</H1ContentInfoSC>
              <ButtonContentEditSC 
            
              onClick={onClickTab(1)}>Изменить</ButtonContentEditSC>
            </DivContentInfoButtonSC>
            <DivContent1PageSC>
              <DivContentRowsSC>
                <H1ContentNameSC>Телефон</H1ContentNameSC>
                <H1ContentNameSC>Пароль</H1ContentNameSC>
                <H1ContentNameSC>Email</H1ContentNameSC>
              </DivContentRowsSC>
              <DivContentRowsSC>
                <H1ContentDefinSC>+70000000000</H1ContentDefinSC>
                <H1ContentDefinSC>*********</H1ContentDefinSC>
                <H1ContentDefinSC>lisaraklova@gmail.com</H1ContentDefinSC>
              </DivContentRowsSC>
            </DivContent1PageSC>
          </DivMainInfoSC>

          <DivMainInfoSC>
            <H1ContentInfoSC>Адрес</H1ContentInfoSC>
            <DivContent2SC>
              <DivFirstColumnSC>
                <H1ContentNameSC>Текущий адрес</H1ContentNameSC>
                <H1ContentNameMailSC>https://</H1ContentNameMailSC>
                <ButtonContentEditSC onClick={openMail}>
                  Изменить
                </ButtonContentEditSC>
              </DivFirstColumnSC>
              <H1ContentNameSC>
                Адрес можно поменять только один раз
              </H1ContentNameSC>
              <H1ContentNameSC>
                Важно: адрес магазина является логином, который используется для
                входа в аккаунт наряду с email. Логин также будет изменен.
              </H1ContentNameSC>
            </DivContent2SC>
          </DivMainInfoSC>
        </>
      ),
    },
    {
      blocks: (
        <>
          <DivMainInfo2PageSC>
            <DivContentInfoButtonSC>
              <H1ContentInfoSC>Телефон, email и пароль</H1ContentInfoSC>
            </DivContentInfoButtonSC>
            <DivContentSC>
              <DivContentDivisionSC>
                <DivContentRows2PageSC>
                  <H1ContentNameSC>Телефон</H1ContentNameSC>
                  <H1ContentNameSC>Новый телефон</H1ContentNameSC>
                  <H1ContentNameSC>Текущий пароль</H1ContentNameSC>
                </DivContentRows2PageSC>
                <DivContentRows2PageSC>
                  <H1ContentDefinSC>+70000000000</H1ContentDefinSC>
                  <H1ContentDefinSC>
                 
                    <EmailFieldSC
                      label="phone"
                      type="phone"
                      placeholder="Введите свой номер телефона"
                    />
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                  
                    <EmailFieldSC
                      label="password"
                      type="password"
                      placeholder="Введите пароль"
                    />
                  </H1ContentDefinSC>
                </DivContentRows2PageSC> <ButtonSave 
              onClick={onClickTab(0)}>Сохранить</ButtonSave>
              </DivContentDivisionSC>
             
              <DivContentDivisionSC>
                <DivContentRows2Page2SC>
                  
                  <H1ContentNameSC>Пароль</H1ContentNameSC>
                  <H1ContentNameSC>Email</H1ContentNameSC>
                  <H1ContentNameSC>Новый email</H1ContentNameSC>
                  <H1ContentNameSC>Пароль</H1ContentNameSC>
                </DivContentRows2Page2SC>
                <DivContentRows2Page2SC>
                <DivContentInfoButtonSC>
                  <H1ContentDefinSC>*********</H1ContentDefinSC><ButtonContentEditSC onClick={openPass}>Изменить</ButtonContentEditSC></DivContentInfoButtonSC>
                  <H1ContentDefinSC>lisaraklova@gmail.com</H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC
                      label="email"
                      type="email"
                      placeholder="Введите почту"
                    />
                  </H1ContentDefinSC>
                  <H1ContentDefinSC>
                    <EmailFieldSC
                      label="password"
                      type="password"
                      placeholder="Введите пароль"
                    />
                  </H1ContentDefinSC>
                </DivContentRows2Page2SC> <ButtonSave 
              onClick={onClickTab(0)}>Сохранить</ButtonSave>
              </DivContentDivisionSC>
             
            </DivContentSC>
          </DivMainInfo2PageSC>

          <DivMainInfoSC>
            <H1ContentInfoSC>Адрес</H1ContentInfoSC>
            <DivContent2SC>
              <DivFirstColumnSC>
                <H1ContentNameSC>Текущий адрес</H1ContentNameSC>
                <H1ContentNameMailSC>https://</H1ContentNameMailSC>
                <ButtonContentEditSC onClick={openMail}>
                  Изменить
                </ButtonContentEditSC>
              </DivFirstColumnSC>
              <H1ContentNameSC>
                Адрес можно поменять только один раз
              </H1ContentNameSC>
              <H1ContentNameSC>
                Важно: адрес магазина является логином, который используется для
                входа в аккаунт наряду с email. Логин также будет изменен.
              </H1ContentNameSC>
            </DivContent2SC>
          </DivMainInfoSC>
        </>
      ),
    },
    {
    blocks:(<></>),},
  ];

  
  return (
    <>
      <BreadCrumbs/>
      <DivStoreWrapSC>
        <DivStoreLeftPanelSC>
        <VendorNavMenu page={1}/>
        </DivStoreLeftPanelSC>
        <DivStoreRightPanelSC>
          <DivStoreInfoStuffSC>
            <H1BoldTextSC>Настройки</H1BoldTextSC>
          </DivStoreInfoStuffSC>
          <DivPagesSC>
            <H1PageOptionSC
              isActive={indexSelectedButton === 0}
              onClick={onClickTab(0)}
            >
              Основные
            </H1PageOptionSC>
            <H1PageOptionHidesSC
              isActive={indexSelectedButton === 2}
              onClick={onClickTab(2)}
            >
              Оповещания
            </H1PageOptionHidesSC>
          </DivPagesSC>
          {listContent[indexSelectedButton].blocks}
        </DivStoreRightPanelSC>
      </DivStoreWrapSC>
    </>
  );
};

export default SellerSettings;
