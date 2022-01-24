import { useRouter } from "next/router"
import React, { useEffect, useRef } from "react"

function buildBreadCrumb(p: string) {
  if (p === "/") {
    return "<span>Home</span>"
  }

  const pathname = p.replace(/\/posts/, "")

  const list: string[] = [`<span><a href=${"/"}>${"Home"}</a></span>`]

  let base = "/"
  const paths = pathname.split("/").filter((s) => s.length !== 0)

  paths.forEach((path, index) => {
    if (index === paths.length - 1) {
      list.push(`<span>${path}</span>`)
    } else {
      base = `${base}/${path}`
      list.push(`<span><a href=${base}>${path}</a></span>`)
    }
  })
  return list.join("")
}

function toggle_sidebar() {
  let body: HTMLElement = document.body
  if (body.hasAttribute("sidebar-display")) {
    body.removeAttribute("sidebar-display")
  } else {
    body.setAttribute("sidebar-display", "true")
  }
}

function scroll_topbar() {
  let delta = document.getElementById("topbar-wrapper")!.offsetHeight * 2

  let body = document.body
  if (document.documentElement.scrollTop > delta) {
    body.setAttribute("data-topbar-visible", "false")
  } else {
    body.removeAttribute("data-topbar-visible")
  }
}

function TopBar() {
  const { asPath } = useRouter()

  const bcRef = useRef<HTMLSpanElement>(null)
  useEffect(() => {
    // change breadcrumb based on current url
    bcRef.current!.innerHTML = buildBreadCrumb(asPath)    
    window.addEventListener("scroll", (e) => scroll_topbar())
  })
  return (
    <div id="topbar-wrapper" className="row justify-content-center topbar-down">
      <div id="topbar" className="col-11 d-flex h-100 align-items-center justify-content-between">
        <span id="breadcrumb" ref={bcRef} />

        <i id="sidebar-trigger" className="fas fa-bars fa-fw" onClick={toggle_sidebar}/>

        <div id="topbar-title">
          {asPath}
        </div>

        <i id="search-trigger" className="fas fa-search fa-fw" />
        <span id="search-wrapper" className="align-items-center">
          <i className="fas fa-search fa-fw" />
          <input
            className="form-control"
            id="search-input"
            type="search"
            aria-label="search"
            autoComplete="off"
            placeholder={"Search..." /* replace with i18n */}
          />
          <i className="fa fa-times-circle fa-fw" id="search-cleaner" />
        </span>
        <span id="search-cancel">{"cancel" /* site.data.locales[lang].search.cancel */}</span>
      </div>
    </div>
  )
}

export default TopBar
