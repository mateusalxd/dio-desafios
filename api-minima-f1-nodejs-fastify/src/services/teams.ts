import { teams } from "../database/data";

export async function getTeam(id: number): Promise<TeamDto | undefined> {
    const team = teams.find(t => t.id === id);
    if (team === undefined) {
        return undefined;
    }

    return { id: team.id, team_name: team.name, address: team.address };
}

export async function getAllTeams(): Promise<TeamDto[]> {
    return teams.map<TeamDto>(t => {
        return { id: t.id, team_name: t.name, address: t.address };
    });
}