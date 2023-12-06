import './index.css'

const TabItem = props => {
  const {tabDetails, updatedTabId} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updatedTabId(tabId)
  }

  return (
    <li className="tab-item-container ">
      <button type="button" className="tab-btn" onClick={onClickTabItem}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
