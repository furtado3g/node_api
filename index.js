import { createServer } from "node:http";

const PORT = 3000;

createServer(async (req, res) => {
  const headers = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "*",
  };
  console.log(req.url);
  if (req.url === "/api/v1/users") {
    let header = {
        'Content-Type':'application/json',
        ...headers
    }
    res.writeHead(200, headers);
    res.end(
      JSON.stringify([
        {
          id: 1,
          name: "Lucas Furtado",
          email: "lucas.furtado@gmail.com",
        },
      ])
    );
    return;
  } else if (req.method === "OPTIONS") {
    res.writeHead(204, headers);
    res.end();
    return;
  } else {
    res.writeHead(200, headers);
    res.end(JSON.stringify({ message: "OK" }));
  }
})
  .listen(PORT)
  .on("listening", () => {
    console.log("listening on port " + PORT);
  });
