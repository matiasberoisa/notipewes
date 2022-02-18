import { useHistory, useParams } from "react-router-dom";
import  useFetch  from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data : blog, error, isPending} = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();
    
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            history.push('/')
        })
    }
    
    return (
        <div className="blog-details">
            { isPending && <div>cargando...</div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <div>{ blog.body }</div>
                    <p>escrito por { blog.author }</p>
                    <button onClick={handleClick}>delete blog</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;