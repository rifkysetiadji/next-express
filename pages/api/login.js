// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from "cookie";

export default function handler(req, res) {
  // res.setCookie
  let options = {
    maxAge: 1000 * 60 * 15,
    httpOnly: true,
    // domain: ".next-express-swart.vercel.app",
  };
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "https://react-cookie.vercel.app"
  // );
  res.setHeader("Set-Cookie", serialize("Rifky", "dude", options));
  res.status(200).json({ name: "John Doe asdf" });
}
