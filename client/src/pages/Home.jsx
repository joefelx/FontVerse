import { Font, FontAbout, FontLayout } from "../components";

function Home() {
  return (
    <div className="h-auto w-full bg-lightwhite">
      <Font />
      {/* About the font section */}
      <FontAbout />
      {/* Layout */}
      <FontLayout />
    </div>
  );
}

export default Home;
