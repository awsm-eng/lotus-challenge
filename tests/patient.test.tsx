import { HomerSimpson, MockClient } from "@medplum/mock";
import {
  MedplumProvider,
  PatientSummary,
  PatientSummaryProps,
  PatientTimeline,
} from "@medplum/react";
import "@testing-library/jest-dom";
import PageComponent from "../pages/patient";
import { act, render, screen } from "./test-utils";

const medplum = new MockClient();

describe("Patient Page ", () => {
  async function setup(): Promise<void> {
    await act(async () => {
      render(
        <MedplumProvider medplum={medplum}>
          <PageComponent />
        </MedplumProvider>
      );
    });
  }
  test("Renders Page", async () => {
    await setup();
    expect(screen.getByTestId("patient-screen-title")).toBeInTheDocument();
  });

  test("Link to patient present", async () => {
    await setup();
    expect(screen.getByTestId("home-page-link")).toBeInTheDocument();
  });

  test("Patient summary present", async () => {
    await setup();
    expect(screen.getByTestId("patient-summary")).toBeInTheDocument();
  });

  async function setupPatient(args: PatientSummaryProps): Promise<void> {
    await act(async () => {
      render(
        <MedplumProvider medplum={medplum}>
          <PatientSummary {...args} />
        </MedplumProvider>
      );
    });
  }
  test("Renders Patient summary correctly displays homer information", async () => {
    await setupPatient({ patient: HomerSimpson });
    expect(screen.getByText("Homer Simpson")).toBeInTheDocument();
  });

  async function setupPatientTimeline(
    args: PatientSummaryProps
  ): Promise<void> {
    await act(async () => {
      render(
        <MedplumProvider medplum={medplum}>
          <PatientTimeline {...args} />
        </MedplumProvider>
      );
    });
  }

  test("Renders Patient timeline correctly displays homer information", async () => {
    await setupPatientTimeline({ patient: HomerSimpson });
    expect(screen.getByText("abc: 123")).toBeInTheDocument();
  });
});
