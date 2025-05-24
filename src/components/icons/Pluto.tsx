import * as React from "react"
import { SVGProps } from "react"
const Pluto = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="none"
      stroke={props.stroke || "#000"}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={0.6}
      d="M8.5 10h-5V2H6c1.379 0 2.5.62 2.5 2S7.379 6 6 6H3.5"
    />
  </svg>
)
export default Pluto
