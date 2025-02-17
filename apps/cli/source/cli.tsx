#!/usr/bin/env node
import Pastel from 'pastel';

const app = new Pastel({
	name: "HyperionCLI",
	importMeta: import.meta,
});

await app.run();
