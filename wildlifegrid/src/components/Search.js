// src/components/Search.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Search = () => {
    const [animalNames, setAnimalNames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchAnimalNames = async () => {
            try {
                const response = await axios.get('http://127.0.0.1/Project/WildlifeGrid.com/search.php');
                setAnimalNames(response.data);
            } catch (error) {
                console.error('Error fetching animal names:', error);
            }
        };

        fetchAnimalNames();
    }, []);

    const handleSearch = () => {
        if (searchTerm.trim()) {
            if (animalNames.includes(searchTerm)) {
                window.open(`https://www.google.com/search?q=${searchTerm}`, '_blank');
            } else {
                alert("The term you searched for does not exist in the database.");
            }
        } else {
            alert("Please enter a search term.");
        }
    };

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div>
            <input
                type="text"
                id="searchInput"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Search..."
            />
            <button onClick={handleSearch}>Search</button>
        </div>
    );
};

export default Search;
