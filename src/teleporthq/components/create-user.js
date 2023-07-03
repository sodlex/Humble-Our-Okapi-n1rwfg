import React from 'react'

import PropTypes from 'prop-types'

import './create-user.css'

const CreateUser = (props) => {
  return (
    <div className={`create-user-container ${props.rootClassName} `}>
      <div className="create-user-container1">
        <div className="create-user-container2">
          <input
            type="text"
            placeholder={props.user_Name}
            className="create-user-textinput input"
          />
          <select className="create-user-select">
            <option value="coordinator" selected className="">
              Coordinador
            </option>
            <option value="super_User" className="">
              Super Usuario
            </option>
          </select>
        </div>
        <div className="create-user-container3">
          <button type="button" className="create-user-button button">
            {props.button1}
          </button>
          <button type="button" className="create-user-button1 button">
            {props.button}
          </button>
        </div>
      </div>
    </div>
  )
}

CreateUser.defaultProps = {
  rootClassName: '',
  button: 'Button',
  user_Name: 'Ingrese el nombre',
  button1: 'Button',
}

CreateUser.propTypes = {
  rootClassName: PropTypes.string,
  button: PropTypes.string,
  user_Name: PropTypes.string,
  button1: PropTypes.string,
}

export default CreateUser
