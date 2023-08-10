import type { Components, JSX } from "../../dist/types/components";

interface MyTimer extends Components.MyTimer, HTMLElement {}
export const MyTimer: {
  prototype: MyTimer;
  new (): MyTimer;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
