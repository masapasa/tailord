import { NextSeo } from "next-seo";
import Link from "next/link";
import { FaDiscord, FaGithub, FaSpotify } from "react-icons/fa";
import Age from "../components/Age";
import Contact from "../components/Contact";
import TimeStatus from "../components/TimeStatus";

export default function About() {
  return (
    <>
      <NextSeo
        title="About | Zacchary Puckeridge"
        description="Learn more about Zacchary Puckeridge"
      />
      <div className="grid place-items-center">
        <div className="mt-20 flex flex-col justify-center items-start max-w-2xl border-gray-200 dark:border-gray-700 mx-auto pb-16">
          <h1 className="font-bold text-3xl md:text-5xl tracking-tight text-black dark:text-white">
            🤔 About me
          </h1>
          <p className="mt-4">
            Hey there! {"We are"} a <Age /> year old IT Adminstration & Web
            Development company based out of Berlin, Germany. Currently, {"We are"}{" "}
            working on a biomedical project in managing wounds.
          </p>
          <div>
            <h5 className="text-2xl font-bold mt-4 mb-4">What do you do?</h5>
            <div>
              <p>
                Currently, {"We are"} building tools to automate various processes
               for our project as well as designing and deploying networking solutions.
              </p>
              <p className="mt-4">
                {" "}
                When {"We are"} not communicating with our clients, or working on a personal project,{" "}
                {"We are"} developing new tools to automate and simplify your IT projects.
              </p>
            </div>
            <h5 className="text-2xl font-bold mt-4 mb-4">
              Want to get in touch?
            </h5>
            <div>
              <div className="flex gap-4">
                <Contact />
                <div className="dark:bg-white/5 border border-zinc-800/50 w-1/3 rounded-lg p-4">
                  <Link href="https://github.com/masapasa">
                    <button className="p-2 mb-2 w-full bg-white dark:bg-white/5 border border-zinc-800/50 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
                      <FaGithub className="w-6 h-6 mr-1" /> GitHub
                    </button>
                  </Link>
                  <Link href="https://open.spotify.com/user/oid25p8bf0jm4zfezkf765o03?si=f67b4f43e7fa4620">
                    <button className="p-2 mb-2 w-full bg-white dark:bg-white/5 border border-zinc-800/50 rounded-lg flex items-center justify-center hover:ring-2 ring-gray-300 transition-all">
                      <FaSpotify className="w-6 h-6 mr-1" /> Spotify
                    </button>
                  </Link>
                  <div className="p-2 mb-2 w-full bg-white dark:bg-white/5 border border-zinc-800/50 rounded-lg flex items-center justify-center">
                    <FaDiscord className="w-6 h-6 mr-1" /> sdelta#0001
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 justify-center flex">
              <TimeStatus />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
