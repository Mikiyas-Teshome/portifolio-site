import Card from "../components/Card";
import profilePic from "../assets/profilePic.png";
import sign from "../assets/sign.png";
import bekurMockup from "../assets/bekurMockup.jpg";
import BlogIcon from "../icons/BlogIcon";
import ImageCard from "../components/ImageCard";

const HomePage = () => {
  return (
    <div className="container mt-10 ">
      <div className="grid gap-8 lg:grid-cols-2">
        {/* First Main Column */}
        <Card className="flex flex-row gap-4 p-12 justify-center items-center">
          <img
            src={profilePic}
            width={200}
            height={200}
            className="rounded-tl-3xl rounded-br-3xl object-contain shadow-lg§"
          />
          <div className="flex flex-col ">
            <p className="text-md font-medium  text-base-content/50">
              Full-Stack Developer
            </p>

            <h1 className="text-3xl font-semibold mb-2 ">Mikiyas</h1>
            <h1 className="text-3xl font-semibold mb-4 ">Teshome</h1>
            <p className="p-0 m-0">
              I'm a full-stack developer based in Ethiopia
            </p>
          </div>
        </Card>

        {/* Second Main Column with Nested Grid */}
        <div className="grid gap-4">
          {/* First Row of Second Column */}
          {/* <Card className="p-4" isIconVissible={false}>
            <p>This is the first row within the second main co</p>
          </Card> */}
          <div className=" overflow-hidden container rounded-full shadow-md  bg-gradient-to-tl from-base-200 to-base-300 h-15 flex items-center">
            <div className=" whitespace-nowrap top-1/2 left-1/2  ">
              <div className="flex animate-carousel text-base-content/60">
                <span className="scroll-item text-lg font-regular mx-4">
                  * Android Development
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * Fluter
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * NodeJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * NestJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * NextJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * ReactJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * UI/UX Design
                </span>
                {/* second */}

                <span className="scroll-item text-lg font-regular mx-4">
                  * Android Development
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * Fluter
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * NodeJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * NestJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * NextJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * ReactJs
                </span>
                <span className="scroll-item text-lg font-regular mx-3">
                  * UI/UX Design
                </span>
              </div>
            </div>
          </div>
          {/* Second Row of Second Column with Two Columns */}
          <div className="grid gap-4 sm:grid-cols-2">
            {/* <Card className="p-6">
              <img src={sign} className="w-auto h-auto px-12 mb-4" />
              <h3 className="text-md font-medium uppercase mb-1 p-0 text-base-content/40">
                More about me
              </h3>

              <h3 className="text-lg font-semibold mb-2 p-0">Credentials</h3>
            </Card> */}
            {/* <Card className="p-6">
              <img src={bekurMockup} className="w-auto h-auto px-12 mb-4" />

              <h3 className="text-md font-medium uppercase mb-1 p-0 text-base-content/40">
                Showcase
              </h3>

              <h3 className="text-lg font-semibold mb-2 p-0">Projects</h3>
            </Card> */}
            <ImageCard title="More about me" subtitle="Credentials">
              <img src={sign} className="w-auto h-auto px-12 mb-4" />
            </ImageCard>

            <ImageCard title="Projects" subtitle="Showcase">
              <img src={bekurMockup} className="w-auto h-auto px-12 mb-4" />
            </ImageCard>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-12 gap-4">
        <div className=" lg:col-span-3">
          <ImageCard title="Blog" subtitle="My Contents" className="mt-6">
            <div className="flex justify-center items-center mx-5 mb-5">
              <BlogIcon color="text-base-content/75" />
            </div>
          </ImageCard>
        </div>
        <div className=" lg:col-span-6">
          <ImageCard title="Blog" subtitle="My Contents" className="mt-6">
            <div className="flex justify-center items-center mx-5 mb-5">
              <BlogIcon color="text-base-content/75" />
            </div>
          </ImageCard>
        </div>
        <div className="lg:col-span-3 ">
          <ImageCard title="Blog" subtitle="My Contents" className="mt-6">
            <div className="flex justify-center items-center mx-5 mb-5">
              <BlogIcon color="text-base-content/75" />
            </div>
          </ImageCard>
        </div>
      </div>
    </div>
  );
};

// https://brandfetch.com/nestjs.com?view=library&library=default&collection=logos&asset=id4Zjs7PVZ
export default HomePage;
