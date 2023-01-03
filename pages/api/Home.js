// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prodactHome from "../../Data/prodacts/Home";

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(prodactHome);
    console.log("hello world! Get");
  } else if (req.method === "POST") {
    console.log(req.body.dataPush);
    const data = req.body.dataPush;
    const newCard = {
      id: Date.now(),
      ...data
    };
    prodactHome.push(newCard);
    res.status(201).json(newCard);
  }
}
