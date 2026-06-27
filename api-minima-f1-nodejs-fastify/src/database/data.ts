const drivers: Driver[] = [
    { id: 1, id_team: 1, name: "Lando Norris" },
    { id: 2, id_team: 1, name: "Oscar Piastri" },
    { id: 3, id_team: 2, name: "Charles Leclerc" },
    { id: 4, id_team: 2, name: "Lewis Hamilton" },
    { id: 5, id_team: 3, name: "Max Verstappen" },
    { id: 6, id_team: 3, name: "Isack Hadjar" },
    { id: 7, id_team: 4, name: "George Russell" },
    { id: 8, id_team: 4, name: "Kimi Antonelli" },
    { id: 9, id_team: 5, name: "Fernando Alonso" },
    { id: 10, id_team: 5, name: "Lance Stroll" },
    { id: 11, id_team: 6, name: "Pierre Gasly" },
    { id: 12, id_team: 6, name: "Franco Colapinto" },
    { id: 13, id_team: 7, name: "Esteban Ocon" },
    { id: 14, id_team: 7, name: "Oliver Bearman" },
    { id: 15, id_team: 8, name: "Liam Lawson" },
    { id: 16, id_team: 8, name: "Arvid Lindblad" },
    { id: 17, id_team: 9, name: "Carlos Sainz" },
    { id: 18, id_team: 9, name: "Alex Albon" },
    { id: 19, id_team: 10, name: "Nico Hülkenberg" },
    { id: 20, id_team: 10, name: "Gabriel Bortoleto" },
    { id: 21, id_team: 11, name: "Sergio Pérez" },
    { id: 22, id_team: 11, name: "Valtteri Bottas" }
];

const teams: Team[] = [
    { id: 1, name: "McLaren Formula 1 Team", address: "Woking, Surrey, United Kingdom" },
    { id: 2, name: "Scuderia Ferrari", address: "Maranello, Modena, Italy" },
    { id: 3, name: "Oracle Red Bull Racing", address: "Milton Keynes, Buckinghamshire, United Kingdom" },
    { id: 4, name: "Mercedes-AMG Petronas F1 Team", address: "Brackley, Northamptonshire, United Kingdom" },
    { id: 5, name: "Aston Martin Aramco F1 Team", address: "Silverstone, Northamptonshire, United Kingdom" },
    { id: 6, name: "Alpine F1 Team", address: "Enstone, Oxfordshire, United Kingdom" },
    { id: 7, name: "MoneyGram Haas F1 Team", address: "Kannapolis, North Carolina, USA" },
    { id: 8, name: "Visa Cash App Racing Bulls", address: "Faenza, Ravenna, Italy" },
    { id: 9, name: "Williams Racing", address: "Grove, Oxfordshire, United Kingdom" },
    { id: 10, name: "Audi F1 Team", address: "Hinwil, Zürich, Switzerland" },
    { id: 11, name: "Cadillac F1 Team", address: "Wilmington, Delaware, USA" }
];

const teamNames = teams.reduce<Record<number, string>>((acc, team) => {
    acc[team.id] = team.name
    return acc
}, {});

export {
    drivers,
    teams,
    teamNames,
}