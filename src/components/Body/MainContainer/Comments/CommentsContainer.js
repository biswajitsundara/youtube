import Comments from "./Comments";


const CommentsContainer = () => {

    const commentsData= [
        {
            "name": "Biswajit Sundara",
            "text": "Lorem ipsum",
            "replies": []
        },
        {
            "name": "Biswajit Sundara",
            "text": "Lorem ipsum",
            "replies": []
        },
        {
            "name": "Biswajit Sundara",
            "text": "Lorem ipsum",
            "replies": []
        }
    ]
    return ( <div className="m-5 p-2"><h1 className="text-2xl font-bold">Comments</h1>
    
    <Comments data={commentsData[0]}/>
    </div> );
}
 
export default CommentsContainer;