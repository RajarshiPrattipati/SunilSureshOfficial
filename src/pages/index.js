import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Welcome to Sunil Suresh's Official Website!"
          subTitle="MC, Beatboxer, Entertainer Extraordinaire"
        />
        <BasicTextModule
          title="Need a spark to electrify your upcoming event?"
          content="With a wealth of experience and charisma, Sunil knows
            how to set the stage on fire, giving all age groups a once in a lifetime experience.
            Ready to take your event to the next level?"
          link="/products"
          linkText="View Past Events"
        />
        <Features
          title="Featured Events By Sunil."
          introduction="Check out all our successful events!"
        />
        <LatestPosts
          title="What Customers Are Saying"
          introduction="Hear directly from our happy clients!"
        />
      </Layout>
    </>
  )
}

export default Index
