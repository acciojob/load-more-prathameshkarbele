import React from "react";
import {useState} from "react"

const items = [
  "Item 1",
  "Item 2",
  "Item 3",
  "Item 4",
  "Item 5",
  "Item 6",
  "Item 7",
  "Item 8",
  "Item 9",
  "Item 10",
  "Item 11",
  "Item 12",
  "Item 13",
  "Item 14",
  "Item 15",
  "Item 16",
  "Item 17",
  "Item 18",
  "Item 19",
  "Item 20",
  "Item 21",
  "Item 22",
  "Item 23",
  "Item 24",
  "Item 25",
  "Item 26",
  "Item 27",
  "Item 28",
  "Item 29",
  "Item 30"
];

const App = () => {

	const [list, setList] = useState([]);
  const [page, setPage] = useState(1);

	function addMore() {
    let startIndex = (page - 1) * 10;
    let endIndex = startIndex + 10;
		setTimeout(()=> {
      setList(() => {
        return [...list, ...items.slice(startIndex, endIndex)];
		  })
      setPage(page+1);
}, 500)

	}


  return (
    <div>
        {/* Do not remove the main div */}
	  <ul>
		{list.map((item) => <li key={item}>{item}</li>)}
	  </ul>
	  <button onClick={addMore}>Load More</button>
    </div>
  )
}

export default App
