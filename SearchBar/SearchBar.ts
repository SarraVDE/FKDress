//Bar de recherche
//Complèter les import!!
import { Dress } from '';
import TextField from '@mui/core/TextField';
import { useStore } from ''; // Il faut importer les modules !!!!!!!!!!!!

interface Dress {
    genre: string;
    name: string;
    // Ajout d'autres propriétés de robe au besoin   
}

export const SearchBar: React.FC = () => { //corriger cette ligne
    const { dresses, setFilteredDresses } = useStore();
    const [searchInput, setSearchInput] = useState<string>(''); // État pour stocker la valeur de la recherche

    const filterDress = (vInput: string, dresses: Dress[]): Dress[] => {
        if (!vInput) {
            return dresses;
        } else {
            return dresses.filter((dress: Dress) => {
                const fullname = dress.genre + ' ' + dress.name;
                return fullname.toLowerCase().includes(vInput.toLowerCase());
            });
        }
    };

    const inputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        setSearchInput(inputValue); // Met à jour l'état de la valeur de recherche
        const filteredDresses = filterDress(inputValue.toLowerCase(), dresses);
        setFilteredDresses(filteredDresses);
    };

    return (
        <TextField
            label='Rechercher une robe'
            value={searchInput}
            onChange={inputHandler}
        />
    );
};
