'use client';
import Image from "next/image";
import movie from "./movie.module.css";
import{useState, useEffect} from 'react';   
    

export default function Movie(){
    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    
    useEffect(() =>{
        fetch('localhost4000/movie')
        .then((res) => res.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((err) => {
            console.log(`Uh error? ${err}`);
        
        })
    },  [])

    if(isLoading) return (<h2>Loading...</h2>)
    if(!data) return (<p>No Pokemon Found...</p>)


    return(
        <main className={movie.main}>
            <div className={movie.heading}>
                <Image 
                    src="/images/moneyball.jpg"
                    alt="Cannes Logo"
                    width={900}
                    height={800}
                    priority
                />
                <div className={movie.description}>

                    <h1>data.title</h1>
                    <p1>data.description
                    </p1>
                </div>
            </div>
            <div className={movie.Genres}>
                <h3>Genre</h3>
                <p3>data.genre</p3>
            </div>

            <div className={movie.credits}>
                <div>
                    <h2>
                        Meet the Director
                    </h2>
                    <p2>
                       data.director
                    </p2>
                </div>
                <div>
                    <h1>Credits</h1>
                    <div>
                        {data.cast.map((member, key) => {
                                const localTemp = Math.random()*key;
                                return(<p key={localTemp}>member</p>)
                            })
                        }
                    </div>
                   
                    
                </div>
               
            </div>
        </main>


    );
    
}