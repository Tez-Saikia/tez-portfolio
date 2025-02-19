import React, { useState, useEffect } from "react";
import Loding from "../Loding/Loding";
import Nav from "../Nav/Nav";
import MainContent from "../MainContent/MainContent";
import Project from "../Project/Project";
import Footer from "../Footer/Footer";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen w-full">
      {loading && <Loding />}

      {/* Main content */}
      <div className={loading ? "hidden" : ""}>
        <div className="relative w-full">
          {/* Sticky container */}
          <div className="sticky top-0 z-10">
            <Nav />
            <MainContent />
          </div>

          {/* Project section */}
          <div className="relative pt-[7.6rem] sm:pt-[8rem] md:pt-[8rem] lg:pt-[8rem] xl:pt-[8rem] 2xl:pt-[10rem] z-20">
            <div className="project-cover z-20">
              <Project />

              {/* Footer */}
              <div className="xl:-mt-1 2xl:-mt-2">
                <Footer />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
