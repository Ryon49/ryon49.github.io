import fs from "fs"
import { join } from "path"
import matter from "gray-matter"
import PostType, { makeNavEntry } from "../../types/post"

const postsDirectory = join(process.cwd(), "_posts")

function getPostSlugs() : string[] {
  return fs.readdirSync(postsDirectory)
}

export function getPostBySlug(realSlug: string, withContent = true): PostType {
  const slug = realSlug.replace(/\.md/, "")
  const fullPath = join(postsDirectory, `${slug}.md`)
  const fileContents = fs.readFileSync(fullPath, "utf8")
  const { data, content } = matter(fileContents)

  const toc = data["toc"].map((o: Object) => makeNavEntry(o))
  if (withContent) {
    return { ...data, slug, content, toc } as PostType
  } else {
    return { ...data, slug } as PostType
  }
}

export function getAllPosts(withContent = true): PostType[] {
  return getPostSlugs()
    .map((slug) => getPostBySlug(slug, withContent))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
}

const DEFAULT_MOST_RECENT = 5
export function getRecentPosts(N: number = DEFAULT_MOST_RECENT): PostType[] {
  return getAllPosts(false).slice(0, N)
}
