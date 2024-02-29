const fastify = await require('fastify')({
    https: {
        key: fastify.readFileSync('server.key'),    // Chemin vers la clé privée
        cert: fastify.readFileSync('server.cert')   // Chemin vers le certificat
    }
});

fastify.get('/', (request, reply) => {
    reply.send({ message: 'Hello, world!' });
});

fastify.listen(3000, (err, address) => {
    if (err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Serveur Fastify écoutant sur ${address}`);
});
