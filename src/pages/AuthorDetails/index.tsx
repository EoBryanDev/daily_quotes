import { useParams, useNavigate } from 'react-router-dom'

const AuthorDetails = () => {
  const { author } = useParams()
  const navigate = useNavigate()

  return (
    <div>
      <h1>{author}</h1>
      <button onClick={() => navigate(-1)}>go back</button>
    </div>
  )
}

export default AuthorDetails
