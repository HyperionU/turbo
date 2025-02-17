import { Box, Newline, Text } from "ink";
import Gradient from "ink-gradient";
import React, { ReactElement, useState } from "react";
import { Tab, Tabs } from "ink-tab";
import { Select } from "@inkjs/ui";
import { z } from "zod";

export default async function Init() {

    const [activeTabName, setActiveTabName] = useState<string>("intro");

    function handleTabChange(name: string, _activeTab: ReactElement<typeof Tab>) {
        setActiveTabName(name);
    }

    return (
        <Box borderColor='green' borderStyle='round' flexDirection='column'>
            <Tabs onChange={handleTabChange}>
                <Tab name="intro">Intro</Tab>
                <Tab name="test">Test</Tab>
            </Tabs>
            <Box borderColor='green' borderStyle='round' flexDirection='column'>
                {activeTabName === "intro" && <Intro />}
                {activeTabName === "test" && <PackageManagerPicker />}
            </Box>
        </Box>
    )
}

function Intro() {
    return (
        <Text>
            Hello <Text backgroundColor="greenBright">Stranger!</Text>
            <Newline />
            Welcome to <Gradient name='atlas'>Next Generation HyperionCLI</Gradient>!
        </Text>
    )
}

const packageManager = z.union([
    z.literal("npm"),
    z.literal("pnpm"),
    z.literal("yarn"),
    z.literal("bun"),
    z.literal("deno")
])

type PackageManager = z.infer<typeof packageManager>

const packageManagerOptions: { value: PackageManager, label: PackageManager }[] = [
    { value: 'npm', label: 'npm' },
    { value: 'pnpm', label: 'pnpm' },
    { value: 'yarn', label: 'yarn' },
    { value: 'bun', label: 'bun' },
    { value: 'deno', label: 'deno' }
]

function PackageManagerPicker() {
    return (
        <>
            <Select 
                options={packageManagerOptions}    
            />
        </>
    )
}
