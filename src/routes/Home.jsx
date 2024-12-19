import Destinations from "../components/home/Destinations";
import DownLoadApp from "../components/home/DownLoadApp";
import Properties from "../components/home/Properties";
import Hero from "./../components/home/Hero";
import Why from "./../components/home/Why";

export default function Home() {
  return (
    <>
      <Hero />
      <Destinations />
      <Properties />
      <Why />
      <DownLoadApp />
    </>
  );
}
