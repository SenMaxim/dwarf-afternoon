import React from 'react'

import Ad from './Ad'
import Article from './Article'
import OtherArticles from './OtherArticles'

class ExpandedRow extends React.Component {
    render() {
        return (
            <main className="expanded row">

          <Article />

          <Ad />

          
          <OtherArticles />
        </main>
        )
    }
}

export default ExpandedRow