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
  description: string;
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
  season_id: string;
  season?: ISeason;
  standing?: string[] | IStandingRow[];
  main: string[] | IMatch[];
}

export interface ICup {
  id: string;
  competition_id: string;
  competition: ICompetition | string;
  playOffs: string[] | IMatch[];
}

export enum Playoffs_round {
  ROUND32 = "1/32-final",
  ROUND16 = "1/16-final",
  ROUND8 = "1/8-final",
  QUATERFINALS = "QUATERFINAL",
  SEMIFINALS = "SEMIFINAL",
  THIRDPLACE = "THIRDPLACE",
  FINALS = "FINAL",
}

export interface IMixedCup {
  id: string;
  competition_id: string;
  competition?: ICompetition;
  season_id: string;
  season?: ISeason;
  standing: string[] | IStandingRow[];
  main: string[] | IMatch[];
  playOffs: string[] | IMatch[];
}

export interface IStandingRow {
  id: string;
  competition_id: string;
  competition?: ICompetition;
  team_id: string;
  team?: ITeam;
  position: number;
  stats: {
    p: number;
    w: number;
    d: number;
    l: number;
    g: string;
    gd: number;
    pts: number;
  };
}

export enum Competition_type {
  LEAGUE = "LEAGUE",
  CUP = "CUP",
  MIXEDCUP = "MIXEDCUP",
}

export interface ICompetition {
  id: string;
  short_name: string;
  long_name: string;
  logo: string;
  competition_type: Competition_type;
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
  penalties?: number;
}

export interface IMatch {
  id: string;
  round: string | number;
  competition_id: string;
  competition?: ICompetition;
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
