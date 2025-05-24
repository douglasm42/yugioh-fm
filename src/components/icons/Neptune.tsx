import * as React from "react"
import { SVGProps } from "react"
const Neptune = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M1 2.25 2.25 1 3.5 2.25m1.25 0L6 1l1.25 1.25m1.25 0L9.75 1 11 2.25M6 11V1M3.5 8.25h5M2.25 2a3.751 3.751 0 0 0 7.5 0m-7.5-1v1m7.5-1v1"
      style={{
        fill: "none",
        stroke: props.stroke || "#000",
        strokeWidth: 0.60000002,
        strokeLinecap: "round",
        strokeLinejoin: "miter",
        strokeMiterlimit: 10,
        strokeDasharray: "none",
        strokeOpacity: 1,
      }}
    />
  </svg>
)
export default Neptune
