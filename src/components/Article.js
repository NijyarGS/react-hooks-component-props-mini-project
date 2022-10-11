export default function Artice({id, title ,date,preview,minutes}){
    function calMins(){
        let myEmojis=""
        if(minutes<30){
            let nth=Math.round(minutes/5)
            for (let i=0;i<nth;i++)
            {
                myEmojis = myEmojis + "☕️"
            }
        }
        else if(minutes>=30)
        {
            let nth=Math.round(minutes/10)
            for (let i=0;i<nth;i++)
            {
                myEmojis = myEmojis + "🍱"
            }
        }
        return myEmojis
    }
    
    return(
        <article key={id}>
            <h3>{title}</h3>
            <small>{date ? date : 'January 1, 1970'}</small>
            <p>{preview}</p>
            <p>
            {calMins()} : {minutes} minutes read 
            </p>
        </article>
    )

    
}