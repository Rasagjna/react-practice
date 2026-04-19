import React from 'react'
import { useRouteError } from 'react-router'

function Error() {
    const err = useRouteError()
    console.log(err)
  return (
    <div>
        Oops! SOmething went wrong
    <h3>
        {err.status}: {err.statusText}
    </h3>

    </div>
  )
}

export default Error