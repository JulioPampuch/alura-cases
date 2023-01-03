import Link from 'next/link'

export async function getServerSideProps() {
  console.log('Acessado')
  const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
  const FAQ = await fetch(FAQ_API_URL)
    .then((serverResponse) => {
      return serverResponse.json()
    })
    .then((response) => {
      return response
    })

  return {
    props: {
      FAQ
    },
  }
}

const FaqPage = ({ FAQ }) => {

  return (
    <>
      <Link href='/'>
        <div>Faq page</div>
      </Link>
      <ul>
        {FAQ.map(({ question, answer }) => {
          return (
            <li key={question}>
              <article>
                <h2>{question}</h2>
                <p>{answer}</p>
              </article>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default FaqPage