import { PrimeReactProvider } from 'primereact/api';
import { Button } from 'primereact/button';
import Title from '../title.tsx';
import Container from '../container.tsx';

export default (props: any) => {
  return (
    <PrimeReactProvider
      value={{
        unstyled: true,
        pt: props.theme,
      }}
    >
      <Title text="Basic" />
      <Container>
        <Button label="Submit" />
      </Container>
      <Title text="Link" />
      <Container>
        <Button label="Submit" link />
      </Container>
      <Title text="Icons" />
      <Container>
        <Button icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" />
        <Button label="Submit" icon="pi pi-check" iconPos="right" />
      </Container>
      <Title text="Loading" />
      <Container>
        <Button label="Submit" icon="pi pi-check" loading={true} />
      </Container>
      <Title text="Severity" />
      <Container>
        <Button label="Primary" />
        <Button label="Secondary" severity="secondary" />
        <Button label="Success" severity="success" />
        <Button label="Info" severity="info" />
        <Button label="Warning" severity="warning" />
        <Button label="Help" severity="help" />
        <Button label="Danger" severity="danger" />
      </Container>
      <Title text="Disabled" />
      <Container>
        <Button label="Submit" disabled />
      </Container>
      <Title text="Raised" />
      <Container>
        <Button label="Primary" raised />
        <Button label="Secondary" severity="secondary" raised />
        <Button label="Success" severity="success" raised />
        <Button label="Info" severity="info" raised />
        <Button label="Warning" severity="warning" raised />
        <Button label="Help" severity="help" raised />
        <Button label="Danger" severity="danger" raised />
      </Container>
      <Title text="Rounded" />
      <Container>
        <Button label="Primary" rounded />
        <Button label="Secondary" severity="secondary" rounded />
        <Button label="Success" severity="success" rounded />
        <Button label="Info" severity="info" rounded />
        <Button label="Warning" severity="warning" rounded />
        <Button label="Help" severity="help" rounded />
        <Button label="Danger" severity="danger" rounded />
      </Container>
      <Title text="Text" />
      <Container>
        <Button label="Primary" text />
        <Button label="Secondary" severity="secondary" text />
        <Button label="Success" severity="success" text />
        <Button label="Info" severity="info" text />
        <Button label="Warning" severity="warning" text />
        <Button label="Help" severity="help" text />
        <Button label="Danger" severity="danger" text />
      </Container>
      <Title text="Raised Text" />
      <Container>
        <Button label="Primary" text raised />
        <Button label="Secondary" severity="secondary" text raised />
        <Button label="Success" severity="success" text raised />
        <Button label="Info" severity="info" text raised />
        <Button label="Warning" severity="warning" text raised />
        <Button label="Help" severity="help" text raised />
        <Button label="Danger" severity="danger" text raised />
      </Container>
      <Title text="Outlined" />
      <Container>
        <Button label="Primary" outlined />
        <Button label="Secondary" severity="secondary" outlined />
        <Button label="Success" severity="success" outlined />
        <Button label="Info" severity="info" outlined />
        <Button label="Warning" severity="warning" outlined />
        <Button label="Help" severity="help" outlined />
        <Button label="Danger" severity="danger" outlined />
      </Container>
      <Title text="Icon Only" />
      <Container>
        <Button icon="pi pi-check" aria-label="Filter" />
        <Button icon="pi pi-bookmark" severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" severity="success" aria-label="Search" />
        <Button icon="pi pi-user" severity="info" aria-label="User" />
        <Button icon="pi pi-bell" severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" severity="danger" aria-label="Cancel" />

        <Button icon="pi pi-check" rounded aria-label="Filter" />
        <Button icon="pi pi-bookmark" rounded severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" rounded severity="success" aria-label="Search" />
        <Button icon="pi pi-user" rounded severity="info" aria-label="User" />
        <Button icon="pi pi-bell" rounded severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" rounded severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" rounded severity="danger" aria-label="Cancel" />

        <Button icon="pi pi-check" rounded outlined aria-label="Filter" />
        <Button icon="pi pi-bookmark" rounded outlined severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" rounded outlined severity="success" aria-label="Search" />
        <Button icon="pi pi-user" rounded outlined severity="info" aria-label="User" />
        <Button icon="pi pi-bell" rounded outlined severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" rounded outlined severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" rounded outlined severity="danger" aria-label="Cancel" />

        <Button icon="pi pi-check" rounded text raised aria-label="Filter" />
        <Button icon="pi pi-bookmark" rounded text raised severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" rounded text raised severity="success" aria-label="Search" />
        <Button icon="pi pi-user" rounded text raised severity="info" aria-label="User" />
        <Button icon="pi pi-bell" rounded text raised severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" rounded text raised severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" rounded text raised severity="danger" aria-label="Cancel" />

        <Button icon="pi pi-check" rounded text aria-label="Filter" />
        <Button icon="pi pi-bookmark" rounded text severity="secondary" aria-label="Bookmark" />
        <Button icon="pi pi-search" rounded text severity="success" aria-label="Search" />
        <Button icon="pi pi-user" rounded text severity="info" aria-label="User" />
        <Button icon="pi pi-bell" rounded text severity="warning" aria-label="Notification" />
        <Button icon="pi pi-heart" rounded text severity="help" aria-label="Favorite" />
        <Button icon="pi pi-times" rounded text severity="danger" aria-label="Cancel" />
      </Container>
      <Title text="Badges" />
      <Container>
        <Button type="button" label="Emails" badge="8" />
        <Button type="button" label="Messages" icon="pi pi-users" outlined badge="2" badgeClassName="p-badge-danger" />
      </Container>
      <Title text="Button Set" />
      <Container>
        <span className="p-buttonset">
          <Button label="Save" icon="pi pi-check" />
          <Button label="Delete" icon="pi pi-trash" />
          <Button label="Cancel" icon="pi pi-times" />
        </span>
      </Container>
      <Title text="Sizes" />
      <Container>
        <Button label="Small" icon="pi pi-check" size="small" />
        <Button label="Normal" icon="pi pi-check" />
        <Button label="Large" icon="pi pi-check" size="large" />
      </Container>
      <Title text="Template" />
      <Container>
        <Button className="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
          <img alt="logo" src="https://primefaces.org/cdn/primereact/images/primereact-logo-light.svg" className="h-2rem" />
        </Button>
      </Container>
    </PrimeReactProvider>
  );
};
