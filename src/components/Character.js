// Write your Character component here
import styled from 'styled-components';

const Outline = styled.h2`
text-shadow: -1px -1px 0 #FFE81F, 1px -1px 0 #FFE81F, -1px 1px 0 #FFE81F, 1px 1px 0 #FFE81F;
`

const Border = styled.div`
border-bottom: 4px solid black;
width: 50%;
margin-left: 25%;
`

export default function Character({info}) {
    return (
        <div>
            <Outline>{info.name}</Outline>
            <span>Birth Year: {info.birth_year}</span>
            <ul>Films:
                {info.films.map(film => <li key={film}>{film}</li>)}
            </ul>
            <Border></Border>
        </div>
    )
}