const server = Bun.serve({
  port: process.env.PORT ?? 3000,
  async fetch(req) {
    console.log(`Received request: ${req.method} ${req.url}`);
    return new Response("Hello, Bun!!!");
  },
});

console.log(`Server running at http://localhost:${server.port}/`);
