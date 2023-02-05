import { useParams } from 'react-router-dom'

const AuthorDetails = () => {
  const { author } = useParams()

  return <h1>{author}</h1>
}

export default AuthorDetails
