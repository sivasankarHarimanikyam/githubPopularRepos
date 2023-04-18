import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

class GithubPopularRepos extends Component {
  state = {activeId: languageFiltersData[0].id, repository: {}, isLoading: true}

  componentDidMount() {
    this.getRepository()
  }

  getFailure = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1>Failure something went wrong</h1>
    </div>
  )

  getRepository = async () => {
    const {activeId} = this.state
    const apiUrl = `https://apis.ccbp.in/popular-repos?language=${activeId}`
    const response = await fetch(apiUrl)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.popular_repos.map(eachList => ({
        name: eachList.name,
        id: eachList.id,
        issuesCount: eachList.issues_count,
        forksCount: eachList.forks_count,
        starsCount: eachList.stars_count,
        avatarUrl: eachList.avatar_url,
      }))
      console.log(formattedData)
      this.setState({repository: formattedData, isLoading: false})
    } else {
      this.getFailure()
    }
  }

  onUpdatedId = id => {
    this.setState({activeId: id}, this.getRepository)
  }

  getLoaderFunction = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  getRenderItem = () => {
    const {repository} = this.state
    return (
      <ul className="ul2">
        {repository.map(each => (
          <RepositoryItem repositoryItemDetails={each} key={each.id} />
        ))}
      </ul>
    )
  }

  render() {
    const {activeId, isLoading} = this.state
    return (
      <div className="repo-container">
        <h1 className="popular-heading">Popular</h1>
        <ul className="ul">
          {languageFiltersData.map(each => (
            <LanguageFilterItem
              itemDetails={each}
              key={each.id}
              onUpdatedId={this.onUpdatedId}
              isActive={each.id === activeId}
            />
          ))}
        </ul>
        {isLoading ? this.getLoaderFunction() : this.getRenderItem()}
      </div>
    )
  }
}

export default GithubPopularRepos
