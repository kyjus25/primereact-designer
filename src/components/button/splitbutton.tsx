import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import Title from '../title.tsx';
import Container from '../container.tsx';
import { Toast } from 'primereact/toast';
import { SplitButton } from 'primereact/splitbutton';
import { useRef } from 'react';

export default (props: any) => {
  const toast = useRef(null);
  const items = [
    {
      label: 'Update',
      icon: 'pi pi-refresh',
      command: () => {
        toast.current.show({ severity: 'success', summary: 'Updated', detail: 'Data Updated' });
      },
    },
    {
      label: 'Delete',
      icon: 'pi pi-times',
      command: () => {
        toast.current.show({ severity: 'warn', summary: 'Delete', detail: 'Data Deleted' });
      },
    },
    {
      label: 'React Website',
      icon: 'pi pi-external-link',
      command: () => {
        window.location.href = 'https://reactjs.org/';
      },
    },
    {
      label: 'Upload',
      icon: 'pi pi-upload',
      command: () => {
        //router.push('/fileupload');
      },
    },
  ];
  const save = () => {
    // @ts-ignore
    toast.current.show({ severity: 'success', summary: 'Success', detail: 'Data Saved' });
  };

  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: props.theme,
      }}
    >
      <Title text="Basic" />
      <Container>
        <Toast ref={toast as any}></Toast>
        <SplitButton label="Save" icon="pi pi-plus" onClick={save} model={items} />
      </Container>
    </PrimeReactProvider>
  );
};
