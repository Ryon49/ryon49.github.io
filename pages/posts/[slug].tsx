import React from "react"
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType, { makeNavEntry } from "../../types/post"
import { getAllPosts, getPostBySlug, getRecentPosts } from "../../lib/api/post"
import RecentPosts from "../../components/recent-posts"
import Toc from "../../components/table-of-content"

type Props = {
  post: PostType
  content: string,
  recentPosts: PostType[]
}

function Post({
  post, content, recentPosts
}: Props) {
  const router = useRouter()
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />
  }

  return (
    <div id="main-wrapper">
      <div id="main">
        <div className="row">
          {/* core */}
          <div id="core-wrapper" className="col-12 col-lg-11 col-xl-8">
            <div className="post pl-1 pr-1 pl-sm-2 pr-sm-2 pl-md-4 pr-md-4">
              <div className="post-content" dangerouslySetInnerHTML={{ __html: content }} />
            </div>
          </div>
          {" "}
          {/* end #core-wrapper */}

          {/* pannel */}
          <div id="panel-wrapper" className="col-xl-3 pl-2 text-muted topbar-down">
            <div className="access">
              {/* side panel content */}
              <RecentPosts posts={recentPosts} />
            </div>
            <div id="toc-wrapper" className="pl-0 pr-4 mb-5">
              <div className="panel-heading pl-3 pt-2 mb-2">Table of Content</div>
              <Toc toc={post.toc!}></Toc>
            </div>
          </div>
          {" "}
          {/* end #panel-wrapper */}

        </div>
      </div>
    </div>
  )
}

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(`${params.slug}.md`)
  const recentPosts = getRecentPosts(process.env.most_recent as (number|undefined))

  const content = await markdownToHtml(post.content)

  return {
    props: {
      content,
      post,
      recentPosts,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts()
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
