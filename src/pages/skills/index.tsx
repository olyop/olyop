import { createElement, FC } from "react";
import { Metadata } from "@oly_op/react-metadata";

import content from "./content";
import Skills from "../../components/skills";
import Heading from "../../components/heading";

const SkillsPage: FC = () => (
	<Metadata title="Skills">
		<Heading>Technical Skills</Heading>
		<p className="BodyOne MarginBottomDouble">
			I am experienced in the following
			<br /> programming technologies.
		</p>
		<Skills skills={content} />
	</Metadata>
);

export default SkillsPage;
