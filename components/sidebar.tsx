import React from "react"
import Image from "next/image"
import { Blog, Social } from "../types/environment"
import ThemeButtom from "./theme-button"

function SideBar() {
  const blog = (process.env.blog as unknown) as Blog
  const social = (process.env.social as unknown) as Array<Social>

  return (
    <>
      <div id="sidebar" className="d-flex flex-column align-items-end sidebar-display" lang={"en" /* replace here */}>
        <div className="profile-wrapper text-center">
          <div id="avatar">
            <a href="/" data-alt="avatar" className="mx-auto">
              <Image src="/avatar.jpg" width={92} height={92} />
            </a>
          </div>
          <div className="site-title mt-3">
            <a href="/">{ blog.title }</a>
          </div>
          <div className="site-subtitle font-italic">{ blog.tagline }</div>
        </div>
        {" "}
        {/* end profile-wrapper */}

        <ul className="w-100">
          {/* home */}
          <li className={`nav-item ${true /* TODO: replace true */ ? "active" : ""}`} key="sidebar-home">
            <a href="/" className="nav-link">
              <i className="fa-fw fas fa-home ml-xl-3 mr-xl-3 unloaded" />
              <span>{"Home" /* replace Home with i18 */}</span>
            </a>
          </li>

          {/* the rest of tabs */}
          {["tab1", "tab2", "tab3"].map((tab) => (
            <li className={`nav-item ${false /* TODO: replace to "tab.url == page.url" */ ? "active" : ""}`} key={`sidebar-${tab}`}>
              <a href="/" className="nav-link" onClick={(e) => { e.preventDefault() }}>
                <i className={`fa-fw ${"" /* change to tab.icon */} ml-xl-3 mr-xl-3 unloaded`} />
                <span>{tab/* change to tab name with i18n */}</span>
              </a>
            </li>
          ))}
        </ul>
        {" "}
        {/* end ul.nav.flex-column */}

        <div className="sidebar-bottom mt-auto d-flex flex-wrap justify-content-center align-items-center">
          <ThemeButtom />
          {social.map((contact) => (
            <a href={contact.link} aria-label={contact.type} key={`contact-${contact.type}`} target={contact.blank ? "_blank" : "_self"} rel="noreferrer">
              <i className={contact.icon} />
            </a>
          ))}
        </div>
        {" "}
        {/* end sidebar-bottom */}
      </div>
      {" "}
      {/* end sidebar */}
    </>
  )
}

export default SideBar
