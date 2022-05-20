// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from "cookie";

export default function handler(req, res) {
  // res.setCookie
  let options = {
    maxAge: 1000 * 60 * 15,
    httpOnly: true,
  };
  res.setHeader("Set-Cookie", serialize("Rifky", "dude", options));
  res.status(200).json({ name: "John Doe" });
}
