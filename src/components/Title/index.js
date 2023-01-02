const Title = (props) => {
  const Tag = props.as
  return (
    <>
      <Tag>
        {props.children}
      </Tag>
      <style jsx>{`
        h1 {
          color: red;
        }
      `}</style>
    </>
  )
}

export default Title