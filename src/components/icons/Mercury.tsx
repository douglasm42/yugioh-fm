import * as React from "react"
import { SVGProps } from "react"
const Mercury = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M8 5a1.999 1.999 0 1 0-4 0 1.999 1.999 0 1 0 4 0ZM4 1a1.999 1.999 0 1 0 4 0M6 11V7M4 9h4"
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
export default Mercury
