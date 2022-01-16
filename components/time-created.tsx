import React from "react"
import moment from "moment"

type Props = {
  date : string
}

function DateCreated({ date }: Props) {
  const time = moment(Date.parse(date))

  return (
    <em
      className="timeago"
      data-toggle="tooltip"
      data-placement="bottom"
      title={time.format("llll")}
    >
      {time.format("ll")}
    </em>
  )
}

export default DateCreated
