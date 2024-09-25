declare global {
  namespace JSX {
    interface IntrinsicElements {
      "box-icon": IconProps;
    }
  }
}

export type IconProps = {
  type?: "regular" | "solid" | "logo";
  name: string;
  size?: string;
  color?: string;
};