/* Get the last 5 posts from lastmod list.
 * But to avoid displaying same title twice, posts will 
 * contain 6 entries
*/

import Link from "next/link"
import React from "react"
import PostType from "../types/post"

type Props = {
  posts: PostType[]
}

function RecentPosts({ posts }: Props) {
  return <div id="access-lastmod" className="post">
  <div className="panel-heading">Recently Updated</div>
  <ul className="post-content pl-0 pb-1 ml-1 mt-2">
    {
      posts.map((post, i) => <li key={i}><Link href={`/posts/${post.slug}`}><a title={post.title}>{post.title}</a></Link></li>)
    }
  </ul>
</div>
}

export default RecentPosts
