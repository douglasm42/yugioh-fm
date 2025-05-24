import * as React from "react"
import { SVGProps } from "react"
const Moon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M3.525 1.222a5 5 0 0 1 0 9.556 5 5 0 1 0 0-9.556z"
      style={{
        fill: "none",
        stroke: props.stroke || "#000",
        strokeWidth: 0.6,
        strokeLinejoin: "round",
        strokeMiterlimit: 4,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
)
export default Moon
