// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { serialize } from "cookie";

export default function handler(req, res) {
  // res.setCookie
  console.log("cookie", req.cookies);
  // res.setHeader(
  //   "Access-Control-Allow-Origin",
  //   "https://react-cookie.vercel.app"
  // );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type,X-Requested-With"
  );
  res.send(req.cookies);
}
