import React, {
  useRef, RefObject,
} from "react"

// function getTheme() {
//   const theme = localStorage.getItem('theme')
//   return theme || process.env.default_theme
// }

const ATTR_THEME = "data-mode"

// function initTheme() {
//   let mode = localStorage.getItem(ATTR_THEME)
//   if (mode == null) {
//     mode = process.env.default_theme!
//     localStorage.setItem(ATTR_THEME, mode)
//   }
//   const html = document.getElementsByTagName('html')[0]
//   html.setAttribute(ATTR_THEME, mode)
//   return mode
// }

function flipMode(btn : RefObject<HTMLButtonElement>) {
  btn.current?.blur()
  const html = document.getElementsByTagName("html")[0]
  const mode = html.getAttribute(ATTR_THEME)
  if (mode === "dark") {
    localStorage.setItem(ATTR_THEME, "light")
    html.setAttribute(ATTR_THEME, "light")
  } else {
    localStorage.setItem(ATTR_THEME, "dark")
    html.setAttribute(ATTR_THEME, "dark")
  }
}

function ThemeButton() {
  const btnRef = useRef<HTMLButtonElement>(null)

  return (
    <button type="button" className="mode-toggle btn" aria-label="Switch Mode" ref={btnRef} onClick={() => flipMode(btnRef)}>
      <i className="fas fa-adjust" />
      {/* <i className={mode === 'dark' ? 'fas fa-sun' : 'fas fa-moon'} /> */}
    </button>
  )
}

export default ThemeButton
