import React, { useState } from 'react';
import './App.css';
import Genders from './components/Genders';
import cancel from './assets/img/Cancel.svg';
import { useTranslation } from 'react-i18next';
import i18n from './plugins/I18n';
import SelectLanguge from './components/SelectLanguge';


function App() {
  const { t } = useTranslation();
  const [close, setClose] = useState(false)
  const handleCloseModal = () => {
    setClose(!close)
  }
  return (
    <div className="app">
      <div className="wrapper-btn">
        <SelectLanguge/>
        <button className="btn" onClick={handleCloseModal}>{close ? 'Close modal' : 'Show modal'}</button>
      </div>
      <div className={!close ? "modal-close" : "modal"}>
        <div className="header">
          <p className="header-title">{i18n.t("header.sizeGuide")}</p>
          <img className="header-close" src={cancel} alt="close"
            onClick={handleCloseModal}
          />
        </div>
        <Genders />
        {/* <SizeGuide/> */}
      </div>
    </div>
  );
}

export default App;
