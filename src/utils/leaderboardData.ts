
export interface LeaderboardEntry {
  id: number;
  username: string;
  score: number;
  level: number;
  date: string;
  avatar: string;
}

export const leaderboardData: LeaderboardEntry[] = [
  {
    id: 1,
    username: "PixelChamp",
    score: 147,
    level: 12,
    date: "2023-10-15",
    avatar: "P"
  },
  {
    id: 2,
    username: "RetroKing",
    score: 142,
    level: 11,
    date: "2023-10-12",
    avatar: "R"
  },
  {
    id: 3,
    username: "FootballWizard",
    score: 139,
    level: 10,
    date: "2023-10-14",
    avatar: "F"
  },
  {
    id: 4,
    username: "GameMaster99",
    score: 135,
    level: 9,
    date: "2023-10-11",
    avatar: "G"
  },
  {
    id: 5,
    username: "RetroRunner",
    score: 133,
    level: 9,
    date: "2023-10-13",
    avatar: "R"
  },
  {
    id: 6,
    username: "PixelPlayer",
    score: 129,
    level: 8,
    date: "2023-10-10",
    avatar: "P"
  },
  {
    id: 7,
    username: "TouchdownTitan",
    score: 125,
    level: 8,
    date: "2023-10-09",
    avatar: "T"
  },
  {
    id: 8,
    username: "8BitAthlete",
    score: 123,
    level: 7,
    date: "2023-10-08",
    avatar: "8"
  },
  {
    id: 9,
    username: "ClassicGamer",
    score: 118,
    level: 7,
    date: "2023-10-07",
    avatar: "C"
  },
  {
    id: 10,
    username: "FieldGeneral",
    score: 115,
    level: 6,
    date: "2023-10-06",
    avatar: "F"
  }
];
