import React, { useEffect } from 'react'
import { NavEntry } from '../types/post'

type Props = {
  toc: NavEntry[]
}

const Toc = ({toc}: Props) => {
  return <nav id="toc" data-toggle="toc">
    <ul className="nav navbar-nav">
      {toc.map((entry: NavEntry, i: number) => {
        let id = entry.key.replaceAll(" ", "-")
        return <li key={`nav-outer-${i}`}>
          <a className="nav-link" href={`#${id}`} onClick={(e) => anchorScroll(e, id)}>{entry.key}</a>
          {entry.entries && <SubEntry sub={entry.entries}/>}
        </li>
      })}
    </ul>
  </nav>
}

type SubEntryProps = {
  sub: string[]
}

const SubEntry = ({ sub }: SubEntryProps) => {
  return <ul className="nav navbar-nav">
    {sub.map((value: string, i: number) => 
      <li key={`nav-inner-${i}`}>
        <a className="nav-link" href={`#${value.replaceAll(" ", "-")}`}>{value}</a>
      </li>
    )}
  </ul>
}

function anchorScroll(e: any, id: string) {
  e.preventDefault()
  document.getElementById(id)?.scrollIntoView({
    behavior: 'smooth'
  })
}

export default Toc