import './index.css'

const GetItem = props => {
  const {item, onButton, isActive} = props
  console.log(isActive)
  const {displayText, tabId} = item
  const onTouch = () => {
    onButton(tabId)
  }
  const result = isActive ? 'active-tab' : ''
  return (
    <li>
      <button type="button" className={`button ${result}`} onClick={onTouch}>
        {displayText}
      </button>
    </li>
  )
}
export default GetItem
