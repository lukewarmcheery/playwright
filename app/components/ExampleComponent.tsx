type ComponentProps = {
	message: string
}

export default function ExampleComponent({ message }: ComponentProps) {
	return (
		<h1 data-testid="example-element">
			{message ? message : 'Default message.'}
		</h1>
	)
}
