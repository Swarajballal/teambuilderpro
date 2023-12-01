import { useState, useEffect } from "react";
import Container from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { HeartHandshake } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import  HeroBannerLoading  from "@/components/ui/HeroBannerLoading"


const Home = () => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  })

  return (
    <Container>
       {loading ? (
        <HeroBannerLoading />
      ) : (
      <div className="space-y-10 pb-10">
        <div className="p-4 sm:p-6 lg:p-8 rounded-lg overflow-hidden">
          <div
            className={`bg-[url('img/hero-banner.jpg')] rounded-lg relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover bg-center`}
            onLoad={() => setImgLoaded(true)}
          >
            {!imgLoaded && <Skeleton />}
            <div className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8">
              <div className="font-bold text-3xl sm:text-5xl lg:text-6xl sm:max-w-xl max-w-xs text-black dark:text-white bg-secondary/60 p-4 rounded-lg">
                Create a new Team
                <Button size="lg" className="w-full py-6 text-xl">
                  <HeartHandshake className="mr-2" />
                  Click here to start 
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      )}
    </Container>
  );
};

export default Home;
