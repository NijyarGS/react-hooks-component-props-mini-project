import Article from "./Article"

export default function ArticleList({posts}){

    return(

    <main>
    {posts.map((myPost)=>{
        return(<Article key={myPost.id} id={myPost.id} title={myPost.title} date={myPost.date} preview={myPost.preview} minutes={myPost.minutes}/>)
    })}
    </main>
)

}