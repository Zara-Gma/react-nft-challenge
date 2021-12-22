import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'

const punkList = ({punkListData}) => {
    return (
        <div className="punkList">
            {punkListData.map(punk => (
                <div className="collection">
                    <CollectionCard
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                    />
                </div>
            ))}
        </div>
    )
}

export default punkList
