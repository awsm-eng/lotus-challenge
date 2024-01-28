import { Flex, Title } from "@mantine/core";
import { HomerSimpson } from "@medplum/mock";
import { Container, PatientSummary, PatientTimeline } from "@medplum/react";
import Link from "next/link";
import Root from "../components/Root";
import styles from "./styles.module.css"

export default function PatientPage(): JSX.Element {
  return (
    <Root>
      <Container className={styles.font}>
        <Title data-testid="patient-screen-title" className={styles.font}>
          Patient Screen
        </Title>
        <Link href="/" data-testid="home-page-link">
          Home Page
        </Link>
        <Flex align={"flex-start"} mt={"xl"}>
          <Container>
            <Title className={styles.font}>Patient Summary</Title>
            <PatientSummary
              data-testid="patient-summary"
              className={styles.font}
              patient={HomerSimpson}
              w={350}
              withBorder
              padding="lg"
              radius="md"
              mx="md"
              my="xl"
              shadow="xs"
              background="linear-gradient(189.92deg,rgba(223,210,255,.5) 2.93%,rgba(212,196,255,.5) 45.02%,rgba(224,212,255,.5) 87.11%)"
            />
          </Container>
          <Container>
            <Title className={styles.font}>Patient Timeline</Title>
            <PatientTimeline patient={HomerSimpson} />
          </Container>
        </Flex>
      </Container>
    </Root>
  );
}
