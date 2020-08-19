import { format } from 'date-fns'

const parseDate = ({ dateString, ...props }) => {
  return (
    <time dateTime={dateString} {...props}>
      {format(new Date(dateString), 'LLLL	d, yyyy')}
    </time>
  )
}

export default parseDate
