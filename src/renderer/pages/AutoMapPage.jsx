import { useTranslation } from 'react-i18next';
import React, { useEffect, useState, useContext, useRef } from 'react';
import { GlobalContext } from 'context/globalContext';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

import AutoMap from 'components/organisms/Wrappers/AutoMap';

const AutoMapPage = () => {
  const { t, i18n } = useTranslation();
  const { state, setState } = useContext(GlobalContext);
  const { automap } = state;
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
    dom: undefined,
  });
  const { disabledNext, disabledBack, data, dom } = statePage;
  const autoMapSet = (autoMapStatus) => {
    setState({
      ...state,
      automap: autoMapStatus,
    });
  };
  //Enabling button when changing the global state only if we have a device selected
  useEffect(() => {
    if (automap != '') {
      setStatePage({ ...statePage, disabledNext: false });
    }
  }, [state]);

  return (
    <Wrapper>
      <Header title={t('AutoMapPage.title')} />
      <p className="lead">{t('AutoMapPage.description')}</p>
      <AutoMap automap={automap} onClick={autoMapSet} />
      <Footer
        next="frontend-selector"
        disabledNext={disabledNext}
        disabledBack={disabledBack}
      />
    </Wrapper>
  );
};

export default AutoMapPage;
