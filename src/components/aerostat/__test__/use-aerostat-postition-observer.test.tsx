import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, test, vi } from "vitest";
import Provider from "../aerostat-provider";
import { useAerostatPositionRatting } from "../use-aerostat-position-ratting";
import { useFloatPositionObserver } from "../use-aerostat-postition-observer";

type ResizeArgs = { width?: number; height?: number };
type ResizeCallback = (args: ResizeArgs) => void;

let lastOnResize: ResizeCallback | null = null;

vi.mock("usehooks-ts", async (importActual) => {
  const mod = await importActual<typeof import("usehooks-ts")>();
  return {
    ...mod,
    useResizeObserver: ({ onResize }: { onResize: ResizeCallback }) => {
      lastOnResize = onResize;
    },
  };
});

beforeEach(() => {
  lastOnResize = null;
});

afterEach(cleanup);

const IMG_MIN_WIDTH = 462;
const IMG_MIN_HEIGHT = 616;

const wrapper = ({ children }: { children: React.ReactNode }) => (
  <Provider>{children}</Provider>
);

describe("useFloatPositionObserver", () => {
  test("returns a ref", () => {
    const { result } = renderHook(
      () => useFloatPositionObserver<HTMLDivElement>(),
      { wrapper },
    );
    expect(result.current).toHaveProperty("current");
    expect(result.current.current).toBeNull();
  });

  test("registers a resize callback via useResizeObserver", () => {
    renderHook(() => useFloatPositionObserver<HTMLDivElement>(), { wrapper });
    expect(lastOnResize).not.toBeNull();
  });

  test("resize writes width/IMG_MIN_WIDTH to xRat and height/IMG_MIN_HEIGHT to yRat", () => {
    const { result } = renderHook(
      () => {
        const ref = useFloatPositionObserver<HTMLDivElement>();
        const ratting = useAerostatPositionRatting();
        return { ref, ratting };
      },
      { wrapper },
    );

    lastOnResize!({ width: IMG_MIN_WIDTH * 2, height: IMG_MIN_HEIGHT * 3 });

    expect(result.current.ratting.xRat.get()).toBe(2);
    expect(result.current.ratting.yRat.get()).toBe(3);
  });

  test("undefined width/height resolve to 0 ratios", () => {
    const { result } = renderHook(
      () => {
        const ref = useFloatPositionObserver<HTMLDivElement>();
        const ratting = useAerostatPositionRatting();
        return { ref, ratting };
      },
      { wrapper },
    );

    lastOnResize!({});

    expect(result.current.ratting.xRat.get()).toBe(0);
    expect(result.current.ratting.yRat.get()).toBe(0);
  });
});
