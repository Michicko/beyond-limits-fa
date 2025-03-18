import { ActionBar, Button, Portal, Kbd } from "@chakra-ui/react";
import React from "react";

function ActionBarComp({
	hasSelection,
	selection,
}: {
	hasSelection: boolean;
	selection: [];
}) {
	return (
		<ActionBar.Root open={hasSelection}>
			<Portal>
				<ActionBar.Positioner>
					<ActionBar.Content>
						<ActionBar.SelectionTrigger>
							{selection.length} selected
						</ActionBar.SelectionTrigger>
						<ActionBar.Separator />
						<Button variant="outline" size="sm">
							Delete <Kbd>⌫</Kbd>
						</Button>
						<Button variant="outline" size="sm">
							Share <Kbd>T</Kbd>
						</Button>
					</ActionBar.Content>
				</ActionBar.Positioner>
			</Portal>
		</ActionBar.Root>
	);
}

export default ActionBarComp;
