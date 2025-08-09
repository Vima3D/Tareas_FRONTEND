import { defineConfig } from "vite";
import type { IncomingMessage, ServerResponse } from "http";

export default defineConfig({
  plugins: [
    {
      name: "custom-middleware",
      configureServer(server) {
        server.middlewares.use(
          (req: IncomingMessage, res: ServerResponse, next) => {
            const url = req.url ?? "";

            if (url.startsWith("/characters")) {
              const auth = req.headers.authorization;

              if (auth !== "Bearer mi-token-falso-123") {
                res.statusCode = 401;
                res.setHeader("Content-Type", "application/json");
                res.end(
                  JSON.stringify({ error: "No autorizado - token inválido" })
                );
                return;
              }

              res.setHeader("Content-Type", "application/json");
              res.end(
                JSON.stringify({
                  characters: [
                    {
                      id: 1,
                      name: "Naruto Uzumaki",
                      images: [
                        "https://static.wikia.nocookie.net/naruto/images/d/d6/Naruto_Part_I.png",
                      ],
                      personal: { birthdate: "October 10", clan: "Uzumaki" },
                    },
                    {
                      id: 2,
                      name: "Sasuke Uchiha",
                      images: [
                        "https://static.wikia.nocookie.net/naruto/images/2/21/Sasuke_Part_1.png",
                      ],
                      personal: { birthdate: "July 23", clan: "Uchiha" },
                    },
                  ],
                })
              );

              return;
            }

            next();
          }
        );
      },
    },
  ],
});
