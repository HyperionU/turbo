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
        title: 'U of H Docs',
        favicon: "/emblem.svg",
        logo: {
          dark: "./src/assets/logo/emblem.svg",
          light: "./src/assets/logo/emblem-light.svg"  
        },
        social: {
            github: 'https://github.com/withastro/starlight',
        },
        plugins: [
            catppuccin({dark: "mocha-red", light: "latte-red"}),
            starlightHeadingBadgesPlugin(),
            starlightSidebarTopicsPlugin([
                {
                    label: "Intro",
                    link: "/",
                    items: [
                        {label: "Intro", slug: 'intro'},
                        {label: "Installation", slug: 'install'},
                        {label: "Installation", items: [
                            {label: "hu-config", slug: 'install/huconfig'},
                            {label: "hyperioncli (Latest)", slug: "install/hyperioncli_latest"},
                            {label: "hyperioncli (init Command)", slug: "install/hyperioncli_init"},
                            {label: "hyperioncli (Commands)", slug: "install/hyperioncli_cmds"},
                            {label: "hyperioncli (Flakes)", slug: "install/hyperioncli_flake"}
                        ], collapsed: true}
                    ]
                }
            ]),
        ]
		}), 
        mdx(),
    ],
});