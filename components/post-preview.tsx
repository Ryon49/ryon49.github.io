import React from "react"
import Link from "next/link"
import PostType from "../types/post"
// import TimeToRead from "./time-to-read"
import DateCreated from "./time-created"

type Props = {
  post: PostType
}

function PostPreview({ post } : Props) {
  return (
    <div className="post-preview">
      <h1>
        <Link href={`/posts/${post.slug}`}><a>{post.title}</a></Link>
      </h1>
      <div className="post-content">
        <p>
          {post.content.substring(0, 200)}
        </p>
      </div>

      <div className="post-meta text-muted d-flex">

        <div className="mr-auto">
          {/* posted date */}
          <i className="far fa-calendar fa-fw" />
          <DateCreated date={post.date} />

          {/* time to read */}
          {/* <i className="far fa-clock fa-fw"></i>
          <TimeToRead length={post.content.length} /> */}

          {/* categories */}
          {/* { post.categories && <>
              <i className="far fa-folder-open fa-fw"></i>
              <span>{post.categories.join(", ")}</span>
            </>
          } */}
        </div>

        {post.pin && (
        <div className="pin">
          <i className="fas fa-thumbtack fa-fw" />
          <span>Pinned</span>
        </div>
        )}
      </div>
    </div>
  )
}

export default PostPreview
