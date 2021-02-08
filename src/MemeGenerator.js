import React, {useState, useEffect} from "react";

const MemeGenerator = () => {

    const [randomImg, setRandomImg] = useState("http://i.imgflip.com/3i7p.jpg");
    const [allMemeImgs, setAllMemeImgs] = useState([]);
    const [text, setText] = useState({
        topText: "",
        bottomText: ""
    });
    const {topText, bottomText} = text;
    
    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                setAllMemeImgs(memes)
            }, [])
    })
    
    const handleChange = (event) => {
        const {name, value} = event.target
        setText({...text, [name]: value})
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * allMemeImgs.length)
        const randMemeImg = allMemeImgs[randNum].url
        setRandomImg(randMemeImg)
    }
    
   
        return (
            <div>
                <form className="meme-form" onSubmit={handleSubmit}>
                    <input 
                        type="text"
                        name="topText"
                        placeholder="Top Text"
                        value={topText}
                        onChange={handleChange}
                    /> 
                    <input 
                        type="text"
                        name="bottomText"
                        placeholder="Bottom Text"
                        value={bottomText}
                        onChange={handleChange}
                    /> 
                
                    <button>Gen</button>
                </form>
                <div className="meme">
                    <img src={randomImg} alt="" />
                    <h2 className="top">{topText}</h2>
                    <h2 className="bottom">{bottomText}</h2>
                </div>
            </div>
        )
    }


export default MemeGenerator