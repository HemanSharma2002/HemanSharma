import Card from "@/components/Card";
import { AvatarIcon, BoxIcon, BoxModelIcon, ChevronRightIcon, CodeIcon, GitHubLogoIcon, HomeIcon, InstagramLogoIcon, LinkedInLogoIcon, VideoIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className=" text-white bg-slate-900">
      <nav className=" p-2 flex flex-row justify-between px-8">
        <div className=" flex flex-row gap-3">
          <p className=" h-5 w-5 text-green-500 rounded-full"><BoxModelIcon className=" w-[25px] h-[25px]" /></p>
          <p className=" h-5 w-5 text-green-500 rounded-full"><BoxModelIcon className=" w-[25px] h-[25px]" /></p>
        </div>
        <div>
          <Link href={`https://mail.google.com/mail/u/0/?to=hemansharma2002@gmail.com&fs=1&tf=cm`} className=" flex flex-row gap-3 bg-green-500 rounded-md p-1 px-3">
            <AvatarIcon className=" w-[25px] h-[25px]" />
            <p>Contact</p>
          </Link>
        </div>
      </nav>
      <div className=" flex flex-row h-[900px]">
        <div className=" w-1/6 md:w-1/5 p-3 flex flex-col gap-3 ">
          <div className=" p-2 bg-slate-800 h-full rounded-md">
            <div className=" flex flex-col md:ml-3">
              <Link href={`#`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <HomeIcon className=" w-[25px] h-[25px]" />
                <p className=" hidden md:block">Home</p>
              </Link>
              <Link href={`https://github.com/HemanSharma2002`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <CodeIcon className=" w-[25px] h-[25px]" />
                <p className=" hidden md:block">Snipets</p>
              </Link>
              <Link href={`#`}  className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <VideoIcon className=" w-[25px] h-[25px]" />
                <p className=" hidden md:block">Videos</p>
              </Link>
              <Link href={`https://leetcode.com/u/HemanSharma/`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <BoxIcon className=" w-[25px] h-[25px]" />
                <p className=" hidden md:block">Trending</p>
              </Link>
            </div>
            <p className=" text-lg md:block hidden">Socials</p>
            <div className=" flex flex-col md:ml-3">
              <Link href={`https://www.instagram.com/heman.sharma_/?igsh=MXFubGltcnMzdHV0dg%3D%3D`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <InstagramLogoIcon className=" w-[25px] h-[25px] text-purple-800" />
                <p className=" hidden md:block">Instagram</p>
              </Link>
              <Link href={`https://github.com/HemanSharma2002`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <GitHubLogoIcon className=" w-[25px] h-[25px] " />
                <p className=" hidden md:block">Github</p>
              </Link>
              <Link href={`https://www.linkedin.com/in/heman-sharma-6a60b0203/`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <LinkedInLogoIcon className=" w-[25px] h-[25px] text-blue-500" />
                <p className=" hidden md:block">Linkedin</p>
              </Link>
              <Link href={`https://leetcode.com/u/HemanSharma/`} className=" flex flex-row gap-4 pt-3 pb-3 hover:pt-2 hover:pb-4 duration-150">
                <CodeIcon className=" w-[25px] h-[25px] text-yellow-400" />
                <p className=" hidden md:block">Leetcode</p>
              </Link>
            </div>
          </div>
          <div>

          </div>
        </div>
        <div className=" w-5/6 md:w-4/5 p-4 h-full overflow-y-scroll  flex flex-col gap-3">
          <div className=" h-60 rounded-md  flex items-center gap-5 p-2 bg-slate-800 w-full">
            <div className=" flex flex-row justify-between gap-2 w-full md:px-10">
              <div className=" h-36 w-36">
                <img className=" w-full h-full rounded-full" src="https://avatars.githubusercontent.com/u/101355643?v=4" alt="Github image" />
              </div>
              <div className=" pt-10  text-slate-800 font-bold">
                <p className=" text-2xl text-white">Heman Sharma</p>
                
              </div>
            </div>
          </div>
          {/* projects */}
          <p className=" text-2xl ">Worked on</p>
          <div className=" p-3 flex flex-wrap gap-12">
            <Card title="Spring Store" frontend="Next JS , Tailwind CSS , Material UI ,Shad CN & Typescript" backend=" Spring Boot & My SQL" image="https://i.postimg.cc/MTF0TKYq/Spring-Store-Logo.png" frontendLink="https://github.com/HemanSharma2002/EcommerseFrontEnd-NextJS" backendLink="https://github.com/HemanSharma2002/Ecom-Backend-Java-SpringBoot" />
            <Card title="Anynomus Message" frontend="Next JS , ZOD , Shad CN , Tailwind CSS & Typescript" backend="Next JS & Mongoo DB" image="https://cdn-icons-png.flaticon.com/512/1990/1990486.png" frontendLink="https://github.com/HemanSharma2002/AnynomusMessage" backendLink="https://github.com/HemanSharma2002/AnynomusMessage"/>
            <Card image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSGsF4YHIvQyou0IldLPWzDVihV03k0i-Pag&s" title="Multiuser Todo Application" frontend="React JS & Tailwind CSS" backend="My SQL , Spring Boot & JWT" />
          </div>
          {/* skills */}
          <p className=" text-2xl ">Skills</p>
          <div className=" flex flex-wrap gap-3 justify-center md:justify-start">
            <div className=" flex flex-col bg-slate-800 rounded-md w-56 h-60 p-3 gap-6 text-gray-400">
              <p className=" text-lg">Front End</p>
              <div className=" flex flex-wrap gap-2 text-sm">
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">React JS</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Next JS</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Tailwind CSS</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md">Javascript</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Typescript</p>
              </div>
            </div>
            <div className=" flex flex-col bg-slate-800 rounded-md w-56 h-60 p-3 gap-6 text-gray-400">
              <p className=" text-lg">Back End</p>
              <div className=" flex flex-wrap gap-3 text-sm">
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Spring Boot</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Next JS</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Hibernate</p>
              </div>
            </div>
            <div className=" flex flex-col bg-slate-800 rounded-md w-56 h-60 p-3 gap-6 text-gray-400">
              <p className=" text-lg">Database</p>
              <div className=" flex flex-wrap gap-3 text-sm">
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">My SQL</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md">Postgress</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md">Mongoo DB</p>
              </div>
            </div>
            <div className=" flex flex-col bg-slate-800 rounded-md w-56 h-60 p-3 gap-6 text-gray-400">
              <p className=" text-lg">Devops</p>
              <div className=" flex flex-wrap gap-3 text-sm">
                <p className=" bg-slate-950  p-2 px-3 rounded-md">Docker</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">GIT</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md">AWS</p>
                <p className=" bg-slate-950  p-2 px-3 rounded-md border-2 border-yellow-600">Vercel</p>
              </div>
            </div>
            <div className=" flex flex-col bg-slate-800 rounded-md w-56 min-h-60 p-3 gap-6 text-gray-400">
              <p className=" text-lg">More Projects</p>
              <div className=" flex flex-wrap gap-3 text-sm">
                <div className=" bg-slate-950 py-3  p-2 px-3 rounded-md   flex flex-row gap-2 items-center">Password Generator <ChevronRightIcon/></div>
                <div className=" bg-slate-950 py-3  p-2 px-3 rounded-md   flex flex-row gap-2 items-center">Color Change Application<ChevronRightIcon/></div>
                <div className=" bg-slate-950 py-3  p-2 px-3 rounded-md   flex flex-row gap-2 items-center">Currency Convertor<ChevronRightIcon/></div>
                <div className=" bg-slate-950 py-3  p-2 px-3 rounded-md   flex flex-row gap-2 items-center">Others<ChevronRightIcon/></div>
              </div>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </main >
  );
}
