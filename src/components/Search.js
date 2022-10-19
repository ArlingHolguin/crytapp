import React, { useState, useEffect } from "react";
//renderizamos la vista de nuestro coponente
const Search = () => {
  //setear los hooks de useState
  const [cryptos, setCryptos] = useState([]);
  const [search, setSearch] = useState("");

  //funcion para traer los datos de la api
  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";
  const getCryptos = async () => {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    setCryptos(data);
  };

  //funcion de busqueda
  const searcher = (e) => {
    setSearch(e.target.value);
  };

  //metodo de filtrado
  const results = !search ? cryptos : cryptos.filter((crypto) => crypto.name.toLowerCase().includes(search.toLowerCase()));





  useEffect(() => {
    getCryptos();
  }, []);
  return (
    <div>
      <div className="search mb-4 w-full">
        <input value={search} onChange={searcher} className="rounded w-full" type="text" placeholder="Search crypto name ..." />
      </div>
      <div>
        <table className="min-w-max w-full table-auto overflow-x-scroll">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">Symbol</th>
              <th className="py-3 px-6 text-center">Price</th>
              <th className="py-3 px-6 text-center">Market Cap</th>
              <th className="py-3 px-6 text-center">Volume</th>
              <th className="py-3 px-6 text-center">Circulating Supply</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
          {results.map((crypto) => (            
            <tr key={crypto.id} className="border-b border-gray-200 hover:bg-gray-100">
              <td className="py-3 px-6 text-left whitespace-nowrap">
                <div className="flex items-center">
                  <div className="mr-2">
                  <img
                    className="rounded-full w-6 h-6"
                    src={crypto.image}
                    alt={crypto.name}
                  />
                  </div>
                  <span className="font-medium">{crypto.name}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-left">
                <div className="flex items-center">
                  <div className="mr-2">
                  <img
                    className="rounded-full w-4 h-4"
                    src={crypto.image}
                    alt={crypto.name}
                  />
                  </div>
                  <span>{crypto.symbol}</span>
                </div>
              </td>
              <td className="py-3 px-6 text-center">
                <div className="flex items-center justify-left">
                  <span className="font-medium">{new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(crypto.current_price)}</span>
                  {/* <span>{crypto.current_price}</span> */}
                </div>
              </td>
              <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-left">
              <span>{new Intl.NumberFormat().format(crypto.market_cap)}</span>
              </div>
              </td>
              <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-left">
                {/* Formato para separar miles en react  */}
                <span>{new Intl.NumberFormat().format(crypto.total_volume)}</span>
                {/* <span>
                {crypto.total_volume}
                </span> */}
              </div>
              </td>
              <td className="py-3 px-6 text-center">
              <div className="flex items-center justify-left">                
                <span>{new Intl.NumberFormat().format(crypto.circulating_supply)}</span>

              </div>
              </td>
              <td className="py-3 px-6 text- justify-items-end">
                <div className="flex item-center justify-center">
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110 cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  </div>
                  {/* <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </div>
                  <div className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </div> */}
                </div>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Search;
