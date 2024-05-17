import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MovieTrailers = ({ movieId }) => {
    const [trailers, setTrailers] = useState([]);

    useEffect(() => {
        const fetchTrailers = async () => {
            try {
                const response = await axios.get(`/api/trailers/${movieId}`);
                setTrailers(response.data.results);
            } catch (error) {
                console.error('Error fetching trailers:', error);
            }
        };

        fetchTrailers();
    }, [movieId]);

    return (
        <div>
            <h2>Trailers</h2>
            {trailers.map((trailer) => (
                <div key={trailer.id}>
                    <h3>{trailer.name}</h3>
                    <iframe
                        src={`https://www.youtube.com/embed/${trailer.key}`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title={trailer.name}
                    ></iframe>
                </div>
            ))}
        </div>
    );
};

export default MovieTrailers;
