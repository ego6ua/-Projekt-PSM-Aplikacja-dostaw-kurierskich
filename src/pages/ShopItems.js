import React from 'react'
import Navbar from '../components/Navbar'
import '../style/ShopItems.css'
import { Link } from "react-router-dom";
import useSound from 'use-sound';

const ShopItems = ({ state, idProduct, doOrder }) => {

    const array = Object.values(state)[idProduct].Products
    const newArray = Object.values(array)


    const soundUrl = 'https://media.publit.io/file/success-z.mp3?at=eyJpdiI6IlRBRVdwdFR6dkVZZHZ1NnVmRExIN1E9PSIsInZhbHVlIjoiSTBMMW9yRFUzV1NWNjBLSHQ4M01LRFpkOXZubXVqOUYrXC9iOStUZTZoeDg9IiwibWFjIjoiOTljYjEzOTg3MThiNTRiMmE4ZTU5NWYzYWE5YzlhM2EwZWRkNzdiZjI0YzRhODQ5MTA0YWMxNDNmODA0ZWQ0MyJ9';

    const [playbackRate, setPlaybackRate] = React.useState(3);

    const [play] = useSound(soundUrl, {
        playbackRate,
        volume: 0.5,
    });

    const handleClick = (name, price) => {
        setPlaybackRate(playbackRate);
        play();
        doOrder(name, price)

    };

    const productAll = newArray.map(item => {
        return (
            <div className='row' id='DivForItem'>
                <img className='col-4' id='imagep' src={item.pimg} alt={item.name}></img>
                <div className='col-8'>
                    <div className='ProductName'>{item.name}</div>
                    <div className='ProductOpis'>{item.opis}</div>
                    <div className='ProductPrice'><p id='Cenap'>Cena za 1szt: </p> {item.price} zł</div>
                    <div className='ProductButton'>
                        <button id='addButton' onClick={() => handleClick(item.name, item.price)}>
                            Add
                        </button>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div>
            <div className='shopTitle'>
                <Link exact to="/Home" id='shopback'>BACK</Link>
                <div id='shoptitle'>Dostępne towary w sklepie</div>
            </div>
            <div className='container'>
                <div className='row'>
                    <div id='ShopItems'>
                        {productAll}
                    </div>
                </div>
            </div>
            <Navbar />
        </div>
    )
}

export default ShopItems