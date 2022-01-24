import React from "react"
import PostPreview from "../components/post-preview"
import RecentPosts from "../components/recent-posts"
import { getAllPosts, getRecentPosts } from "../lib/api/post"
import PostType from "../types/post"

type HomeProps = {
  allPosts: PostType[],
  recentPosts: PostType[]
}

function Home({ allPosts }: HomeProps) {
  return (
    <div id="main-wrapper">
      <div id="main">
        <div className="row">
          <CoreWrapper>
            {allPosts.map((p) => <PostPreview post={p} key={p.slug} />)}
          </CoreWrapper>
          <PanelWrapper>
            <RecentPosts posts={allPosts} />
          </PanelWrapper>
        </div>
      </div>
    </div>
  )
}

type Props = {
  children: React.ReactNode
}

const CoreWrapper = ({children}: Props) => {
  return (
    <div id="core-wrapper" className="col-12 col-lg-11 col-xl-8">
      <div id="post-list">
        {children}
      </div>
    </div>)
}

const PanelWrapper = ({children}: Props) => {
  return (
    <div id="panel-wrapper" className="col-xl-3 pl-2 text-muted topbar-down">
      <div className="access">
        {children}
      </div>
    </div>)
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts()

  return {
    props: { 
      allPosts,
      recentPosts: getRecentPosts()
    }
  }
}

export default Home
