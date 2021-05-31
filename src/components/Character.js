// Write your Character component here
import styled from 'styled-components';

const Outline = styled.h2`
text-shadow: -1px -1px 0 #FFE81F, 1px -1px 0 #FFE81F, -1px 1px 0 #FFE81F, 1px 1px 0 #FFE81F;
`
const CenterBullets = styled.ul`
list-style-position: inside;
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
            <CenterBullets>Films:
                {info.films.map(film => <li key={film}>{film}</li>)}
            </CenterBullets>
            <Border></Border>
        </div>
    )
}