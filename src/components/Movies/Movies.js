import { useState } from "react";
import DataMovie from "../../utils/DataMovie";
import Movie from "../Movie/Movie";
import styles from "./Movies.module.css";

function Movies() {


    // state
    const [item, setItem] = useState(DataMovie)

    const handleClick = () => {
        const movie = {
            id: 5,
            title: "Bangsatnya Cinta Pertama",
            date: "12 mei 2002",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/10/04/film-bioskop-yang-tayang-bulan-oktober-2023-6.jpeg?w=405"
        }

        const movie2 = {
            id: 6,
            title: "Pamali Dusun Pocong",
            date: "25 september 2023",
            image: "https://akcdn.detik.net.id/community/media/visual/2023/10/04/film-bioskop-yang-tayang-bulan-oktober-2023-5.jpeg?w=800"
        }

        setItem([...item, movie])
    }

    return (
        <div className={styles.container}>
            <section className={styles.movies}>
                <h2 className={styles.movies__tittle}>Latest Movies</h2>
                <div className={styles.movies__container}>
                    {
                        item.map(function(data){
                            return(
                                
                                    <Movie key={data.id} title={data.title}    // Corrected the prop value here
                                    date={data.date} image={data.image}        // Added the image prop
                                    />                              
                               
                            )
                        })
                    }
                    {/*
                    *Duplicate 10 movies below
                    */}
                  </div>
                <button onClick={handleClick}>Tambahkan Movie</button>
            </section>
        </div>
    )
}

export default Movies;