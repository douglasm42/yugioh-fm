import * as React from "react"
import { SVGProps } from "react"
const Uranus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      d="M6 7.602a.899.899 0 1 0 0 1.797.899.899 0 0 0 0-1.797Z"
      style={{
        fill: props.stroke || "#000",
        fillOpacity: 1,
        fillRule: "nonzero",
        stroke: "none",
      }}
    />
    <path
      d="M60 60v50M35 85l25 25 25-25m0-50c0 13.79-11.21 25-25 25S35 48.79 35 35s11.21-25 25-25 25 11.21 25 25Zm0 0"
      style={{
        fill: "none",
        strokeWidth: 6,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        stroke: props.stroke || "#000",
        strokeOpacity: 1,
        strokeMiterlimit: 10,
      }}
      transform="matrix(.1 0 0 -.1 0 12)"
    />
  </svg>
)
export default Uranus
