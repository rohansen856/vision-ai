import Link from "next/link"

import { env } from "@/env.mjs"
import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { CreatorsComponent } from "@/components/team"

export default async function TeamPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-x-hidden flex flex-col items-center">
        <h1 className="font-heading text-3xl sm:text-5xl md:text-6xl lg:text-7xl">
          Team Members.
        </h1>
        <p className="max-w-2xl leading-normal text-muted-foreground sm:text-xl sm:leading-8">
          Core members of the vision ai team
        </p>
        <div className="w-full m-6 flex justify-center items-center gap-12 pt-16">
          <CreatorsComponent
            name="Rohan Chandra Sen"
            speciality="ui/ux, backend"
            email="rohansen856@gmail.com"
            about="A fullstack react and flutter developer with extensive knowledge in ui/ux developement"
          />
          <CreatorsComponent
            name="Rohan Chandra Sen"
            speciality="ui/ux, backend"
            email="rohansen856@gmail.com"
            about="A fullstack react and flutter developer with extensive knowledge in ui/ux developement"
          />
        </div>
      </section>
    </>
  )
}
