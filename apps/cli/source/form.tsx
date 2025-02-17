import { FormProps } from "ink-form";
import { z } from "zod";
import { getUserPkgManager } from "./utils/get-package-manager.js";
import React from "react";
import { Newline, Text } from "ink";
import Gradient from "ink-gradient";

const packageManager = z.union([
    z.literal("npm"),
    z.literal("pnpm"),
    z.literal("yarn"),
    z.literal("bun"),
    z.literal("deno")
])

type PackageManager = z.infer<typeof packageManager>

const packageManagerOptions: { value: PackageManager }[] = [
    { value: 'npm' },
    { value: 'pnpm' },
    { value: 'yarn' },
    { value: 'bun' },
    { value: 'deno' }
]

const form: FormProps = {
    form: {
        sections: [
            {
                title: "Intro",
                description: (
                    <Text>
						Hello!
						<Newline />
						Welcome to <Gradient name='atlas'>Next Generation HyperionCLI</Gradient>!
					</Text>
                ),
                fields: []
            },
            {
                title: "Config",
                fields: [
                    {
                        type: 'select',
                        name: 'packageManager',
                        label: 'Package Manager',
                        options: packageManagerOptions,
                        initialValue: await getUserPkgManager()
                    },
                    {
                        type: 'boolean',
                        name: 'turbo',
                        label: 'Turbo',
                        initialValue: false
                    },
                    {
                        type: 'boolean',
                        name: 'nitrox',
                        label: 'Nitrox',
                        initialValue: false
                    }
                ]
            },
            {
                title: "Packages",
                fields: []
           },
            {
                title: "Turbo",
                fields: []
            },
            {
                title: "Nitrox",
                fields: []
            }
        ]
    }
}

export { form }