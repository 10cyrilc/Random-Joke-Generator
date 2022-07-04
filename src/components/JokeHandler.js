import { useEffect, useState } from "react";


function Joke(){
    const [setup, setUp] = useState("")
    const [delivery, setDel] = useState("")
    const [loaded, isLoaded] = useState(false)

    useEffect(() => {
        fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw&type=twopart")
        .then((response) => response.json())
        .then(data => {
            setUp(data.setup)
            setDel(data.delivery)
            isLoaded(true)
    })}, [])

    if(!loaded){
        return(
            <div className="joke">
                <p className="loading">
                    Loading..........
                </p>
            </div>
        )
    }
    else{
        return(
                <div className="joke">
                    <div className="rect">
                        <p className="setup">
                            {setup}
                        </p>
                        <p className="delivery">
                            {delivery}
                        </p>
                    </div>
                </div>
        )
    }



}

export default Joke;