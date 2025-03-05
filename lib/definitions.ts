import { ReactNode } from "react";

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
	players: IPlayer[];
}

interface ITeam {
	short_name: string;
	long_name: string;
	logo: string;
	isBeyondLimits: boolean;
	stadium?: string;
}

interface IArticleCategory {
	name: string;
	articles?: IArticle[];
}

interface IArticle {
	article_category_id: string;
	category: IArticleCategory;
	cover_image: string;
	title: string;
	tags: string[];
	content: {}[];
}

interface ISeason {
	season: string;
	competitions?: ICompetition[];
}

interface IHonor {
	competition_id: string;
	competition?: ICompetition;
	trophy_image: string;
	numbers_won: number;
	years_won: number[];
	article_id: string;
	article?: IArticle;
}

export interface ILeague {
	competition_id: string;
	competition: ICompetition;
	standings?: IStandingRow[];
}

export interface ICup {
	competition_id: string;
	competition?: ICompetition;
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

interface IStandingRow {
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

enum Competition_type {
	LEAGUE = "LEAGUE",
	CUP = "CUP",
	MIXEDCUP = "MIXEDCUP",
}

interface ICompetition {
	short_name: string;
	long_name: string;
	logo: string;
	competition_type: Competition_type;
	season_id: string;
	season: ISeason;
	matches?: IMatch[];
}

enum Match_status {
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

enum Dominant_foot {
	LEFT = "LEFT",
	RIGHT = "RIGHT",
}

enum Age_group {
	UNDER_19 = "UNDER-19",
	UNDER_17 = "UNDER-17",
}

enum Player_status {
	LOANED = "LOANED",
	ACTIVE = "ACTIVE",
	INACTIVE = "INACTIVE",
}

interface IPlayer {
	firstname: string;
	lastname: string;
	player_position_id: string;
	position: IPlayerPosition;
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

enum GOAL_TYPE {
	PENALTY = "PENALTY",
	OWN_GOAL = "OWN_GOAL",
	NORMAL_GOAL = "NORMAL_GOAL",
}

interface IMatchScorer {
	match_id: string;
	time: string;
	isBeyondLimitsPlayer: boolean;
	goal_type: GOAL_TYPE;
	// if isBeyondLimitsPlayer === player Id : player name
	scorer: IPlayer | string;
	// if isBeyondLimitsPlayer === player Id : player name
	assist: IPlayer | string;
}

interface IMatchTeam {
	team_id: string;
	team: ITeam;
	goals: number;
	stats: {
		passes: number;
		corners: number;
		shots: number;
		yellows: number;
		reds: number;
		penalty: number;
	};
}

export interface IMatch {
	round: string | number;
	competition_id: string;
	competition: ICompetition;
	home: ITeam;
	away: ITeam;
	date: string;
	time: string;
	venue: string;
	status: Match_status;
	lineup: ILineup;
	preview: {
		context: string;
		keyPlayer: IPlayer;
		aboutKeyPlayer: string;
	};
	report: {
		context: string;
		mvp: IPlayer;
		aboutMvp: string;
	};
	scorers: IMatchScorer[];
	form: {
		home: string[];
		away: string[];
	};
}
