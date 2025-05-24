import * as React from "react"
import { SVGProps } from "react"
const Jupiter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M22.5 110a43.29 43.29 0 0 0 21.64-37.5A43.29 43.29 0 0 0 22.5 35h75M72.5 60V10"
      style={{
        fill: "none",
        strokeWidth: 6,
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
        stroke: props.stroke || "#000",
        strokeOpacity: 1,
        strokeMiterlimit: 1.5,
      }}
      transform="matrix(.1 0 0 -.1 0 12)"
    />
  </svg>
)
export default Jupiter
