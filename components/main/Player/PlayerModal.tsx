import { IPlayer } from "@/lib/definitions";
import React from "react";
import styles from "./Player.module.css";
import clsx from "clsx";
import PlayerInfo from "./PlayerInfo";
import ImageComp from "@/components/ImageComp/ImageComp";

function PlayerModal({ player }: { player: IPlayer }) {
	return (
		<div className={clsx(styles["player-modal__box"])}>
			<div className={clsx(styles["player-kit"])}>
				<ImageComp
					image={player.image_home_kit}
					alt={player.firstname}
					placeholder={"/images/player-bg.png"}
					priority={false}
				/>
				<ImageComp
					image={player.image_away_kit}
					alt={player.firstname}
					placeholder={"/images/player-bg.png"}
					priority={false}
				/>
			</div>
			<div className={clsx(styles["player-modal__details"])}>
				<div className={clsx(styles["player-modal__name"])}>
					<p className={clsx(styles["player-modal__last"])}>
						{player.lastname}
					</p>
					<p className={clsx(styles["player-modal__first"])}>
						{player.firstname}
					</p>
				</div>
				<div className={clsx(styles["player-modal__infos"])}>
					<PlayerInfo
						info={{
							name: player.position?.long_name,
							value: player.position?.short_name,
						}}
					/>
					<PlayerInfo info={{ name: "Squad No", value: player.squad_no }} />
					<PlayerInfo info={{ name: "DOB", value: player.dob }} />
					<PlayerInfo info={{ name: "foot", value: player.dominant_foot }} />
					<PlayerInfo info={{ name: "height", value: `${player.height} cm` }} />
					<PlayerInfo info={{ name: "weight", value: `${player.weight} kg` }} />
				</div>
			</div>
		</div>
	);
}

export default PlayerModal;
