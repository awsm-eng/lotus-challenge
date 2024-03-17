import Link from 'next/link';
import { Center, NavLink, Title } from '@mantine/core';
import { Container } from '@medplum/react';
import AppContainer from '../components/AppContainer';

export default function IndexPage(): JSX.Element {
  return (
    <AppContainer>
      <Container mt="xl">
        <Center>
          <Title>Welcome to Lotus AI</Title>
        </Center>
        <NavLink
          href="/patient"
          component={Link}
          label="Patient Summary"
          w={200}
          variant="light"
          active
        />
      </Container>
    </AppContainer>
  );
}
