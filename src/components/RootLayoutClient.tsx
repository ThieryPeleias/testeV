
"use client";
tsx

import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';

interface Props {
  children: React.ReactNode; 
}

export default function RootLayoutClient({ children }: Props) {


  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}