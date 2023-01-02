// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import prodactHome from "../../Data/prodacts/Home";

export default function handler(req, res) {
  res.status(200).json(prodactHome)
}
