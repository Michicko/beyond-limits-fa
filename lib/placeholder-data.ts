import {
  Age_group,
  Article_Cateory,
  Competition_type,
  Dominant_foot,
  Match_status,
  Player_status,
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
];

const seasons = [
  {
    id: "2380576c-20d9-4d05-9a96-0735514f03fc",
    season: "2024/2025",
  },
];

export const standing = [
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
    competition_type: Competition_type.LEAGUE,
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
      passes: 24,
      corners: 12,
      shots: 25,
      yellows: 4,
      reds: 0,
      penalty: 0,
    },
  };
};

const lineup = {
  starters: [...players],
  substitutes: [...players],
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
      mvp: players.find(
        (el) => el.id === "cc3a4a86-a091-4099-be7a-2e1b061e330a",
      ),
      aboutMvp: "",
    },
    scorers: null,
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

export const articles = [
  {
    id: "cc3a4a86-a091-4099-be7a-2e1b061e340b",
    title:
      "Beyond Limits FA Earns Promotion to NNL After 4-0 Victory Over First Bank FC",
    createdAt: "2024-06-15",
    image: "/images/winners.jpg",
    category: Article_Cateory.CLUB_NEWS,
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
  },
  {
    id: "bc2a4a86-a091-4099-be7a-2e1b061e330a",
    category: Article_Cateory.MATCH_REPORT,
    title:
      "Beyond Limits FA Stuns Imperial FC with Dramatic 2-1 Comeback in Season Opener",
    createdAt: "2024-06-01",
    image: "/images/trophy-boy.jpg",
    match: matches.find(
      (el) => el.id === "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
  },
  {
    id: "cc3a4a86-a093-3099-be7a-2e1b061e331a",
    category: Article_Cateory.CLUB_NEWS,
    title:
      "Academy Breaks Records with 10-Game Unbeaten Streak, Securing Place in NNL",
    createdAt: "2024-05-28",
    image: "/images/results.jpg",
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
  },
  {
    id: "dd3a4a86-a091-4099-be7a-2e1b061e330a",
    category: Article_Cateory.CLUB_NEWS,
    title:
      "End of Season Gala: Beyond Limits FA Celebrates Success with Players and Coaches",
    createdAt: "2024-05-20",
    image: "/images/teamstats.jpg",
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
  },
  {
    id: "cc3a4a86-a091-4099-be7a-2e1b061e23ab",
    category: Article_Cateory.MATCH_REPORT,
    title:
      "Beyond Limits Academy Wins Thrilling Cup Final Against Local Rivals in 3-2 Victory",
    createdAt: "2024-05-15",
    image: "/images/honors.jpg",
    match: matches.find(
      (el) => el.id === "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
  },
  {
    id: "cc3a4a86-a091-2149-be7a-2e1b061e330c",
    category: Article_Cateory.MATCH_PREVIEW,
    title:
      "Beyond Limits FA Stuns Imperial FC with Dramatic 2-1 Comeback in Season Opener",
    createdAt: "2024-06-01",
    image: "/images/trophy-boy.jpg",
    match: matches.find(
      (el) => el.id === "d55ae10f-1c1f-46b4-abe6-7fba3891fc45",
    ),
    content: `
      <h1>What is going on</h1>
      <p>Today we're going to discuss about the beautiful game of football. I know you must 
      have heared about this over and over again</p>
      <p>We are going to discuss Beyond Limits.</p>
      `,
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
