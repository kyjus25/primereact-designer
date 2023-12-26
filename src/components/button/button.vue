<script setup>
import { usePrimeVue } from 'primevue/config';
const props = defineProps(['theme']);
// console.log('THEME', props.theme);
import Button from 'primevue/button';
import Title from '../title.vue';
import Container from '../container.vue';
// import Lara from 'primevue/passthrough/tailwind';
const primevue = usePrimeVue();
primevue.config.pt = props.theme;
</script>
<template>
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
    <Button label="Submit" icon="pi pi-check" loading />
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
    <span class="p-buttonset">
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
    <Button class="bg-bluegray-600 hover:bg-bluegray-400 border-bluegray-700">
      <svg width="35" height="40" viewBox="0 0 35 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M25.87 18.05L23.16 17.45L25.27 20.46V29.78L32.49 23.76V13.53L29.18 14.73L25.87 18.04V18.05ZM25.27 35.49L29.18 31.58V27.67L25.27 30.98V35.49ZM20.16 17.14H20.03H20.17H20.16ZM30.1 5.19L34.89 4.81L33.08 12.33L24.1 15.67L30.08 5.2L30.1 5.19ZM5.72 14.74L2.41 13.54V23.77L9.63 29.79V20.47L11.74 17.46L9.03 18.06L5.72 14.75V14.74ZM9.63 30.98L5.72 27.67V31.58L9.63 35.49V30.98ZM4.8 5.2L10.78 15.67L1.81 12.33L0 4.81L4.79 5.19L4.8 5.2ZM24.37 21.05V34.59L22.56 37.29L20.46 39.4H14.44L12.34 37.29L10.53 34.59V21.05L12.42 18.23L17.45 26.8L22.48 18.23L24.37 21.05ZM22.85 0L22.57 0.69L17.45 13.08L12.33 0.69L12.05 0H22.85Z"
          fill="black"
        />
        <path
          d="M30.69 4.21L24.37 4.81L22.57 0.69L22.86 0H26.48L30.69 4.21ZM23.75 5.67L22.66 3.08L18.05 14.24V17.14H19.7H20.03H20.16H20.2L24.1 15.7L30.11 5.19L23.75 5.67ZM4.21002 4.21L10.53 4.81L12.33 0.69L12.05 0H8.43002L4.22002 4.21H4.21002ZM21.9 17.4L20.6 18.2H14.3L13 17.4L12.4 18.2L12.42 18.23L17.45 26.8L22.48 18.23L22.5 18.2L21.9 17.4ZM4.79002 5.19L10.8 15.7L14.7 17.14H14.74H15.2H16.85V14.24L12.24 3.09L11.15 5.68L4.79002 5.2V5.19Z"
          fill="white"
        />
      </svg>
    </Button>
  </Container>
</template>
