import { FastifyInstance } from 'fastify';
import * as teamService from '../services/teams';
import { handle200Or404 } from './handle-200-or-404';

export async function appTeamRoutes(fastify: FastifyInstance) {
    fastify.get('/teams', async (_, response) => handle200Or404(response, await teamService.getAllTeams()));

    fastify.get<{ Params: TeamParams }>('/teams/:id', async (request, response) => {
        const id = parseInt(request.params.id);
        const team = await teamService.getTeam(id);
        return handle200Or404(response, team);
    });
};