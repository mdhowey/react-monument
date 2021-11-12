import React from 'react'
import Article from './Article'

const Archive = () => {
  return (
    <div>
      <section>
        <h2>From the Archive</h2>
        <div className="grid-wrapper articles">
          <Article />
        </div>
      </section>
    </div>
  )
}

export default Archive
