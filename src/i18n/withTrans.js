import React, { Component } from 'react';
import i18next from './config';
import { I18nextProvider, withTranslation } from 'react-i18next';

export const withTrans =(WrappedComponent) => {
    WrappedComponent = withTranslation()(WrappedComponent);
    return <Provider />
}

const Provider = () => {
  return (
    <I18nextProvider i18n={i18next}>
      <WrappedComponent {...this.props} language={i18next.language} />
    </I18nextProvider>
  )
}