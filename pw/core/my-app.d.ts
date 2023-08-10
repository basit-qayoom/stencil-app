import type { Components, JSX } from "../../dist/types/components";

interface MyApp extends Components.MyApp, HTMLElement {}
export const MyApp: {
  prototype: MyApp;
  new (): MyApp;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
