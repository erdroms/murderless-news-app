import Svg, { SvgProps, Defs, ClipPath, Path } from "react-native-svg"

const SvgComponent = (props: SvgProps) => (
  <Svg width="60px" height="60px" viewBox="0 0 24 24" {...props}>
    <Defs>
      <ClipPath id="a">
        <Path d="m57.944-14.734-25.262 3.539a1.503 1.503 0 0 0-.98 2.408 1.493 1.493 0 0 0 1.39.562l6.44-.902.682 4.952 5.773-.81-1.583 2.092a.997.997 0 0 0 .672 1.595 1.001 1.001 0 0 0 .921-.39l2.417-3.193a1 1 0 0 1 1.66 1.106l-.066.097-.604.799a.999.999 0 1 0 1.593 1.204l5.307-7.014a7.976 7.976 0 0 0 1.67-5.798l-.03-.247Zm-2.045 2.305-.026.118a6.016 6.016 0 0 1-.856 1.995l-.177.252-.071.097a6.007 6.007 0 0 1-3.678 2.243l-.253.04-8.914 1.25-.547-3.96 14.522-2.035Z" />
      </ClipPath>
    </Defs>
    <Path fill="none" d="M0 0h24v24H0z" />
    <Path
      d="m.591 17.583 20.42-15.274c.923-.693 2.25-.124 2.388 1.023a1.497 1.497 0 0 1-.592 1.378l-5.205 3.894 2.995 4.004-4.666 3.49 2.593.374a1 1 0 1 1-.285 1.979l-3.96-.569a.999.999 0 0 0-.4 1.955l.115.023.99.143a1 1 0 1 1-.285 1.979l-8.696-1.253a7.966 7.966 0 0 1-5.26-2.949l-.152-.197Zm3.072.199.102.066a5.982 5.982 0 0 0 2.008.817l.303.054.119.019a5.986 5.986 0 0 0 4.187-.994l.208-.149 7.206-5.39-2.395-3.203-11.738 8.78Z"
      style={{
        fill: "#000",
        mixBlendMode: "multiply",
      }}
    />
    <Path d="m.642 17.609 20.42-15.274c.923-.693 2.25-.124 2.388 1.023a1.497 1.497 0 0 1-.592 1.378L17.653 8.63l2.995 4.004-4.666 3.49 2.593.374a1 1 0 1 1-.285 1.979l-3.96-.569a.999.999 0 0 0-.4 1.955l.115.023.99.143a1 1 0 1 1-.285 1.979l-8.696-1.253a7.966 7.966 0 0 1-5.26-2.949l-.152-.197Zm3.072.199.102.066a5.982 5.982 0 0 0 2.008.817l.303.054.119.019a5.986 5.986 0 0 0 4.187-.994l.208-.149 7.206-5.39-2.395-3.203-11.738 8.78Z" />
    <Path
      d="M58.213-14.935V-.731H34.05l24.163-14.204Z"
      style={{
        fill: "#cd0000",
        fillRule: "nonzero",
        clipPath: "url(#a)",
      }}
      transform="matrix(-.70989 .70431 .70268 .71152 52.132 -12.721)"
    />
  </Svg>
)
export default SvgComponent
