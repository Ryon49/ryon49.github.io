import React from "react"
import PostPreview from "../components/post-preview"
import RecentPosts from "../components/recent-posts"
import { getAllPosts } from "../lib/api/post"
import PostType from "../types/post"

type Props = {
  allPosts: PostType[]
}

function Home({ allPosts }: Props) {
  return (
    <div id="main-wrapper">
      <div id="main">
        <div className="row">
          {/* core */}
          <div id="core-wrapper" className="col-12 col-lg-11 col-xl-8">
            <div id="post-list">
              {allPosts.map((p) => <PostPreview post={p} key={p.slug} />)}
            </div>
          </div>
          {" "}
          {/* end #core-wrapper */}

          {/* pannel */}
          <div id="panel-wrapper" className="col-xl-3 pl-2 text-muted topbar-down">
            <div className="access">
              {/* side panel content */}
              <RecentPosts allPosts={allPosts} />
            </div>
          </div>
          {" "}
          {/* end #panel-wrapper */}
        </div>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(["slug", "date", "title", "content", "categories", "pin"])

  return {
    props: { allPosts },
  }
}

export default Home
