import React, {useState} from "react";

export default function User(){
    const [letters, setletters] = useState("");
    const [paragraph, setParagraph] = useState("");
    
    const key = "gwJs7F7prkqk73ZLmdf0tA==ocxqUnx7mDafoxpb";
    async function generateRandom(){
        const res = await fetch(`https://api.api-ninjas.com/v1/loremipsum?start_with_lorem_ipsum=${false}&paragraphs=${10}`, {
            method: 'GET',
            headers: { 'X-Api-Key': key, "Content-Type": 'application/json'}
        })
        const data = await res.json()

        if (data.text.length < letters){
            const diff = letters - data.text.length;
            const addOn = data.text.slice(0, diff)
            setParagraph(data.text + addOn)
        }else if(data.text.length > letters){
            const diff = letters - data.text.length;
            const required = data.text.slice(0, diff)
            setParagraph(required)   
        }else{
            setParagraph(data.text);
        }
    }

    return (
    <div className="container">
        <div>
            <input type="number" placeholder="Enter Number of letters" value={letters} onChange={e => setletters(e.target.value)}></input>
            <button onClick={generateRandom}>Generate</button>
        </div>
        <p>{paragraph}</p>
    </div>
    )
}