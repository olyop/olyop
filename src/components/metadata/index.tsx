import { createElement, FC } from "react"
import { MetadataProvider, ParseTitleFunction } from "@oly_op/react-metadata"

const parseTitle: ParseTitleFunction =
	({ appTitle, pageTitle }) =>
		`${appTitle}: ${pageTitle}`

const Metadata: FC = ({ children }) => (
	<MetadataProvider appTitle="oliver" parseTitle={parseTitle}>
		{children}
	</MetadataProvider>
)

export default Metadata