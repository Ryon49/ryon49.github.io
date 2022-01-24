// import remark from 'remark'
import remarkHtml from "remark-html"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import { unified } from "unified"
import { renderToStaticMarkup } from "react-dom/server"
import { createElement } from "react"
import Code from "../components/blog/code-block"

// Belows are html transformation function ported from
// https://github.com/cotes2020/jekyll-theme-chirpy/blob/master/_includes/refactor-content.html
function table(content: string) {
  return content
    .replaceAll("<table>", '<div class="table-wrapper"><table>')
    .replaceAll("</table>", "</table></div>")
    .replaceAll("</table></div></code>", "</table></code>")
}

function highlight(content: string) {
  return content
    .replaceAll('<div class="highlight"><pre class="highlight"><code', '<div class="highlight"><code')
    .replaceAll("</code></pre></div>", "</code></div>")
}

function listHideBullet(content: string) {
  return content
    .replaceAll(
      '"task-list-item"><input type="checkbox" checked',
      '"task-list-item" hide-bullet><i class="fas fa-check-circle checked"></i><input type="checkbox" class="task-list-item-checkbox unloaded" checked',
    )
    .replaceAll(
      '"task-list-item"><input type="checkbox"',
      '"task-list-item" hide-bullet><i class="far fa-circle"></i><input type="checkbox" class="task-list-item-checkbox unloaded"',
    )
}

function inlineCode(content: string) {
  return content
    .replaceAll(
      /(?<head><p>.+)<code>/mg,
      (_, head: string) => `${head}<code class="language-plaintext highlighter-rouge">`,
    )
}

function hexCode(code: string) {
  return code.replaceAll(/&#x[0-9A-F]{2};/gi, (match: string) => String.fromCharCode(parseInt(match.substring(3, 5), 16)))
}

function blockCode(content: string) {
  return hexCode(content).replace(/<pre><code class="language-(?<language>.*)">((?<code>.*\n)*?)<\/code><\/pre>/mg, 
    (_, language, code) => renderToStaticMarkup(createElement(Code, { language, code }, null)))
}

function header(code: string) {
  return code.replaceAll(/<(?<tag>h[2-3])>(?<content>.*)<\/h[2-3]>?/gi, (_, tag, content) => {
    let id = content.replaceAll(" ", "-")
    return `<${tag} id=${id} tabindex="-1">
      ${content}
      <a href="#${id}" class="anchor">
        <i class="fas fa-hashtag"></i>
      </a>
    <\/${tag}>`
  })
}

// parse markdown to html
export default async function markdownToHtml(markdown: string) {
  const result = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkHtml)
    .processSync(markdown)
    .toString()

  return Promise.resolve(result)
    .then(table)
    .then(highlight)
    .then(listHideBullet)
    .then(inlineCode)
    .then(blockCode)
    .then(header)
}
