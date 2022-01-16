import React from "react"
import hljs from "highlight.js"

type Props = {
  language: string,
  code: string
}

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function CodeBlock({ language, code }: Props) {
  const lines = hljs.highlightAuto(code).value.split("\n")
  return (
    <div className={`language-${language} highlighter-rouge`}>
      <div className="code-header">
        <span label-text={capitalize(language)}><i className="fas fa-code small" /></span>
        <button type="button" title="Copy Not Supported">
          <i className="far fa-clipboard" />
        </button>
      </div>
      <div className="highlight">
        <code>
          <table>
            <tbody>
              <tr>
                <td className="rouge-gutter gl"><pre className="lineno">{Array.from(Array(lines.length - 1).keys()).map((x) => `${x + 1}`).join("\n")}</pre></td>
                <td className="rouge-code">
                  <pre dangerouslySetInnerHTML={{ __html: lines.join("\n") }} />
                </td>
              </tr>
            </tbody>
          </table>
        </code>
      </div>
    </div>
  )
}

export default CodeBlock
