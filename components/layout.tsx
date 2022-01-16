import React from "react"
import Meta from "./meta"
import SideBar from "./sidebar"
import TopBar from "./topbar"

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props) {
  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <main>
          <SideBar />
          <TopBar />
          {children}
        </main>
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default Layout
