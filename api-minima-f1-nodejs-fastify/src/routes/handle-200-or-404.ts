import { FastifyReply } from "fastify";

export async function handle200Or404(response: FastifyReply, payload: any) {
    response.type('application/json');
    if (payload === undefined) {
        response.code(404);
        return response.send({ 'message': 'not found' });
    }
    response.code(200);
    return response.send(payload);
}