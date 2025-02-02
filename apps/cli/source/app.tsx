import React, { ReactElement, useState } from 'react';
import { Box, Newline, Text } from 'ink';
import { Tab, Tabs } from 'ink-tab';
import Gradient from 'ink-gradient';

type Props = {
	name: string | undefined;
};

const GreenBox = ({ children }: any) => {
	return (
		<Box borderStyle="round" borderColor="green" justifyContent='center'>
			{children}
		</Box>
	)
}

const Atlas = ({children}: any) => {
	return (
		<Gradient name='atlas'>
			<Text>{children}</Text>
		</Gradient>
	)
}

export default function App({ name = 'Stranger' }: Props) {
	const [activeTabName, setActiveTabName] = useState<string>('intro')

	const onTabChange = (tabName: string, _activeTab: ReactElement<typeof Tab>) => {
		setActiveTabName(tabName)
	}

	return (
		<Box flexDirection='column'>
			<Box>
				<Tabs onChange={onTabChange} showIndex={false}>
					<Tab name='intro'>Intro</Tab>
					<Tab name='config'>Config</Tab>
				</Tabs>
			</Box>

			<GreenBox>
				<Text>
					{activeTabName === 'intro' && (
						<Text>
							Hello <Text color="green">{name}</Text>!
							<Newline />
							Welcome to <Atlas>Next Generation HyperionCLI</Atlas>!
						</Text>
					)}
					{activeTabName === 'config' && "Let's get you configured!"}
				</Text>
			</GreenBox>
		</Box>
	);
}
