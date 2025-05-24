import * as React from "react"
import { SVGProps } from "react"
const Saturn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M3 3h4M5 1v5a1.999 1.999 0 1 1 3.414 1.414C7.508 8.32 7 9.72 7 11"
      style={{
        fill: "none",
        stroke: props.stroke || "#000",
        strokeWidth: 0.6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
)
export default Saturn
