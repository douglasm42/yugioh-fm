import * as React from "react"
import { SVGProps } from "react"
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M9 7c0-2.207-1.793-4-4-4S1 4.793 1 7s1.793 4 4 4 4-1.793 4-4ZM7.828 4.172 11 1M9.23 1H11v1.77"
      style={{
        fill: "none",
        stroke: props.stroke || "#000",
        strokeWidth: 0.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeOpacity: 1,
        strokeDasharray: "none",
      }}
    />
  </svg>
)
export default SvgComponent
