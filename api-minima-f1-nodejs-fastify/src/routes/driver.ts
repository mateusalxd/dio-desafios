import { FastifyInstance } from 'fastify';
import * as driverService from '../services/drivers';
import { handle200Or404 } from './handle-200-or-404';

export async function appDriverRoutes(fastify: FastifyInstance) {
    fastify.get('/drivers', async (_, response) => handle200Or404(response, await driverService.getAllDrivers()));

    fastify.get<{ Params: DriverParams }>('/drivers/:id', async (request, response) => {
        const id = parseInt(request.params.id);
        const driver = await driverService.getDriver(id);
        return handle200Or404(response, driver);
    });
};