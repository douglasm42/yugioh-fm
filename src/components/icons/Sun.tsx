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
      d="M10 6c0-2.207-1.793-4-4-4S2 3.793 2 6s1.793 4 4 4 4-1.793 4-4z"
      style={{
        fill: "none",
        stroke: props.stroke || "#000",
        strokeWidth: 0.6,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
    <path
      d="M6 5.102a.899.899 0 1 0 0 1.797.899.899 0 0 0 0-1.797Z"
      style={{
        fill: props.stroke || "#000",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
        strokeWidth: 1,
        strokeOpacity: 1,
      }}
    />
  </svg>
)
export default SvgComponent
