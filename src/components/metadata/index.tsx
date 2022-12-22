import { createElement, FC, PropsWithChildren } from "react";
import { MetadataProvider, ParseTitleFunction } from "@oly_op/react-metadata";

const parseTitle: ParseTitleFunction = ({ appTitle, pageTitle }) => `${appTitle}: ${pageTitle}`;

const Metadata: FC<PropsWithChildren> = ({ children }) => (
	<MetadataProvider appTitle="oliver" children={children} parseTitle={parseTitle} />
);

export default Metadata;
