// New Data Schema resource
const newSchema = a.schema({
  Season: a
    .model({
      season: a.string().required(),
      competitions: a.hasMany("Competition", "season_id"),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  Honor: a.model({
    competition_id: a.id().required(),
    competition: a.belongsTo("Competition", "competition_id"),
    trophy_image: a.string(),
    numbers_won: a.integer(),
    years_won: a.integer().array(),
    article_id: a.id(),
    article: a.belongsTo("Article", "article_id"),
  }),

  Competition: a
    .model({
      short_name: a.string().required(),
      long_name: a.string().required(),
      logo: a.string().required(),
      competition_type: a.enum(["LEAGUE", "CUP", "MIXEDCUP"]),
      season_id: a.id().required(),
      season: a.belongsTo("Season", "season_id"),
      matches: a.hasMany("Match", "competition_id"),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  League: a.model({
    competition_id: a.id().required(),
    competition: a.belongsTo("Competition", "competition_id"),
    standings: a.hasMany("StandingRow", "league_id"),
  }),

  StandingRow: a
    .model({
      league_id: a.id().required(),
      league: a.belongsTo("League", "league_id"),
      team_id: a.id().required(),
      team: a.belongsTo("Team", "team_id"),
      position: a.integer().required(),
      stats: a.customType({
        p: a.integer().required(),
        w: a.integer().required(),
        d: a.integer().required(),
        l: a.integer().required(),
        f: a.integer().required(),
        a: a.integer().required(),
        gd: a.string().required(),
        pts: a.integer().required(),
      }),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  Cup: a.model({
    competition_id: a.id().required(),
    competition: a.belongsTo("Competition", "competition_id"),
    playOffsRounds: a.id().array(),
  }),

  MixedCup: a
    .model({
      competition_id: a.id().required(),
      competition: a.belongsTo("Competition", "competition_id"),
      standing_id: a.id(),
      standing: a.hasOne("League", "league_id"),
      playOffsRounds: a.id().array(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  PlayOffsRound: a
    .model({
      round: a.enum([
        "1/32-finals",
        "1/16-finals",
        "1/8-finals",
        "QUATERFINALS",
        "SEMIFINALS",
        "THIRDPLACE",
        "FINAL",
      ]),
      matches: a.id().array().required(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  Match: a
    .model({
      round: a.string(),
      competition_id: a.id().required(),
      competition: a.belongsTo("Competition", "competition_id"),
      home: a.customType({
        team_id: a.id().required(),
        passes: a.integer(),
        offsides: a.integer(),
        corners: a.integer(),
        shots: a.integer(),
        shots_on_target: a.integer(),
        shots_off_target: a.integer(),
        goals: a.integer(),
        bookings: a.customType({
          yellow: a.integer(),
          red: a.integer(),
        }),
      }),
      away: a.customType({
        team_id: a.id().required(),
        passes: a.integer(),
        offsides: a.integer(),
        corners: a.integer(),
        shots: a.integer(),
        shots_on_target: a.integer(),
        shots_off_target: a.integer(),
        goals: a.integer(),
        bookings: a.customType({
          yellow: a.integer(),
          red: a.integer(),
        }),
      }),
      date: a.timestamp(),
      time: a.string(),
      venue: a.string().required(),
      status: a.enum(["UPCOMING", "FINISHED", "CANCELED"]),
      lineup: a.customType({
        starters: a.id().array().required(),
        substitutes: a.id().array().required(),
        coach: a.id().required(),
      }),
      preview: a.customType({
        context: a.string(),
        keyPlayer: a.id().required(),
        aboutKeyPlayer: a.string(),
      }),
      report: a.customType({
        context: a.string(),
        mvp: a.id().required(),
        aboutMvp: a.string(),
      }),
      scorers: a.hasMany("MatchScorer", "match_id"),
      form: a.customType({
        home: a.string().array().required(),
        away: a.string().array().required(),
      }),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  MatchScorer: a
    .model({
      match_id: a.id().required(),
      time: a.string().required(),
      player_team: a.enum(["BLFA", "OPPONENT"]),
      goal_type: a.enum(["PENALTY", "OWN GOAL", "NORMAL GOAL"]),
      // if playerType === opponent ? player name : player Id
      scorer: a.string().required(),
      // if playerType === opponent ? player name : player Id
      assist: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  PlayerPosition: a
    .model({
      short_name: a.string().required(),
      long_name: a.string().required(),
      attributes: a.string().array(),
      players: a.hasMany("Player", "player_position_id"),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  MatchStats: a
    .model({
      player_id: a.id().required(),
      match_id: a.id().required(),
      goals: a.integer(),
      assists: a.integer(),
      minutes_played: a.integer(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  Player: a
    .model({
      firstname: a.string().required(),
      lastname: a.string().required(),
      player_position_id: a.id().required(),
      position: a.hasOne("PlayerPosition", "player_position_id"),
      // get these stats from player position attributes and input in match positon
      general_match_stats: a.hasMany("MatchStats", "player_id"),
      position_match_stats: a.json().array(),
      squad_no: a.integer(),
      year_signed: a.integer(),
      dob: a.date(),
      height: a.integer(),
      weight: a.integer(),
      dominant_foot: a.enum(["LEFT", "RIGHT"]),
      isTwoFooted: a.boolean(),
      image_home_kit: a.string(),
      image_away_kit: a.string(),
      age_group: a.enum(["UNDER-17", "UNDER-19"]),
      status: a.enum(["LOANED", "ACTIVE", "INACTIVE"]),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  Team: a
    .model({
      short_name: a.string().required(),
      long_name: a.string().required(),
      logo: a.string().required(),
      isBeyondLimits: a.boolean().required(),
      stadium: a.string(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  ArticleCategory: a
    .model({
      name: a.string().required(),
      articles: a.hasMany("Article", "article_category_id"),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),

  Article: a
    .model({
      article_category_id: a.id().required(),
      category: a.belongsTo("ArticleCategory", "article_category_id"),
      cover_image: a.string(),
      title: a.string().required(),
      tags: a.string().array(),
      content: a.json().required(),
    })
    .authorization((allow) => [
      allow.guest().to(["read"]),
      allow.group("Admin").to(["create", "read", "update", "delete"]),
    ]),
});
