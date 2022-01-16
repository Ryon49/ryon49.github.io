import React from "react"
import { useRouter } from "next/router"
import ErrorPage from "next/error"
import markdownToHtml from "../../lib/markdownToHtml"
import PostType from "../../types/post"
import { getAllPosts, getPostBySlug } from "../../lib/api/post"
import RecentPosts from "../../components/recent-posts"

type Props = {
  post: PostType
  content: string,
  allPosts: PostType[]
}

function Post({
  post, allPosts, content,
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

export default Post

type Params = {
  params: {
    slug: string
  }
}

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(`${params.slug}.md`, ["slug", "date", "title", "excerpt", "content", "categories", "pin"])
  const allPosts = getAllPosts(["slug"])

  const content = await markdownToHtml(post.content)

  return {
    props: {
      allPosts,
      content,
      post,
    },
  }
}

export async function getStaticPaths() {
  const posts = getAllPosts(["slug"])
  return {
    paths: posts.map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  }
}
