import React from 'react'
import CharacterItem from './CharacterItem'
import Spinner from '../ui/Spinner'

const CharacterGrid = ({isLoading,items}) => {
    return isLoading ? (<Spinner />) : (<section className='cards'>
        {items.map(item=>(
           <CharacterItem key={items.char_id} item={item}/>
        ))}
    </section>)
}

export default CharacterGrid
