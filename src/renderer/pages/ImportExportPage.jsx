import { useTranslation } from 'react-i18next';
import React, { useContext, useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GlobalContext } from 'context/globalContext';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import Header from 'components/organisms/Header/Header';

import ImportExport from 'components/organisms/Wrappers/ImportExport';

function ImportExportPage() {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Header title={t('ImportExportPage.title')} />
      <p className="lead">{t('ImportExportPage.description')}</p>

      <ImportExport />
    </Wrapper>
  );
}

export default ImportExportPage;
