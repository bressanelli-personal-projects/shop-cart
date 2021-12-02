import Fusca from "../../../assets/fusca_1000.jpg";
import Chevette from "../../../assets/chevete_1000.jpg";
import Diplomata from "../../../assets/diplomata_1000.jpg";
import Dodge from "../../../assets/dodge_1000.jpg";
import Galaxy from "../../../assets/galaxy_1000.jpg";
import Fiat147 from "../../../assets/fiat147_1000.jpeg";
import Opala from "../../../assets/opala_1000.jpg";

const defaultState = [
    {
        id: 1,
        name: "Fusca ANO 1982 em perfeito estado",
        price: 29900.0,
        img: Fusca,
    },
    {
        id: 2,
        name: "Chevette ANO 1979 único dono",
        price: 25000.0,
        img: Chevette,
    },
    {
        id: 3,
        name: "Fiat147 ANO 1984 de colecionador",
        price: 19900.0,
        img: Fiat147,
    },
    { id: 4, name: "Galaxy ANO 1982 nunca usado", price: 36000.0, img: Galaxy },
    { id: 5, name: "Dodge ANO 1977 2500Km novo", price: 39000.0, img: Dodge },
    {
        id: 6,
        name: "Diplomata ANO 1980 bancos de couro",
        price: 24900.0,
        img: Diplomata,
    },
    {
        id: 7,
        name: "Opala ANO 1983 unico dono",
        price: 24900.0,
        img: Opala,
    },
];

const productsReducer = (state = defaultState, action) => {
    return state;
};

export default productsReducer;
