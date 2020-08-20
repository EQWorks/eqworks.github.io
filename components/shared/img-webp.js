const ImgWebP = ({ fallback, src, type = 'image/webp', ...props }) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...props} />
    </picture>
  )
}

export default ImgWebP
