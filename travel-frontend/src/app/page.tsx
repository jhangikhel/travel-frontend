import Image from "next/image";
import styles from "./page.module.css";


export default function Home() {
  return (
    <div className="container">
      <h1 className="text-primary">Welcome to my Next.js app</h1>
      <button className="btn btn-primary">Click me</button>
    </div>
  );
}
