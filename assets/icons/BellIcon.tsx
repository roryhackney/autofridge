import React from "react";
import Svg, { Path } from "react-native-svg";

export default function BellIcon({ width = 43, height = 44, color = "#1E1E1E" }) {
  return (
    <Svg width={width} height={height} viewBox="0 0 43 44" fill="none">
      <Path
        d="M24.5996 38.5001C24.2846 39.0557 23.8325 39.5169 23.2885 39.8376C22.7445 40.1582 22.1278 40.3269 21.5 40.3269C20.8722 40.3269 20.2555 40.1582 19.7115 39.8376C19.1675 39.5169 18.7154 39.0557 18.4004 38.5001M32.25 14.6667C32.25 11.7494 31.1174 8.95147 29.1014 6.88857C27.0854 4.82567 24.3511 3.66675 21.5 3.66675C18.6489 3.66675 15.9146 4.82567 13.8986 6.88857C11.8826 8.95147 10.75 11.7494 10.75 14.6667C10.75 27.5001 5.375 31.1667 5.375 31.1667H37.625C37.625 31.1667 32.25 27.5001 32.25 14.6667Z"
        stroke={color}
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}
