
export interface Player {
  id: string;
  playerName: string;
  phoneNumber: string;
  fatherVillage: string;
  motherVillage: string;
  village: string;
  team: string;
  position: string;
  jerseyNumber: number;
  teamId: string;
  passport?: string;
}

export interface Team {
  id: string;
  _id: string;
  teamName: string;
  logo: string;
  coachName: string;
  foundedYear: number;
  paid: boolean;
  village: string;
}

const TEAMS: Team[] = [
  {
    id: 't1',
    _id: 't1',
    teamName: 'Mgbowo United',
    logo: '/images/teams/mgbowo-united.png',
    coachName: 'John Doe',
    foundedYear: 2018,
    paid: true,
    village: 'Mgbowo',
  },
  {
    id: 't2',
    _id: 't2',
    teamName: 'Unity FC',
    logo: '/images/teams/unity-fc.png',
    coachName: 'Jane Smith',
    foundedYear: 2019,
    paid: true,
    village: 'Amata',
  },
  {
    id: 't3',
    _id: 't3',
    teamName: 'Warriors FC',
    logo: '/images/teams/warriors-fc.png',
    coachName: 'Mike Johnson',
    foundedYear: 2020,
    paid: true,
    village: 'Inyi',
  },
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

