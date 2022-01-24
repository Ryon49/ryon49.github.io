type PostType = {
  slug: string
  title: string
  date: string
  content: string
  categories: string[]
  pin?: boolean
  toc?: NavEntry[]
}

export type NavEntry = {
  key: string,
  entries?: string[]
}

export function makeNavEntry(o: object): NavEntry {
  const key = Object.keys(o)[0]
  const entries = o[key as keyof typeof o]
  if (entries === null) {
    return { key }
  } else {
    return { key, entries}
  }
}

type TreeNode {
  key: string,
  parent: TreeNode,
  children: TreeNode[]
}

export default PostType