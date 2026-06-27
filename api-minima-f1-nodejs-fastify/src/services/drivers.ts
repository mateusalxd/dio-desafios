import { drivers, teamNames } from "../database/data";

export async function getDriver(id: number): Promise<DriverDto | undefined> {
    const driver = drivers.find(d => d.id === id);
    if (driver === undefined) {
        return undefined;
    }

    return { id: driver.id, driver_name: driver.name, team_name: teamNames[driver.id_team] };
}

export async function getAllDrivers(): Promise<DriverDto[]> {
    return drivers.map<DriverDto>(d => {
        return { id: d.id, driver_name: d.name, team_name: teamNames[d.id_team] };
    });
}