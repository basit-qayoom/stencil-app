import type { Components, JSX } from "../../dist/types/components";

interface TextField extends Components.TextField, HTMLElement {}
export const TextField: {
  prototype: TextField;
  new (): TextField;
};
/**
 * Used to define this component and all nested components recursively.
 */
export const defineCustomElement: () => void;
