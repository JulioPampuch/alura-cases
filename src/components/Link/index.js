import NextLink from 'next/link'

const Link = (props) => {
  return (
    <NextLink href={props.page}>
      <p>{props.children}</p>
    </NextLink>
  )
}

export default Link