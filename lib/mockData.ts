
export interface Player {
  id: string;
  name: string;
  position: string;
  jerseyNumber: number;
  teamId: string;
}

export interface Team {
  id: string;
  name: string;
  logo: string;
  coach: string;
  foundedYear: number;
  village: string;
}

const TEAMS: Team[] = [
  {
    id: 't1',
    name: 'Mgbowo United',
    logo: '/images/teams/mgbowo-united.png',
    coach: 'John Doe',
    foundedYear: 2018,
    village: 'Mgbowo',
  },
  {
    id: 't2',
    name: 'Unity FC',
    logo: '/images/teams/unity-fc.png',
    coach: 'Jane Smith',
    foundedYear: 2019,
    village: 'Amata',
  },
  {
    id: 't3',
    name: 'Warriors FC',
    logo: '/images/teams/warriors-fc.png',
    coach: 'Mike Johnson',
    foundedYear: 2020,
    village: 'Inyi',
  },
];

const PLAYERS: Player[] = [
  { id: 'p1', name: 'Chinedu Obi', position: 'Forward', jerseyNumber: 9, teamId: 't1' },
  { id: 'p2', name: 'Emeka Eze', position: 'Midfielder', jerseyNumber: 10, teamId: 't1' },
  { id: 'p3', name: 'Sola Ade', position: 'Defender', jerseyNumber: 5, teamId: 't2' },
  { id: 'p4', name: 'Musa Ali', position: 'Goalkeeper', jerseyNumber: 1, teamId: 't2' },
  { id: 'p5', name: 'David Okon', position: 'Forward', jerseyNumber: 11, teamId: 't3' },
];

export const getTeams = async (): Promise<Team[]> => {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...TEAMS];
};

export const getTeamById = async (id: string): Promise<Team | undefined> => {
  await new Promise((resolve) => setTimeout(resolve, 300));
  return TEAMS.find((t) => t.id === id);
};

export const updateTeam = async (updatedTeam: Team): Promise<Team> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  const index = TEAMS.findIndex((t) => t.id === updatedTeam.id);
  if (index !== -1) {
    TEAMS[index] = updatedTeam;
    return updatedTeam;
  }
  throw new Error('Team not found');
};

export const getPlayers = async (): Promise<Player[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return [...PLAYERS];
};

export const getPlayersByTeam = async (teamId: string): Promise<Player[]> => {
  await new Promise((resolve) => setTimeout(resolve, 500));
  return PLAYERS.filter((p) => p.teamId === teamId);
};
