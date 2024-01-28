import { MockClient } from "@medplum/mock";
import { MedplumProvider } from "@medplum/react";
import "@testing-library/jest-dom";
import PageComponent from "../pages/index";
import { act, render, screen } from "./test-utils";
const medplum = new MockClient();

describe("Home page", () => {
  async function setup(): Promise<void> {
    await act(async () => {
      render(
        <MedplumProvider medplum={medplum}>
          <PageComponent />
        </MedplumProvider>
      );
    });
  }
  test("Renders", async () => {
    await setup();
    expect(screen.getByTestId("title")).toBeInTheDocument();
  });

  test("Link to patient present", async () => {
    await setup();
    expect(screen.getByTestId("patient-link")).toBeInTheDocument();
  });
});
