
import Banner from "./components/Banner/Banner";

import HomeSection from "./components/Home/Home";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <main >
      <Banner />
      <HomeSection />
    </main>
  );
}
