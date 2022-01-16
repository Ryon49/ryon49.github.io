import React from "react"

const WPM = 180

function calculate(words: number) : number {
  return Math.ceil(words / WPM)
}

type Props = {
  length: number
}

function TimeToRead({ length } : Props) {
  return (
    <span
      className="readtime"
      data-toggle="tooltip"
      data-placement="bottom"
      title={`${length} words`}
    >
      <em>
        {calculate(length)}
        {" "}
        mins
      </em>
    </span>
  )
}

export default TimeToRead
