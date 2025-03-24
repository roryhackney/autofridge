import Svg, { Path } from 'react-native-svg';

export default function HomeIcon({ width = 24, height = 24, color = "black" }) {
  return (
      <Svg width={width} height={height} viewBox="0 0 48 47" fill="none">
        <Path
          d="M18 42.5807V23.2258H30V42.5807M6 17.4194L24 3.87097L42 17.4194V38.7097C42 39.7363 41.5786 40.7209 40.8284 41.4469C40.0783 42.1728 39.0609 42.5807 38 42.5807H10C8.93913 42.5807 7.92172 42.1728 7.17157 41.4469C6.42143 40.7209 6 39.7363 6 38.7097V17.4194Z"
          stroke={color}
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
  );
}