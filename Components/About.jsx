import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4"> Who I am</h2>
          <p className="py-2 text-gray-600">
            I am a motivated student with professional experience as a frontend
            web developer, combining my studies at Ghana Communication
            Technology University. Have excellent prioritization and
            interpersonal skills .
          </p>
          <p className="py-2 text-gray-600">
            I am skilled in HTML(5),CSS(3), Javascript,Tailwind CSS, Next.js,
            and React.js. I have been learning about various technologies and
            staying up with emerging market trends and advancements.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-cenrer justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            src="/../public/assets/about.jpg"
            alt="/"
            width="500"
            height="100"
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
