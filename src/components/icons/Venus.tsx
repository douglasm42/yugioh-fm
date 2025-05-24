import * as React from "react"
import { SVGProps } from "react"
const Venus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M6 11V7M4 9h4m1-5a3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3Z"
      style={{
        fill: "none",
        stroke: props.stroke || "#000",
        strokeWidth: 0.6,
        strokeMiterlimit: 4,
        strokeDasharray: "none",
      }}
    />
  </svg>
)
export default Venus
