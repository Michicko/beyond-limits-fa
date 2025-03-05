export const visuals = [
  "/images/blvsig.png",
  "/images/contact.jpg",
  "/images/trophy-boy.jpg",
  "/images/home-header-bg.png",
  "/images/results.jpg",
  "/images/trials.png",
  "/images/results.jpg",
];

const teams = [
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
];

const similar_attributes = [
  "tackles",
  "interceptions",
  "deuls_won",
  "blocks",
  "clearance",
];

const player_positions = [
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

const players = [
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
    dominant_foot: "left",
    isTwoFooted: true,
    image_home_kit: "",
    image_away_kit: "",
    age_group: "under-19",
    status: "active",
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
    dominant_foot: "right",
    isTwoFooted: false,
    image_home_kit: "",
    image_away_kit: "",
    age_group: "under-19",
    status: "active",
  },
];

const seasons = [
  {
    id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: "2024/2025",
  },
];

const standing = [
  {
    id: "f412b74a-e81b-491b-8ac3-15134192d0fd",
    league_id: "f7d227c5-ca5b-4f6c-844c-efe898960c3a",
    league: "",
    team_id: "f7dccbf7-d187-465d-918f-7760444e839c",
    team: teams.find((el) => el.id === "f7dccbf7-d187-465d-918f-7760444e839c"),
    position: 2,
    stats: {
      p: 12,
      w: 10,
      d: 2,
      l: 0,
      f: 15,
      a: 10,
      gd: "15:10",
      pts: 32,
    },
  },
  {
    id: "1dc23f0e-0704-4457-94ca-ef6e1efda117",
    league_id: "f7d227c5-ca5b-4f6c-844c-efe898960c3a",
    league: "",
    team_id: "07b1ea51-73a7-41eb-aae1-9dff2500d50a",
    team: teams.find((el) => el.id === "07b1ea51-73a7-41eb-aae1-9dff2500d50a"),
    position: 1,
    stats: {
      p: 12,
      w: 11,
      d: 1,
      l: 0,
      f: 15,
      a: 10,
      gd: "15:10",
      pts: 34,
    },
  },
  {
    id: "1dc23f0e-0704-4457-94ca-ef6e1efda117",
    league_id: "f7d227c5-ca5b-4f6c-844c-efe898960c3a",
    league: "",
    team_id: "8bc32940-d9a7-43c4-8af9-7313a7d8b9c1",
    team: teams.find((el) => el.id === "8bc32940-d9a7-43c4-8af9-7313a7d8b9c1"),
    position: 3,
    stats: {
      p: 12,
      w: 9,
      d: 1,
      l: 2,
      f: 14,
      a: 9,
      gd: "14:9",
      pts: 28,
    },
  },
];

const competitions = [
  {
    id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    short_name: "nnl",
    long_name: "nigerian national league",
    logo: "/images/nnl.png",
    competition_type: "league",
    season_id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: seasons[0],
  },
];

const leagues = [
  {
    id: "f7d227c5-ca5b-4f6c-844c-efe898960c3a",
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions.find(
      (el) => el.id === "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    ),
    standings: standing,
  },
];

const getMatchTeam = (team_id: string) => {
  return {
    team_id: team_id,
    team: teams.find((el) => el.id === team_id),
    goals: 0,
    stats: {
      passes: "",
      corners: "",
      shots: "",
      yellows: "",
      reds: "",
      penalty: "",
    },
  };
};

const lineup = {
  starters: [...players],
  substitutes: [...players],
  coach: {
    name: "Ogundeye godwin",
    role: "coach",
  },
};

export const matches = [
  {
    round: 5,
    competition_id: "cd5ae10f-1f1f-46b4-abe6-7fba3891fc45",
    competition: competitions[0],
    home: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c"),
    away: getMatchTeam("f7dccbf7-d187-465d-918f-7760444e839c"),
    date: "2025-4-15",
    time: "10:00 am",
    venue: "remo stars stadium",
    status: "upcoming",
    lineup: lineup,
    preview: {
      context:
        "Match between beyon limits fa and imperifal fc is going to be tough",
      keyPlayer: "cc3a4a86-a091-4099-be7a-2e1b061e330a",
      aboutKeyPlayer: "He is a cool boy",
    },
    report: {
      context: "",
      mvp: "",
      aboutMvp: "",
    },
    scorers: "",
    form: {
      home: ["w", "w", "d", "w"],
      away: ["w", "l", "d", "w"],
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
