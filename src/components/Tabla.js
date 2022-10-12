import React from "react";
import axios from "axios";

//funcion getCryptos 
async function getCryptos() {
    try {
        const response  = await axios({
            url: `https://min-api.cryptocompare.com/data/top/totalvolfull?limit=50&page=3&tsym=USD&extraParams=CrytoApp`,
            method: 'GET',

        })
        // console.log(response.data.Data);
        return response.data.Data;
        
    } catch (error) {
        console.log("Mka como que no esta funcionando bien la vaina: "+error)
    }
}

getCryptos();

const Tabla = () => {
    //funcion para consumir api https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD

    // const [data, setData] = React.useState([]);
    // const [loading, setLoading] = React.useState(false);
    // const [error, setError] = React.useState(null);

    // // React.useEffect(() => {
    // //     setLoading(true);
    // //     fetch("https://min-api.cryptocompare.com/data/pricemultifull?fsyms=BTC,ETH,XRP,DOGE,BNB,LTC,ADA,BUSD,BCH,VET,DOT,EOS,SOL,SRM,USDT,BTT,TRX,FIL,LINK,MATIC,UNI,NEO,CHZ,ETC,THETA,XLM,BSV,LUNA,WIN,SXP&tsyms=USD")
    // //         .then((res) => res.json())
    // //         .then((data) => {
    // //             setData(data);
    // //             setLoading(false);
    // //         })
    // //         .catch((error) => {
    // //             setError(error);
    // //             setLoading(false);
    // //         });
    // // }, []);

    // if (loading) return <p>Loading...</p>;
    // if (error) return <p>Error!</p>;

    // console.log(data); 


    const characters = [
        {
            Name: "Bitcoin",
            Price: "$5.800",
            MarketCap: "Bitcoin",
            CirculatingSupply: "Bitcoin",
        },
        {
            Name: "Bitcoin",
            Price: "$5.800",
            MarketCap: "Bitcoin",
            CirculatingSupply: "Bitcoin",
        },
        {
            Name: "Livecoin",
            Price: "$5.800",
            MarketCap: "Bitcoin",
            CirculatingSupply: "Bitcoin",
        },
        {
            Name: "Arlingcoin",
            Price: "$5.800",
            MarketCap: "Bitcoin",
            CirculatingSupply: "Bitcoin",
        },
    ];
    
    return (
        <table>
        <thead>
            <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Market Cap</th>
            <th>Circulating Supply</th>
            </tr>
        </thead>
        <tbody>
            {characters.map((character) => (
            <tr>
                <td>{character.Name}</td>
                <td>{character.Price}</td>
                <td>{character.MarketCap}</td>
                <td>{character.CirculatingSupply}</td>
            </tr>
            ))}
        </tbody>
        </table>
    );
    };

export default Tabla;
