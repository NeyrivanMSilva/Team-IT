import { useAppContext } from "../context/appContext.js"

const Alert = () => { 
  console.log("banananananannanana");
  const { alertType, alertText } = useAppContext()
  return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert
