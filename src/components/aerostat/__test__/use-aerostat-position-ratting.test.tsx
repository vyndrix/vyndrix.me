import { cleanup, renderHook } from "@testing-library/react";
import { afterEach, describe, expect, test } from "vitest";
import Provider from "../aerostat-provider";
import { useAerostatPositionRatting } from "../use-aerostat-position-ratting";

afterEach(cleanup);

describe("useAerostatPositionRatting", () => {
  test("returns xRat and yRat motion values from Provider context", () => {
    const { result } = renderHook(() => useAerostatPositionRatting(), {
      wrapper: ({ children }) => <Provider>{children}</Provider>,
    });

    expect(result.current.xRat.get()).toBe(1);
    expect(result.current.yRat.get()).toBe(1);
  });

  test("returns default context values when used outside Provider", () => {
    const { result } = renderHook(() => useAerostatPositionRatting());

    expect(result.current.xRat.get()).toBe(1);
    expect(result.current.yRat.get()).toBe(1);
  });

  test("Provider exposes mutable motion values that the hook reads", () => {
    const { result } = renderHook(() => useAerostatPositionRatting(), {
      wrapper: ({ children }) => <Provider>{children}</Provider>,
    });

    result.current.xRat.set(2.5);
    result.current.yRat.set(0.75);

    expect(result.current.xRat.get()).toBe(2.5);
    expect(result.current.yRat.get()).toBe(0.75);
  });
});
