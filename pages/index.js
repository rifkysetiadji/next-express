import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import axios from "axios";
export default function Home() {
  const onRequest = () => {
    axios.post("/api/login").then((res) => {
      console.log("res", res);
    });
  };

  const onSendBack = () => {
    axios.get("/api/get", { withCredentials: true }).then((res) => {
      console.log("res", res);
    });
  };
  return (
    <div className="App">
      <button onClick={onRequest}>Login</button>
      <button onClick={onSendBack}>Get Some data</button>
    </div>
  );
}
