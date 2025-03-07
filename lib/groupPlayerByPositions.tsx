import { IPlayer } from "./definitions";

interface IPos {
	position: string;
	players: IPlayer[];
}

const groupPlayersByPositions = (
	positionList: string[],
	players: IPlayer[],
) => {
	const position_rows: IPos[] = [];
	const positions = [...positionList];

	// group player by position
	players.forEach((player) => {
		const pos = position_rows.find(
			(role) => role.position === player.position?.long_name,
		);

		if (player.position) {
			if (!pos) {
				position_rows.push({
					position: player.position?.long_name,
					players: [player],
				});
			} else {
				pos.players.push(player);
			}
		}
	});

	// sort group according to the positions
	const playersByPositions = positions.map((el) => {
		const found_position = position_rows.find(
			(col) => col.position.toLowerCase() === el.toLowerCase(),
		);
		if (!found_position) return;
		return found_position;
	});

	return playersByPositions;
};

export default groupPlayersByPositions;
