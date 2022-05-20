// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from "cookie";

export default function handler(req, res) {
  // res.setCookie
  console.log("cookie", req.cookies);
  res.send(req.cookies);
}
