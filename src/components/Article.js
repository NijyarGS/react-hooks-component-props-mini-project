export default function Artice({id, title ,date,preview}){
    return(
        <article key={id}>
            <h3>{title}</h3>
            <small>{date ? date : 'January 1, 1970'}</small>
            <p>{preview}</p>
        </article>
    )

    
}