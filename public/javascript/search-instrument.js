
const instrumentList = document.getElementById('instrumentList');
let hpInstrument = [];

const loadInstrument = async () => {
    try {
        const res = await fetch("/api/instrument");
        hpInstrument = await res.json();
        displayInstrument(hpInstrument);
    } catch (err) {
        console.error(err);
    }
};

const displayInstrument = (instrument) => {
    const htmlString = instrument
        .map((instrument) => {
            return `
            <li class="instrument">
                <h2>${instrument.name}</h2>
                <p>House: ${instrument.house}</p>
                <img src="${instrument.image}"></img>
            </li>
        `;
        })
        .join('');
    instrumentList.innerHTML = htmlString;
};

loadInstrument();