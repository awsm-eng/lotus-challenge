import React from 'react';
import { Noto_Sans } from 'next/font/google';
import { MantineProvider } from '@mantine/core';
import { MedplumProvider } from '@medplum/react';
import { MockClient } from '@medplum/mock';

interface Props {
  children: React.ReactNode;
}

const notoSans = Noto_Sans({
  subsets: ['latin'],
  variable: '--noto-sans',
});

const AppContainer: React.FC<Props> = ({ children }) => {

  const medplum = new MockClient();
  return (
    <MantineProvider>
      <MedplumProvider medplum={medplum}>
        <div className={notoSans.className}>{children}</div>
      </MedplumProvider>
    </MantineProvider>
  );
};

export default AppContainer;
