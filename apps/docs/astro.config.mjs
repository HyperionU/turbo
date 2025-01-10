// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import mdx from '@astrojs/mdx';
import catppuccin from 'starlight-theme-catppuccin'
import starlightHeadingBadgesPlugin from 'starlight-heading-badges';
import starlightSidebarTopicsPlugin from 'starlight-sidebar-topics';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'My Docs',
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        sidebar: [
            {
                label: 'Guides',
                items: [
                    // Each item here is one entry in the navigation menu.
                    { label: 'Example Guide', slug: 'guides/example' },
                ],
            },
            {
                label: 'Reference',
                autogenerate: { directory: 'reference' },
            },
        ],
        plugins: [
            catppuccin({dark: "mocha-red", light: "latte-red"}),
            starlightHeadingBadgesPlugin(),
        ]
		}), 
        mdx(),
    ],
});