type AnchorTarget = "_blank" | "_self" | "_parent" | "_top" | "framename";

export const useURI =
  (url: string, target: AnchorTarget = "_blank") =>
  () =>
    window.open(url, target);
