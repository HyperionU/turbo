import React from 'react';
import { Box, useApp } from 'ink';
import { Form } from 'ink-form';
import { form } from '../form.js';

export default function Index() {
	const { exit } = useApp()

	return (
		<Box borderColor='green' borderStyle='round' flexDirection='column'>
			<Form
				{...form}
				onSubmit={(value) => {
					console.clear()
					console.log(JSON.stringify(value))
					setTimeout(() => {
						exit()
					}, 2500);
				}}
			/>
		</Box>
	);
}
