import { MantineProvider } from "@mantine/core";
import { MockClient } from "@medplum/mock";
import { MedplumProvider } from "@medplum/react";
import { ReactNode } from "react";
import { Raleway } from "next/font/google";
const raleway = Raleway({
    variable: "--raleway",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
  });
export default function Root(props: { children: ReactNode }): JSX.Element {
  const medplum = new MockClient();

  return (
    <MantineProvider>
      <MedplumProvider medplum={medplum}>
        <div className={`${raleway.variable}`}>{props.children}</div>
      </MedplumProvider>
    </MantineProvider>
  );
}
