import React from 'react';
import {
  DivMapBindingBoxSC,
  DivTextSC,
  DivButtonsSC,
  DivContentMapBindingSC,
  DivBoxNumCardSC,
  DivBoxMMSC,
  DivBoxGGSC,
  DivBoxCVVCVCSC,
  DivSlashSC,
  DivImgBoxSC,
  DivContainerRowsMB,
  DivRowBoxSC,
  DivColumnsBoxSC,
  DivColumnMMBoxSC,
  DivColumnSlashBoxSC,
  DivColumnGGBoxSC,
  DivColumnCVVCVCBoxSC,
} from '../styled-components-css/styles.map-binding';
import TextField from '../components/TextField';
import { ButtonCustomSC } from '../styled-components-css/styles.custom-button';
import { ButtonCustomWhiteSC } from '../styled-components-css/styles.custom-button-white';
import { Formik, Form } from 'formik';

const MapBinding = () => {
  const startingValues = { text: '' };
  return (
    <DivMapBindingBoxSC>
      <DivContentMapBindingSC>
        <DivTextSC>Привязка карты</DivTextSC>
        <Formik initialValues={startingValues}>
          {(formik) => (
            <Form>
              <DivImgBoxSC>
                <DivContainerRowsMB>
                  <DivRowBoxSC>
                    <DivBoxNumCardSC>
                      <TextField
                        label="cardNumber"
                        type="text"
                        name="cardNumber"
                        fullSize={false}
                        placeholder={'Номер карты'}
                      />
                    </DivBoxNumCardSC>
                  </DivRowBoxSC>
                  <DivColumnsBoxSC>
                    <DivColumnMMBoxSC>
                      <DivBoxMMSC>
                        <TextField label="month" type="text" name="month" fullSize={false} placeholder={'ММ'} />
                      </DivBoxMMSC>
                    </DivColumnMMBoxSC>
                    <DivColumnSlashBoxSC>
                      <DivSlashSC>/</DivSlashSC>
                    </DivColumnSlashBoxSC>
                    <DivColumnGGBoxSC>
                      <DivBoxGGSC>
                        <TextField label="year" type="text" name="year" fullSize={false} placeholder={'ГГ'} />
                      </DivBoxGGSC>
                    </DivColumnGGBoxSC>
                    <DivColumnCVVCVCBoxSC>
                      <DivBoxCVVCVCSC>
                        <TextField label="text" type="text" name="text" fullSize={false} placeholder={'CVV/CVC'} />
                      </DivBoxCVVCVCSC>
                    </DivColumnCVVCVCBoxSC>
                  </DivColumnsBoxSC>
                </DivContainerRowsMB>
              </DivImgBoxSC>

              <DivButtonsSC>
                <ButtonCustomWhiteSC width={'100%'} padding={'18px 32px'} type="submit">
                  Отмена
                </ButtonCustomWhiteSC>

                <ButtonCustomSC
                  disabled={!formik.dirty || !formik.isValid}
                  statusOpasity={!formik.dirty || !formik.isValid}
                  width={'100%'}
                  padding={'18px 32px'}
                  type="submit"
                >
                  Привязать
                </ButtonCustomSC>
              </DivButtonsSC>
            </Form>
          )}
        </Formik>
      </DivContentMapBindingSC>
    </DivMapBindingBoxSC>
  );
};

export default MapBinding;
