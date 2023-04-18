// Write your code here
const RepositoryItem = props => {
  const {repositoryItemDetails} = props
  const {
    name,
    issuesCount,
    forksCount,
    starsCount,
    avatarUrl,
  } = repositoryItemDetails

  return (
    <li className="item-container">
      <img src={avatarUrl} alt={name} className="image-edit" />
      <h1>{name}</h1>
      <div className="sub-item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png"
          alt="stars"
          className="star-image"
        />
        <p>{starsCount} stars</p>
      </div>
      <div className="sub-item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png"
          alt="forks"
          className="star-image"
        />
        <p>{forksCount} forks</p>
      </div>
      <div className="sub-item-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png"
          alt="open issues"
          className="star-image"
        />
        <p>{issuesCount} issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
