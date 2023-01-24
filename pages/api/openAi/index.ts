import * as Config from "config";

function generatePrompt(animal: string) {
  // const capitalizedAnimal =
  //   animal[0].toUpperCase() + animal.slice(1).toLowerCase();
  // return capitalizedAnimal;
}
type Method = "GET" | "POST" | "PUT" | "DELETE";
type Http = [Method, string];

interface EndPoint {
  openAi: Http;
}

const endPoint: EndPoint = {
  openAi: ["POST", "/openAi"],
};

export default function handler(req, res) {
  // endPoint[req.method]

  return res.status(404).json({ message: "Not Found" });
}
