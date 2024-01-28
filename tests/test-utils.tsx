import { MantineProvider } from "@mantine/core";
import {
  RenderResult,
  act,
  screen,
  render as testingLibraryRender,
} from "@testing-library/react";

export { act, screen };

export function render(ui: React.ReactNode): RenderResult {
  return testingLibraryRender(<>{ui}</>, {
    wrapper: ({ children }: { children: React.ReactNode }) => (
      <MantineProvider>{children}</MantineProvider>
    ),
  });
}
