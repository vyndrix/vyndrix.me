import * as React from "react";
import LocaleSwitch from "@/components/switch/locale";
import { i18n, render } from "@/tests/utils";
import { act, cleanup, fireEvent, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import { HeroSection } from "../hero-section";

beforeEach(() => {
  window.localStorage.clear();
  act(() => {
    i18n.activate("en-US");
  });
});

afterEach(cleanup);

const Composed = () => (
  <>
    <HeroSection />
    <LocaleSwitch />
  </>
);

vi.mock("@/data/aerostats", () => ({ aerostats: [] }));

vi.mock("@/public/avatar.jpg", () => ({
  default: { src: "/avatar.jpg", width: 100, height: 100 },
}));

vi.mock("next/image", () => ({
  default: ({
    src,
    alt,
    ...props
  }: React.ImgHTMLAttributes<HTMLImageElement>) => (
    // eslint-disable-next-line @next/next/no-img-element -- test mock; LCP irrelevant in jsdom
    <img src={src as string} alt={alt} {...props} />
  ),
}));

vi.mock("@radix-ui/react-avatar", async (importActual) => {
  const mod = await importActual<typeof import("@radix-ui/react-avatar")>();
  return {
    ...mod,
    Image: ({
      src,
      alt,
      ...props
    }: React.ImgHTMLAttributes<HTMLImageElement>) =>
      src ? (
        // eslint-disable-next-line @next/next/no-img-element -- Radix Image renders a plain <img>; mock mirrors source
        <img src={src} alt={alt} {...props} />
      ) : null,
  };
});

vi.mock("../../aerostat", () => ({
  Aerostat: {
    Provider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Group: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    Dialog: ({ children }: { children: React.ReactNode }) => (
      <div>{children}</div>
    ),
  },
}));

vi.mock("../../aerostat/use-aerostat-postition-observer", () => ({
  useFloatPositionObserver: () => undefined,
}));

const openDialog = () => {
  act(() => {
    fireEvent.click(screen.getByTestId("hero-trigger"));
  });
};

describe("HeroSection", () => {
  test("trigger renders as a button with a non-empty aria-label", () => {
    render(<HeroSection />);
    const trigger = screen.getByTestId("hero-trigger");
    expect(trigger.tagName).toBe("BUTTON");
    expect(trigger.getAttribute("aria-label")).toBeTruthy();
  });

  test("dialog is closed initially (content not in DOM)", () => {
    render(<HeroSection />);
    expect(screen.queryByRole("dialog")).toBeNull();
  });

  test("clicking trigger opens the dialog", () => {
    render(<HeroSection />);
    openDialog();
    screen.getByRole("dialog");
  });

  test("opened dialog has an accessible name from its title", () => {
    render(<HeroSection />);
    openDialog();
    const dialog = screen.getByRole("dialog");
    expect(dialog.getAttribute("aria-labelledby")).toBeTruthy();
  });

  test("dialog title is visually hidden but present in the a11y tree", () => {
    render(<HeroSection />);
    openDialog();
    const title = screen.getByRole("heading");
    expect(title.dataset.slot).toBe("dialog-title");
    expect(title.textContent).toBeTruthy();
    expect(title.style.position).toBe("absolute");
    expect(title.style.width).toBe("1px");
    expect(title.style.height).toBe("1px");
  });

  test("dialog is described by the footer caption", () => {
    render(<HeroSection />);
    openDialog();
    const dialog = screen.getByRole("dialog");
    const caption = screen.getByTestId("hero-dialog-caption");
    expect(dialog.getAttribute("aria-describedby")).toBe(caption.id);
    expect(caption.textContent).toBeTruthy();
  });

  test("outer copy: heading and bio render with text", () => {
    render(<HeroSection />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBeTruthy();
    const bio = screen.getByTestId("hero-section-bio");
    expect(bio.tagName).toBe("P");
    expect(bio.textContent).toBeTruthy();
  });

  test("locale toggle re-renders outer copy with different text", () => {
    render(<Composed />);
    const headingBefore =
      screen.getByRole("heading", { level: 1 }).textContent ?? "";
    const bioBefore =
      screen.getByTestId("hero-section-bio").textContent ?? "";
    const triggerAriaBefore =
      screen.getByTestId("hero-trigger").getAttribute("aria-label") ?? "";

    act(() => {
      fireEvent.click(screen.getByRole("button", { name: /EN|PT/ }));
    });

    const headingAfter =
      screen.getByRole("heading", { level: 1 }).textContent ?? "";
    const bioAfter = screen.getByTestId("hero-section-bio").textContent ?? "";
    const triggerAriaAfter =
      screen.getByTestId("hero-trigger").getAttribute("aria-label") ?? "";

    expect(headingAfter).not.toBe(headingBefore);
    expect(bioAfter).not.toBe(bioBefore);
    expect(triggerAriaAfter).not.toBe(triggerAriaBefore);
  });

  test("locale toggle re-renders inner copy with different text", () => {
    render(<Composed />);
    openDialog();
    const titleBefore = screen.getByRole("heading").textContent ?? "";
    const captionBefore =
      screen.getByTestId("hero-dialog-caption").textContent ?? "";

    // Close dialog before toggling so Radix's aria-hidden region doesn't trap LocaleSwitch
    act(() => {
      fireEvent.keyDown(document, { key: "Escape" });
    });
    act(() => {
      fireEvent.click(screen.getByRole("button", { name: /EN|PT/ }));
    });
    openDialog();

    const titleAfter = screen.getByRole("heading").textContent ?? "";
    const captionAfter =
      screen.getByTestId("hero-dialog-caption").textContent ?? "";

    expect(titleAfter).not.toBe(titleBefore);
    expect(captionAfter).not.toBe(captionBefore);
  });
});
