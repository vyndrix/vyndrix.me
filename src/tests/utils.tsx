import { i18n } from "@/i18n";
import { Providers } from "@/providers";
import {
  RenderHookResult,
  RenderOptions,
  render as RTLRender,
  renderHook as RTLRenderHook,
} from "@testing-library/react";
import React, { ReactElement } from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <Providers>{children}</Providers>
);

const render = (ui: ReactElement, options?: Omit<RenderOptions, "wrapper">) =>
  RTLRender(ui, { wrapper: Wrapper, ...options });

const renderHook = <Result, Props>(
  hook: (props: Props) => Result,
  options?: Omit<RenderOptions, "wrapper">,
): RenderHookResult<Result, Props> =>
  RTLRenderHook(hook, { wrapper: Wrapper, ...options });

export { i18n, render, renderHook };
