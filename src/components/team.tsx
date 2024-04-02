import Image from "next/image"
import { GithubIcon, LinkedinIcon } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

type MainContributors = {
  name: string
  speciality: string
  email: string
  about?: string
}

export function CreatorsComponent(props: MainContributors) {
  return (
    <div className="flex w-[500px] max-w-full flex-col items-center justify-around rounded-xl border bg-secondary p-3 duration-300 hover:scale-110 hover:border-[#009efd]">
      <Avatar className="mx-2 h-32 w-32 rounded-full border border-gray-500 bg-primary-foreground">
        <AvatarImage
          src="https://utfs.io/f/064e5de1-7b54-4a1a-a86b-26df4b79c204-epgwbf.png"
          alt={props.name}
        />
        <AvatarFallback>RCSen</AvatarFallback>
      </Avatar>
      <div className="flex h-[170px] w-[350px] flex-col items-center justify-center overflow-y-hidden p-2">
        <span className="flex items-center space-x-3 text-xl">
          {props.name}
        </span>

        <span className="mb-4 text-muted-foreground">{props.email}</span>
        <span className="">{props.about}</span>
        <span className="mt-4 flex space-x-6 text-sm text-muted-foreground">
          <Image
            height={30}
            width={30}
            src={"/github.png"}
            alt="in"
            className="bg-white"
          />
          <Image height={30} width={30} src={"/linkedin.png"} alt="in" />
          <Image height={30} width={30} src={"/twitter.png"} alt="in" />
        </span>
      </div>
    </div>
  )
}
