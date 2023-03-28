import './index.css'

const GetSelected = props => {
  const {items} = props
  const {appName, imageUrl} = items
  return (
    <li className="item-cont">
      <img src={imageUrl} alt={appName} className="img" />
      <p className="para2">{appName}</p>
    </li>
  )
}
export default GetSelected
