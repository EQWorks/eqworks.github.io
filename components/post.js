export default function Post({ content }) {
  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}