import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { createElement, StrictMode } from "react";

import Index from "./components/index";
import Metadata from "./components/metadata";

const container = document.getElementById("Root");

if (container) {
	createRoot(container).render(
		<StrictMode>
			<Metadata>
				<BrowserRouter>
					<Index />
				</BrowserRouter>
			</Metadata>
		</StrictMode>,
	);
}
