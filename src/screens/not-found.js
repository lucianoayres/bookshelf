// export * from './not-found.exercise'
/** @jsx jsx */
import {jsx} from '@emotion/core'

import {Link} from 'components/lib'

export * from './not-found.final'

function NotFoundScreen() {
  return (
    <div
      css={{
        height: '100%',
        display: 'grid',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div>
        Sorry... nothing here. <Link to="/discover">Go home</Link>
      </div>
    </div>
  )
}

export {NotFoundScreen}
