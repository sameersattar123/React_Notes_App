import React from 'react'

const Alert = ({alert}) => {
  return (
    <div style={{height: '100px'}}>
    {alert &&
    <div>
      <div className={`alert alert-${alert.type} alert-dismissible fade show`} role="alert">  
  <strong> {alert.type} </strong> : {alert.message}
</div>
    </div>}
    </div>
  )
}

export default Alert
