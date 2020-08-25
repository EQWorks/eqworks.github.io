import { format } from 'date-fns'

export default function parseDate({ dateString, ...props }) {
  return (
    <time dateTime={dateString} {...props}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}
