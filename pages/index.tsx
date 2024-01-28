import { Title } from "@mantine/core";
import { Container } from "@medplum/react";
import Link from "next/link";
import Root from "../components/Root";
import styles from "./styles.module.css"

export default function IndexPage(): JSX.Element {
  return (
    <Root>
      <Container mt="xl" className={styles.font}>
        <Title data-testid="title" className={styles.font}>
          Welcome to Lotus AI
        </Title>
        <Link href="/patient" data-testid="patient-link">
          Patient Summary
        </Link>
      </Container>
    </Root>
  );
}
