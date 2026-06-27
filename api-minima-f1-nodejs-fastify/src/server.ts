import fastify from "fastify";
import { appDriverRoutes } from "./routes/driver";
import { appTeamRoutes } from "./routes/team";

const server = fastify({ logger: true });
server.register(appDriverRoutes);
server.register(appTeamRoutes);

server.listen({ port: 3000 }, (err) => {
    if (err) {
        server.log.error(err.message);
    } else {
        server.log.info('Server started');
    }
});