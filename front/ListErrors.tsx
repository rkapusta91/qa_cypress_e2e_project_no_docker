import React from 'react'

const ListErrors = ({ errors }) => (
  <ul data-cy='errorMessage' className="error-messages">
    {Object.keys(errors).map((key) => {
      return (
        <li key={key}>
          {key}:
          <ul>
            <li>{errors[key]}</li>
          </ul>
        </li>
      )
    })}
  </ul>
)

export default ListErrors
