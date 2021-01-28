
// const instrumentList = document.getElementById('instrumentList');
// const searchBar = document.getElementById('searchBar');
// let hpInstrument = [];

// searchBtn.addEventListener('click', (e) => {
//     console.log(e)
// })



// const loadInstrument = async () => {
//     try {
//         const res = await fetch("/api/instrument-routes");
//         hpInstrument = await res.json();
//         displayInstrument(hpInstrument);
//     } catch (err) {
//         console.error(err);
//     }
// };

// const displayInstrument = (instrument) => {
//     const htmlString = instrument
//         .map((instrument) => {
//             return `
//             <li class="instrument">
//                 <h2>${instrument.name}</h2>
//                 <img src="${instrument.image}"></img>
//                 <button id="goPageBtn" class="go-page">View Page</button>
//             </li>
//         `;
//         })
//         .join('');
//     instrumentList.innerHTML = htmlString;
// };

// loadInstrument();