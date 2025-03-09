import {
  Age_group,
  Competition_type,
  Dominant_foot,
  Match_status,
  Player_status,
  Playoffs_round,
} from "./definitions";

export const visuals = [
  "/images/blvsig.png",
  "/images/contact.jpg",
  "/images/trophy-boy.jpg",
  "/images/home-header-bg.png",
  "/images/results.jpg",
  "/images/trials.png",
  "/images/results.jpg",
];

export const teams = [
  {
    id: "f7dccbf7-d187-465d-918f-7760444e839c",
    short_name: "blfa",
    long_name: "beyond limits fa",
    logo: "/images/beondimitslogo.png",
    isBeyondLimits: true,
    stadium: "Remo stars stadium",
  },
  {
    id: "07b1ea51-73a7-41eb-aae1-9dff2500d50a",
    short_name: "imfc",
    long_name: "imperial fc",
    logo: "/images/imperial_fc.png",
    isBeyondLimits: false,
    stadium: "surulere stadium",
  },
  {
    id: "8bc32940-d9a7-43c4-8af9-7313a7d8b9c1",
    short_name: "gfc",
    long_name: "gbagada fc",
    logo: "/images/gbagada_fc.png",
    isBeyondLimits: false,
    stadium: "gbagada stadium",
  },
  {
    id: "4cd32940-d9a7-43c4-4ac9-7313a7d8b9b2",
    short_name: "cc-u19",
    long_name: "carrarese u19",
    logo: "/images/carrarese_u19.png",
    isBeyondLimits: false,
    stadium: "Stadio dei Marmi",
  },
  {
    id: "2cd32920-d9a7-33d4-4ac9-7213b7d8b9b2",
    short_name: "f-u19",
    long_name: "fioretina u19",
    logo: "/images/fioretina_u19.png",
    isBeyondLimits: false,
    stadium: "Stadio Curva Fiesole - Viola Park",
  },
  {
    id: "2fd32420-d9b4-22c5-4ac9-7213b7d8b9b3",
    short_name: "cz-u19",
    long_name: "crvena-zvezda u19",
    logo: "/images/crvena-zvezda_u19.png",
    isBeyondLimits: false,
    stadium: "Rajko Mitić - Jug veštačka trava 4",
  },
  {
    id: "2cd42420-d9b4-32c5-4ac9-7213b7d8b9b3",
    short_name: "a-u19",
    long_name: "avellino u19",
    logo: "/images/avellino_u19.png",
    isBeyondLimits: false,
    stadium: "Stadio Partenio-Adriano Lombardi",
  },
  {
    id: "2cc42120-d9b4-32c5-4ad9-7214b7d8b9b3",
    short_name: "t-u19",
    long_name: "torino u19",
    logo: "/images/torino_u19.png",
    isBeyondLimits: false,
    stadium: "Stadio Valentino Mazzola",
  },
  {
    id: "2dc52120-d9b4-32c5-4ad9-3214b4d8b9b3",
    short_name: "oc-u19",
    long_name: "ojodu city u19",
    logo: "/images/ojodu-city_u19.png",
    isBeyondLimits: false,
    stadium: "Ojodu stadium",
  },
  {
    id: "2cc32121-d9b4-32c5-4ad9-3214b4d8b9b3",
    short_name: "b-u19",
    long_name: "brazzaville u19",
    logo: "/images/brazzaville_u19.png",
    isBeyondLimits: false,
    stadium: "",
  },
];

const similar_attributes = [
  "tackles",
  "interceptions",
  "deuls_won",
  "blocks",
  "clearance",
];

export const player_positions = [
  {
    id: "4ddb4b61-3b45-44b5-b21b-4ab385b8eb94",
    short_name: "gk",
    long_name: "goalkeeper",
    attributes: [
      "clean_sheat",
      "saves",
      "goals_conceded",
      "clearance",
      "successful_passes",
    ],
  },
  {
    id: "63650e97-8fcb-43ac-8e5a-3d1ca8904e38",
    short_name: "fb",
    long_name: "fullback",
    attributes: [...similar_attributes, "crosses", "dribbles"],
  },
  {
    id: "7622d8ad-708f-4ddb-90b0-e30cec744e7f",
    short_name: "cb",
    long_name: "central back",
    attributes: [...similar_attributes],
  },
  {
    id: "737aeebc-23c0-4811-8d65-3c42b6e5f25c",
    short_name: "dm",
    long_name: "defensive midfielder",
    attributes: [...similar_attributes, "successful_passes"],
  },
  {
    id: "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    short_name: "cm",
    long_name: "central midfielder",
    attributes: [
      ...similar_attributes,
      "successful_passes",
      "shots",
      "dribbles",
      "successful_dribbles",
    ],
  },
  {
    id: "ddbd8b40-892f-4e0a-9a0d-0c34584094c6",
    short_name: "am",
    long_name: "attacking midfielder",
    attributes: [
      "passes",
      "successful_passes",
      "shots",
      "dribbles",
      "successful_dribbles",
      "crosses",
      "successful_crosses",
    ],
  },
  {
    id: "ee636c92-087b-457d-9418-dccd90423838",
    short_name: "w",
    long_name: "winger",
    attributes: [
      "successful_passes",
      "shots",
      "dribbles",
      "successful_dribbles",
      "crosses",
      "successful_crosses",
    ],
  },
  {
    id: "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    short_name: "s",
    long_name: "striker",
    attributes: ["shots", "shots_on", "dribbles", "attacking_duels_won"],
  },
];

export const players = [
  {
    id: "055d368e-3f4d-4d12-903b-e4aac2633993",
    firstname: "John",
    lastname: "Doe",
    player_position_id: "4ddb4b61-3b45-44b5-b21b-4ab385b8eb94",
    position: player_positions.find(
      (el) => el.id === "4ddb4b61-3b45-44b5-b21b-4ab385b8eb94",
    ),
    general_match_stats: [],
    position_match_stats: [],
    squad_no: 1,
    year_signed: 2023,
    dob: "2007-3-10",
    height: 175,
    weight: 78,
    dominant_foot: Dominant_foot.RIGHT,
    isTwoFooted: true,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "2cc2934b-f7eb-47b5-af55-ecee0bbbe4a4",
    player_position_id: "737aeebc-23c0-4811-8d65-3c42b6e5f25c",
    position: player_positions.find(
      (el) => el.id === "737aeebc-23c0-4811-8d65-3c42b6e5f25c",
    ),
    squad_no: 4,
    firstname: "Seyi",
    lastname: "Olofin",
    year_signed: 2023,
    general_match_stats: [],
    position_match_stats: [],
    dob: "20012-5-2",
    height: 180,
    weight: 81,
    dominant_foot: Dominant_foot.RIGHT,
    isTwoFooted: true,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "cc8586e3-b78c-4680-ad20-7fe25f5398fb",
    firstname: "Emeka",
    lastname: "Ojiofor",
    player_position_id: "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    position: player_positions.find(
      (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    ),
    general_match_stats: [],
    position_match_stats: [],
    squad_no: 17,
    year_signed: 2023,
    dob: "2008-5-10",
    height: 170,
    weight: 75,
    dominant_foot: Dominant_foot.LEFT,
    isTwoFooted: false,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "cb8586e3-b78c-4680-ad20-7fe25f5398fb",
    firstname: "Okpala",
    lastname: "Uche",
    player_position_id: "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    position: player_positions.find(
      (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    ),
    general_match_stats: [],
    position_match_stats: [],
    squad_no: 18,
    year_signed: 2024,
    dob: "2008-5-10",
    height: 168,
    weight: 74,
    dominant_foot: Dominant_foot.LEFT,
    isTwoFooted: false,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "2b4586e3-b78c-4680-ad20-7fe25f5398fb",
    firstname: "Olamilekan",
    lastname: "Adegoyega",
    player_position_id: "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    position: player_positions.find(
      (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    ),
    general_match_stats: [],
    position_match_stats: [],
    squad_no: 17,
    year_signed: 2024,
    dob: "2011-5-10",
    height: 172,
    weight: 80,
    dominant_foot: Dominant_foot.RIGHT,
    isTwoFooted: false,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "2c4584e3-c78c-2680-ad20-7fe25f5398fb",
    firstname: "Taiwo-Cole",
    lastname: "Oyetunde",
    player_position_id: "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    position: player_positions.find(
      (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
    ),
    general_match_stats: [],
    position_match_stats: [],
    squad_no: 15,
    year_signed: 2023,
    dob: "2011-4-21",
    height: 175,
    weight: 75,
    dominant_foot: Dominant_foot.LEFT,
    isTwoFooted: false,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "3bc2934b-f7eb-47b5-af55-ecee0bbbe4a4",
    player_position_id: "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    position: player_positions.find(
      (el) => el.id === "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    ),
    squad_no: 7,
    firstname: "Aiyenugba",
    lastname: "Daniel",
    year_signed: 2024,
    general_match_stats: [],
    position_match_stats: [],
    dob: "20011-5-2",
    height: 170,
    weight: 82,
    dominant_foot: Dominant_foot.LEFT,
    isTwoFooted: true,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
    player_position_id: "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    position: player_positions.find(
      (el) => el.id === "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    ),
    squad_no: 9,
    firstname: "Aiyenugba",
    lastname: "Daniel",
    year_signed: 2024,
    general_match_stats: [],
    position_match_stats: [],
    dob: "20011-5-2",
    height: 170,
    weight: 82,
    dominant_foot: Dominant_foot.RIGHT,
    isTwoFooted: true,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
  {
    id: "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
    firstname: "Shina",
    lastname: "Ayodele",
    player_position_id: "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    position: player_positions.find(
      (el) => el.id === "3bc2934b-f7eb-47b5-af55-ecee0bbbe6a8",
    ),
    general_match_stats: [],
    position_match_stats: [],
    squad_no: 8,
    year_signed: 2023,
    dob: "2006-06-22",
    height: 175,
    weight: 75,
    dominant_foot: Dominant_foot.RIGHT,
    isTwoFooted: false,
    image_home_kit: "/images/player-1.png",
    image_away_kit: "/images/player-2.png",
    age_group: Age_group.UNDER_19,
    status: Player_status.ACTIVE,
  },
];

export const seasons = [
  {
    id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: "2024/2025",
  },
];

export const competitions = [
  {
    id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    short_name: "nnl",
    long_name: "nigerian national league",
    logo: "/images/nnl.png",
    competition_type: Competition_type.LEAGUE,
    season_id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: seasons.find(
      (el) => el.id === "2380576c-20d9-4d05-9a96-0735514f03fc",
    ),
  },
  {
    id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    short_name: "vc",
    long_name: "Viareggio cup",
    logo: "/images/vc.png",
    competition_type: Competition_type.MIXEDCUP,
    season_id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: seasons.find(
      (el) => el.id === "2380576c-20d9-4d05-9a96-0735514f03fc",
    ),
  },
];

export const standing = [
  {
    id: "f412b74a-e81b-491b-8ac3-15134192d0fd",
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions.find(
      (league) => league.id === "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    ),
    team_id: "f7dccbf7-d187-465d-918f-7760444e839c",
    team: teams.find(
      (team) => team.id === "f7dccbf7-d187-465d-918f-7760444e839c",
    ),
    position: 2,
    stats: {
      p: 12,
      w: 10,
      d: 2,
      l: 0,
      g: "15:10",
      gd: 5,
      pts: 32,
    },
  },
  {
    id: "1dc23f0e-0704-4457-94ca-ef6e1efda117",
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions.find(
      (league) => league.id === "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    ),
    team_id: "07b1ea51-73a7-41eb-aae1-9dff2500d50a",
    team: teams.find(
      (team) => team.id === "07b1ea51-73a7-41eb-aae1-9dff2500d50a",
    ),
    position: 1,
    stats: {
      p: 12,
      w: 11,
      d: 1,
      l: 0,
      g: "15:10",
      gd: 5,
      pts: 34,
    },
  },
  {
    id: "1dc23f0e-0704-4457-94ca-ef6e1efda117",
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions.find(
      (league) => league.id === "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    ),
    team_id: "8bc32940-d9a7-43c4-8af9-7313a7d8b9c1",
    team: teams.find(
      (team) => team.id === "8bc32940-d9a7-43c4-8af9-7313a7d8b9c1",
    ),
    position: 3,
    stats: {
      p: 12,
      w: 9,
      d: 1,
      l: 2,
      g: "14:9",
      gd: 5,
      pts: 28,
    },
  },
  {
    id: "2cc23f0e-1504-3427-94ca-bf6e1efda117",
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (league) => league.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    team_id: "f7dccbf7-d187-465d-918f-7760444e839c",
    team: teams.find(
      (team) => team.id === "f7dccbf7-d187-465d-918f-7760444e839c",
    ),
    position: 1,
    stats: {
      p: 3,
      w: 3,
      d: 0,
      l: 0,
      g: "15:4",
      gd: 11,
      pts: 9,
    },
  },
  {
    id: "3dd13e0e-1504-2427-44ca-bf6e1efda117",
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (league) => league.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    team_id: "2cd32920-d9a7-33d4-4ac9-7213b7d8b9b2",
    team: teams.find(
      (team) => team.id === "2cd32920-d9a7-33d4-4ac9-7213b7d8b9b2",
    ),
    position: 2,
    stats: {
      p: 3,
      w: 2,
      d: 0,
      l: 1,
      g: "11:7",
      gd: 5,
      pts: 6,
    },
  },
  {
    id: "2cd13e0b-1504-2327-44ca-bf6e1efda117",
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (league) => league.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    team_id: "4cd32940-d9a7-43c4-4ac9-7313a7d8b9b2",
    team: teams.find(
      (team) => team.id === "4cd32940-d9a7-43c4-4ac9-7313a7d8b9b2",
    ),
    position: 4,
    stats: {
      p: 3,
      w: 0,
      d: 0,
      l: 3,
      g: "2:13",
      gd: -11,
      pts: 0,
    },
  },
  {
    id: "2bc13e0b-1504-2428-44ca-bf6e1efda117",
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (league) => league.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    team_id: "2fd32420-d9b4-22c5-4ac9-7213b7d8b9b3",
    team: teams.find(
      (team) => team.id === "2fd32420-d9b4-22c5-4ac9-7213b7d8b9b3",
    ),
    position: 3,
    stats: {
      p: 3,
      w: 1,
      d: 0,
      l: 2,
      g: "5:9",
      gd: -4,
      pts: 3,
    },
  },
];

export const leagues = [
  {
    id: "f7d227c5-ca5b-4f6c-844c-efe898960c3a",
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions.find(
      (compe) => compe.id === "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    ),
    standing: standing.filter(
      (el) => el.competition_id === "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    ),
    main: [
      "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
      "c42ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ],
  },
];

export const mixed_cups = [
  {
    id: "2412b73a-e81b-451b-8ac3-15134192d0fd",
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    standing: standing.filter(
      (el) => el.competition_id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    main: [
      "c42ae10f-1c1f-46b4-abe6-4bba3891fc43",
      "242be10f-1c1f-46b4-abe6-7fba3891fc45",
      "252ce10f-2c1f-46b4-abe6-7fba3891fc45",
    ],
    playOffs: [
      "232ce11f-2c1f-46b4-abe6-7fba3491cc45",
      "215ce12c-2c1f-43b4-abe6-7fba3891fc45",
      "223ce11c-2d1f-46c4-abe6-2fba3891fc45",
      "224ce11c-2d1f-46c4-abe6-2fba3891fc42",
    ],
  },
];

// p w d l gd g pts

const getMatchTeam = (
  team_id: string,
  goals?: number,
  stats?: {
    passes: number;
    corners: number;
    shots: number;
    yellows: number;
    reds: number;
  },
  penalties?: number,
) => {
  return {
    team_id: team_id,
    team: teams.find((el) => el.id === team_id),
    goals: goals || 0,
    stats: {
      passes: stats?.passes || 0,
      corners: stats?.corners || 0,
      shots: stats?.shots || 0,
      yellows: stats?.yellows || 0,
      reds: stats?.reds || 0,
    },
    penalties: penalties,
  };
};

const lineup = {
  starters: players.slice(0, 11),
  substitutes: players.slice(0, 5),
  coach: {
    name: "Ogundeye godwin",
    role: "coach",
    image: "/images/coach.png",
  },
};

export const matches = [
  {
    id: "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    round: 5,
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions[0],
    home: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c"),
    away: getMatchTeam("07b1ea51-73a7-41eb-aae1-9dff2500d50a"),
    date: "2025-4-15",
    time: "10:00 am",
    venue: "remo stars stadium",
    status: Match_status.UPCOMING,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and imperifal fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
      ),
      aboutKeyPlayer: "He is a cool boy",
    },
    report: {
      context: "",
      // mvp: "",
      aboutMvp: "",
    },
    // scorers: "",
    form: {
      home: ["w", "w", "d", "w"],
      away: ["w", "l", "d", "w"],
    },
  },
  {
    id: "c42ae10f-1c1f-46b4-abe6-7fba3891fc45",
    round: 6,
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions[0],
    home: getMatchTeam("8bc32940-d9a7-43c4-8af9-7313a7d8b9c1", 2, {
      passes: 23,
      corners: 6,
      yellows: 5,
      reds: 0,
      shots: 13,
    }),
    away: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 4, {
      passes: 43,
      corners: 14,
      yellows: 2,
      reds: 0,
      shots: 18,
    }),
    date: "2025-5-10",
    time: "9:30 am",
    venue: "Ifako stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
      ),
      aboutKeyPlayer: "He is a cool boy",
    },
    report: {
      context: "The match was a really tough one",
      mvp: players.find(
        (el) => el.id === "cb8586e3-b78c-4680-ad20-7fe25f5398fb",
      ),
      aboutMvp: "He played hsi heart out",
    },
    scorers: [
      {
        time: "23rd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Ajayi sogunde",
        assist: "Emmanuel Loel",
      },
      {
        time: "33rd",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Oju Larry",
        assist: "",
      },
      {
        time: "65th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Ajayi sogunde",
        assist: "Emmanuel Loel",
      },
    ],
    form: {
      home: ["w", "w", "l", "w"],
      away: ["w", "w", "w", "l"],
    },
  },
  // matches for viareggio
  {
    id: "c42ae10f-1c1f-46b4-abe6-4bba3891fc43",
    round: 1,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("4cd32940-d9a7-43c4-4ac9-7313a7d8b9b2", 0, {
      passes: 200,
      corners: 6,
      yellows: 5,
      reds: 0,
      shots: 13,
    }),
    away: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 6, {
      passes: 243,
      corners: 12,
      yellows: 2,
      reds: 0,
      shots: 18,
    }),
    date: "2024-02-12",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "1st",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "6th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Olamilekan Adegoyega",
        assist: "",
      },
      {
        time: "13th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "37th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "69th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Adebayo Dikko",
        assist: "",
      },
      {
        time: "82nd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Shina Ayodele",
        assist: "",
      },
    ],
    form: {
      home: [],
      away: [],
    },
  },
  {
    id: "242be10f-1c1f-46b4-abe6-7fba3891fc45",
    round: 2,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("4cd32940-d9a7-43c4-4ac9-7313a7d8b9b2", 0, {
      passes: 220,
      corners: 2,
      yellows: 3,
      reds: 0,
      shots: 13,
    }),
    away: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 3, {
      passes: 343,
      corners: 12,
      yellows: 0,
      reds: 0,
      shots: 14,
    }),
    date: "2024-02-14",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "63rd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "71st",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Olamilekan Adegoyega",
        assist: "",
      },
      {
        time: "83rd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
    ],
    form: {
      home: ["l"],
      away: ["w"],
    },
  },
  {
    id: "252ce10f-2c1f-46b4-abe6-7fba3891fc45",
    round: 3,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 6, {
      passes: 420,
      corners: 9,
      yellows: 4,
      reds: 0,
      shots: 22,
    }),
    away: getMatchTeam("2cd32920-d9a7-33d4-4ac9-7213b7d8b9b2", 4, {
      passes: 243,
      corners: 10,
      yellows: 2,
      reds: 0,
      shots: 18,
    }),
    date: "2024-02-16",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "4th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "6th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Olamilekan Adegoyega",
        assist: "",
      },
      {
        time: "11th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Isaac Chukwudi",
        assist: "",
      },
      {
        time: "38th",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Giorgio Puzzoli",
        assist: "",
      },
      {
        time: "39th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Oliundare",
        assist: "",
      },
      {
        time: "50th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Oliundare",
        assist: "",
      },
      {
        time: "59th",
        isBeyondLimitsPlayer: true,
        goal_type: "penalty",
        name: "Oliundare",
        assist: "",
      },
      {
        time: "61st",
        isBeyondLimitsPlayer: false,
        goal_type: "penalty",
        name: "Giorgio Puzzoli",
        assist: "",
      },
      {
        time: "78th",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Stefano Maiorana",
        assist: "",
      },
      {
        time: "83rd",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Niccolo Generali",
        assist: "",
      },
    ],
    form: {
      home: ["w", "w"],
      away: ["w", "w"],
    },
  },
  {
    id: "232ce11f-2c1f-46b4-abe6-7fba3491cc45",
    round: Playoffs_round.ROUND8,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 3, {
      passes: 320,
      corners: 9,
      yellows: 2,
      reds: 0,
      shots: 15,
    }),
    away: getMatchTeam("2cd42420-d9b4-32c5-4ac9-7213b7d8b9b3", 1, {
      passes: 243,
      corners: 5,
      yellows: 4,
      reds: 0,
      shots: 10,
    }),
    date: "2024-02-20",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "18th",
        isBeyondLimitsPlayer: false,
        goal_type: "own goal",
        name: "Alessandro Lanzone",
        assist: "",
      },
      {
        time: "54th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Isaac Chukwudi",
        assist: "",
      },
      {
        time: "60th",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Francesco Palamara",
        assist: "",
      },
      {
        time: "93rd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Shina Ayodele",
        assist: "",
      },
    ],
    form: {
      home: ["w", "w", "w"],
      away: ["l", "d", "w"],
    },
  },
  {
    id: "215ce12c-2c1f-43b4-abe6-7fba3891fc45",
    round: Playoffs_round.QUATERFINALS,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("2cc42120-d9b4-32c5-4ad9-7214b7d8b9b3", 1, {
      passes: 320,
      corners: 9,
      yellows: 2,
      reds: 0,
      shots: 6,
    }),
    away: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 2, {
      passes: 343,
      corners: 12,
      yellows: 4,
      reds: 0,
      shots: 9,
    }),
    date: "2024-02-22",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "7th",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Simone Armocida",
        assist: "",
      },
      {
        time: "30th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Adebayo Dikko",
        assist: "",
      },
      {
        time: "54th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Shina Ayodele",
        assist: "",
      },
    ],
    form: {
      home: ["w", "w", "d", "w"],
      away: ["w", "w", "w", "w"],
    },
  },
  {
    id: "223ce11c-2d1f-46c4-abe6-2fba3891fc45",
    round: Playoffs_round.SEMIFINALS,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 2, {
      passes: 370,
      corners: 9,
      yellows: 2,
      reds: 0,
      shots: 6,
    }),
    away: getMatchTeam("2dc52120-d9b4-32c5-4ad9-3214b4d8b9b3", 1, {
      passes: 323,
      corners: 12,
      yellows: 4,
      reds: 0,
      shots: 9,
    }),
    date: "2024-02-24",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "3rd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "14th",
        isBeyondLimitsPlayer: false,
        goal_type: "normal goal",
        name: "Ibrahim",
        assist: "",
      },

      {
        time: "53rd",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Isaac Chukwudi",
        assist: "",
      },
    ],
    form: {
      home: ["w", "w", "w", "w", "w"],
      away: ["w", "l", "w", "w", "w"],
    },
  },
  {
    id: "224ce11c-2d1f-46c4-abe6-2fba3891fc42",
    round: Playoffs_round.FINALS,
    competition_id: "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    competition: competitions.find(
      (el) => el.id === "bc3ae20f-1f1f-46b4-abe6-7fba3891fc42",
    ),
    home: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c", 2, {
      passes: 370,
      corners: 12,
      yellows: 2,
      reds: 0,
      shots: 16,
    }),
    away: getMatchTeam("2cc32121-d9b4-32c5-4ad9-3214b4d8b9b3", 0, {
      passes: 223,
      corners: 12,
      yellows: 4,
      reds: 0,
      shots: 9,
    }),
    date: "2024-02-24",
    time: "3:00 pm",
    venue: "Italy stadium",
    status: Match_status.FINISHED,
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and gbagada fc is going to be tough",
      keyPlayer: players.find(
        (el) => el.id === "2cc2934b-f7bb-27c5-af35-ecee0bbbe4a4",
      ),
      aboutKeyPlayer:
        "He is a joy to watch, i expect him to get some goals today",
    },
    report: {
      context: "It was a beautiful match which beautiful memories",
      mvp: players.find(
        (el) => el.id === "2b4584d3-c78c-2480-ad20-7fe25f5398fb",
      ),
      aboutMvp: `He was a joy to watch. He bagged a hatrick and left with the match ball, 
      not only that he also left with the people's heart.`,
    },
    scorers: [
      {
        time: "18th",
        isBeyondLimitsPlayer: true,
        goal_type: "normal goal",
        name: "Kparobo Ariehri",
        assist: "",
      },
      {
        time: "27th",
        isBeyondLimitsPlayer: false,
        goal_type: "own goal",
        name: "Christian Gloire Mafoulou",
        assist: "",
      },
    ],
    form: {
      home: ["w", "w", "w", "w", "w", "w"],
      away: ["w", "l", "d", "w", "w", "w"],
    },
  },
];

export const socials = [
  {
    id: 21,
    link: "https://x.com/beyond_limitsfa?s=11&t=a_AA_bkBcHWDpD2WBldopQ",
    icon: "/images/pajamas_twitter.svg",
    name: "Twitter",
  },
  {
    id: 22,
    link: "https://www.instagram.com/beyondlimits_fa?igsh=MXdiM3gwaTBkNGd5Yg==",
    icon: "/images/bi_instagram.svg",
    name: "Twitter",
  },
  {
    id: 23,
    link: "https://x.com/beyond_limitsfa?s=11&t=a_AA_bkBcHWDpD2WBldopQ",
    icon: "/images/ph_tiktok-logo.svg",
    name: "Tiktok",
  },
  {
    id: 24,
    link: "https://youtube.com/@beyondlimitsfootballacadem7276?si=UrDiLOAy9c6j8jDM",
    icon: "/images/ant-design_youtube-outlined.svg",
    name: "Youtube",
  },
];

export const article_categories = [
  {
    id: "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    name: "CLUB NEWS",
  },
  {
    id: "bb3a4a86-a091-4099-be7a-2e1b061e340b",
    name: "MATCH REPORT",
  },
  {
    id: "dd2a4a86-a091-4099-be7a-2e1b061e340b",
    name: "MATCH PREVIEW",
  },
];

export const articles = [
  {
    id: "cc3a4a86-a091-4099-be7a-2e1b061e340b",
    title:
      "Beyond Limits FA Earns Promotion to NNL After 4-0 Victory Over First Bank FC",
    createdAt: "2024-06-15",
    cover_image: "/images/winners.jpg",
    article_category_id: "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    category: article_categories.find(
      (el) => el.id === "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
    tags: ["hello", "world"],
  },
  {
    id: "bc2a4a86-a091-4099-be7a-2e1b061e330a",
    article_category_id: "bb3a4a86-a091-4099-be7a-2e1b061e340b",
    category: article_categories.find(
      (el) => el.id === "bb3a4a86-a091-4099-be7a-2e1b061e340b",
    ),
    title:
      "Beyond Limits FA Stuns Imperial FC with Dramatic 2-1 Comeback in Season Opener",
    createdAt: "2024-06-01",
    cover_image: "/images/trophy-boy.jpg",
    match: matches.find(
      (el) => el.id === "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
    tags: ["hello", "world"],
  },
  {
    id: "cc3a4a86-a093-3099-be7a-2e1b061e331a",
    article_category_id: "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    category: article_categories.find(
      (el) => el.id === "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    ),
    title:
      "Academy Breaks Records with 10-Game Unbeaten Streak, Securing Place in NNL",
    createdAt: "2024-05-28",
    cover_image: "/images/results.jpg",
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
    tags: ["hello", "world"],
  },
  {
    id: "dd3a4a86-a091-4099-be7a-2e1b061e330a",
    article_category_id: "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    category: article_categories.find(
      (el) => el.id === "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    ),
    title:
      "End of Season Gala: Beyond Limits FA Celebrates Success with Players and Coaches",
    createdAt: "2024-05-20",
    cover_image: "/images/teamstats.jpg",
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
    tags: ["hello", "world"],
  },
  {
    id: "cc3a4a86-a091-4099-be7a-2e1b061e23ab",
    article_category_id: "bb3a4a86-a091-4099-be7a-2e1b061e340C",
    category: article_categories.find(
      (el) => el.id === "bb3a4a86-a091-4099-be7a-2e1b061e340c",
    ),
    title:
      "Beyond Limits Academy Wins Thrilling Cup Final Against Local Rivals in 3-2 Victory",
    createdAt: "2024-05-15",
    cover_image: "/images/honors.jpg",
    match: matches.find(
      (el) => el.id === "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
    tags: ["hello", "world"],
  },
  {
    id: "cc3a4a86-a091-2149-be7a-2e1b061e330c",
    article_category_id: "dd2a4a86-a091-4099-be7a-2e1b061e340b",
    category: article_categories.find(
      (el) => el.id === "dd2a4a86-a091-4099-be7a-2e1b061e340b",
    ),
    title:
      "Beyond Limits FA Stuns Imperial FC with Dramatic 2-1 Comeback in Season Opener",
    createdAt: "2024-06-01",
    cover_image: "/images/trophy-boy.jpg",
    match: matches.find(
      (el) => el.id === "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
    tags: ["hello", "world"],
  },
];

export const match_highlights = [
  {
    id: 12,
    title: "TCC 24|25 MD1 : BEYOND LIMITS FA VS IGANMU TIGERS",
    date: "2024-01-10",
    thumbnail: "/images/blvsig.png",
    videoUrl: "https://www.youtube.com/watch?v=oVy2zUmq1DA&t=2s",
  },
  {
    id: 13,
    title: "PRESEASON FRIENDLY MATCH: BLFA 2-1 BENDEL INSURANCE",
    date: "2024-01-05",
    thumbnail: "/images/keep.png",
    videoUrl: "https://www.youtube.com/watch?v=RvyFQolhGUg",
  },
  {
    id: 14,
    title: "GOTHIA CUP 2024: BEYOND LIMITS U17 Vs ROSENBORG U17",
    date: "2024-01-03",
    thumbnail: "/images/keep.png",
    videoUrl: "https://www.youtube.com/watch?v=xxfZcnZx5h0",
  },
  {
    id: 4,
    title: "TV Post 4",
    date: "2024-09-27",
    videoUrl: "https://www.youtube.com/watch?v=oVy2zUmq1DA",
    thumbnail: "/images/ongame.png",
  },
];

export const honors = [
  {
    competition: { short: "NNL", long: "Nigerian National League" },
    trophy: "/images/nnl-trophy.png",
    numbers_won: 1,
    years: [2024],
    article_id: 3,
  },
  {
    competition: { short: "VC", long: "Viareggio cup" },
    trophy: "/images/vc-trophy.png",
    numbers_won: 1,
    years: [2024],
    article_id: 3,
  },
  {
    competition: { short: "tccc", long: "The Creative Championship cup" },
    trophy: "/images/tccc-trophy.png",
    numbers_won: 1,
    years: [2023, 2024],
    article_id: 3,
  },
  {
    competition: { short: "tccl", long: "The Creative Championship league" },
    trophy: "/images/tccl-trophy.png",
    numbers_won: 1,
    years: [2024],
    article_id: 3,
  },
];
