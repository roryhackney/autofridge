import React from "react";
import Svg, { Path } from "react-native-svg";

export default function MenuIcon({ width = 50, height = 44, color = "#1E1E1E" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 50 44" fill="#1D1B20">
      <Path
        d="M6.25 33V29.3333H43.75V33H6.25ZM6.25 23.8333V20.1667H43.75V23.8333H6.25ZM6.25 14.6667V11H43.75V14.6667H6.25Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
