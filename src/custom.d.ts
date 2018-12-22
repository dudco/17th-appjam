declare module "@kennethormandy/react-fittext" {
  interface FitTextProps {
    children?: any;
    compressor?: number;
    debounce?: number;
    defaultFontSize?: string;
    minFontSize?: number;
    maxFontSize?: number;
    parent?: string | object;
  }
  class FitText extends React.Component<FitTextProps> {}
  export default FitText;
}
