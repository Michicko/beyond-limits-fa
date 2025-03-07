import { ReactNode } from "react";

export interface ISocial {
	id: number;
	link: string;
	icon: string;
	name: string;
}

export interface IHighlight {
	id: number;
	title: string;
	date: string;
	thumbnail: string;
	videoUrl: string;
}

export interface ILink {
	href: string;
	name: string;
}

export interface ICurrentMenu {
	id: number;
	icon: ReactNode;
	name: string;
	innerLinks: string[];
	subMenu: {
		id: number;
		link: string;
		name: string;
		image: string;
	}[];
}

interface IPlayerPosition {
	short_name: string;
	long_name: string;
	attributes: string[];
	players?: IPlayer[];
}

interface ITeam {
	short_name: string;
	long_name: string;
	logo: string;
	isBeyondLimits: boolean;
	stadium?: string;
}

export interface IArticleCategory {
	id: string;
	name: string;
}

export interface IArticle {
	id: string;
	title: string;
	createdAt: string;
	article_category_id: string;
	cover_image: string;
	match?: IMatch;
	tags: string[];
	content: string;
	category?: IArticleCategory;
}

export interface ISeason {
	season: string;
	competitions?: ICompetition[];
}

export interface IHonor {
	competition_id: string;
	competition?: ICompetition;
	trophy_image: string;
	numbers_won: number;
	years_won: number[];
	article_id: string;
	article?: IArticle;
}

export interface ILeague {
	id: string;
	competition_id: string;
	competition?: ICompetition;
}

export interface ICup {
	competition_id: string;
	competition: ICompetition | string;
	playOffsRounds: string[];
}

export interface IMixedCup {
	competition_id: string;
	competition?: ICompetition;
	standing_id: string;
	standing: IStandingRow[];
	playOffsRounds: IPlayOffsRound[];
}

enum Playoffs_round {
	ROUND32 = "1/32-finals",
	ROUND16 = "1/16-finals",
	ROUND8 = "1/8-finals",
	QUATERFINALS = "QUATERFINALS",
	SEMIFINALS = "SEMIFINALS",
	THIRDPLACE = "THIRDPLACE",
	FINALS = "FINALS",
}

interface IPlayOffsRound {
	round: Playoffs_round;
	matches: IMatch[];
}

export interface IStandingRow {
	league_id: string;
	league?: ILeague;
	team_id: string;
	team?: ITeam;
	position: number;
	stats: {
		p: number;
		w: number;
		d: number;
		l: number;
		f: number;
		a: number;
		gd: string;
		pts: number;
	};
}

export enum Competition_type {
	LEAGUE = "LEAGUE",
	CUP = "CUP",
	MIXEDCUP = "MIXEDCUP",
}

export interface ICompetition {
	short_name: string;
	long_name: string;
	logo: string;
	competition_type: Competition_type;
	season_id: string;
	season: ISeason;
	matches?: IMatch[];
}

export enum Match_status {
	UPCOMING = "UPCOMING",
	FINISHED = "FINISHED",
	CANCELED = "CANCELED",
	ABANDONED = "ABANDONED",
}

interface IMatchStats {
	player_id: string;
	match_id: string;
	goals: number;
	assists: number;
	minutes_played: number;
}

export enum Dominant_foot {
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}

export enum Age_group {
	UNDER_19 = "UNDER-19",
	UNDER_17 = "UNDER-17",
}

export enum Player_status {
	LOANED = "LOANED",
	ACTIVE = "ACTIVE",
	INACTIVE = "INACTIVE",
}

export interface IPlayer {
	id: string;
	firstname: string;
	lastname: string;
	player_position_id: string;
	position?: IPlayerPosition;
	general_match_stats: IMatchStats[];
	// get these stats from player position attributes and input in match positon
	position_match_stats: object[];
	squad_no: number;
	year_signed: number;
	dob: string;
	height: number;
	weight: number;
	dominant_foot: Dominant_foot;
	isTwoFooted: boolean;
	image_home_kit: string;
	image_away_kit: string;
	age_group: Age_group;
	status: Player_status;
}

interface IStaff {
	name: string;
	role: string;
	image: string;
}

interface ILineup {
	starters: IPlayer[];
	substitutes: IPlayer[];
	coach: IStaff;
}

// export enum GOAL_TYPE {
// 	PENALTY = "PENALTY",
// 	OWN_GOAL = "OWN GOAL",
// 	NORMAL_GOAL = "NORMAL GOAL",
// }

interface IMatchScorer {
	time: string;
	isBeyondLimitsPlayer: boolean;
	goal_type: string;
	name: string;
	assist: string;
}

interface IMatchTeam {
	team_id: string;
	team?: ITeam;
	goals: number;
	stats: {
		passes: number;
		corners: number;
		shots: number;
		yellows: number;
		reds: number;
	};
}

export interface IMatch {
	id: string;
	round: string | number;
	competition_id: string;
	competition: ICompetition;
	home: IMatchTeam;
	away: IMatchTeam;
	date: string;
	time: string;
	venue: string;
	status: Match_status;
	lineup: ILineup;
	preview: {
		context: string;
		keyPlayer?: IPlayer;
		aboutKeyPlayer: string;
	};
	report: {
		context: string;
		mvp?: IPlayer;
		aboutMvp: string;
	};
	scorers?: IMatchScorer[];
	form: {
		home: string[];
		away: string[];
	};
}
