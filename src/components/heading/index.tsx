import { createElement, ReactNode, VFC } from "react"

import "./index.scss"

const Heading: VFC<HeadingPropTypes> =
	({ children }) => (
		<h3 className="Heading HeadingFive MarginBottom">
			{children}
		</h3>
	)

export interface HeadingPropTypes {
	children: ReactNode,
}

export default Heading