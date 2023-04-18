// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {itemDetails, onUpdatedId, isActive} = props
  const {id, language} = itemDetails
  const buttonClassName = isActive ? 'active-button' : 'normal-button'

  const onChangeLanguage = () => {
    onUpdatedId(id)
  }
  return (
    <li className="list-container">
      <button
        className={buttonClassName}
        type="button"
        onClick={onChangeLanguage}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
