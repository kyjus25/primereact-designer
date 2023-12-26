import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import Title from '../title.tsx';
import Container from '../container.tsx';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';
import { useRef } from 'react';

export default (props: any) => {
  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: props.theme,
      }}
    >
      <p>Not implemented</p>
    </PrimeReactProvider>
  );
};
