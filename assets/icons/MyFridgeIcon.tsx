import React from "react";
import Svg, { Rect, Line, Path } from "react-native-svg";

export default function MyFridgeIcon({ width = 24, height = 24, color = "black" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 48 51" fill="none">
      <Rect x="0" y="1" width="30" height="45" rx="2" stroke={color} strokeWidth="4" />
      <Line x1="28" y1="29" x2="1" y2="29" stroke={color} strokeWidth="4" />
      <Line x1="21.5" y1="34" x2="21.5" y2="39" stroke={color} strokeWidth="3" />
      <Line x1="33.0424" y1="11.9213" x2="35.9188" y2="14.701" stroke={color} strokeWidth="3" />
      <Path d="M34 8.53794C34.8333 8.03794 37 7.43794 39 9.03794C41 10.6379 40.5 13.0379 40 14.0379" stroke={color} strokeWidth="3" />
    </Svg>
  );
}
