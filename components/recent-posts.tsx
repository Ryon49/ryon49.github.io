import React from "react"
import PostType from "../types/post"

type Props = {
  allPosts: PostType[]
}

function RecentPosts({ allPosts }: Props) {
  return <div>{allPosts.length}</div>
}

export default RecentPosts
