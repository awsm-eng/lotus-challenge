import Link from 'next/link';
import { Title } from '@mantine/core';
import { Container } from '@medplum/react';

export default function IndexPage(): JSX.Element {

  return (
    <Container mt="xl">
      <Title>Patient Screen</Title>
      <Link href="/">Home Page</Link>
      {/* @TODO: Add patient summary screen */}
    </Container>
  );
};
