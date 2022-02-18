import { useEffect, useState } from "react";
import BlogList from "./BlogList";
import PeopleList from "./PeopleList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');

    const [ persons,setPersons ] = useState([
    {name : 'matias', age : '18', location : 'centenario', id : 1},
    {name : 'eduardo', age : '18', location : 'centenario', id : 2},
    {name : 'sebastian', age : '18', location : 'centenario', id : 3}
 ])

const handleDelete = (id) => {
    const newPersons = persons.filter(people => people.id !== id);
    setPersons(newPersons);
}

const [names, setNames] = useState('luchitoculo');

useEffect(() => {
    console.log('use effect ran');
    console.log(names);
}, [names]); // esto hace que la funcion se ejecute una vez y hasta que no se actualize, no se vuelve a iniciar

    return (
        <div className="home">
            <PeopleList persons={persons} title = 'personas' handleDelete ={handleDelete}></PeopleList>
            <PeopleList persons = {persons.filter((people) => people.location = 'centenario')} title = 'personas de centenario'></PeopleList>
            {error && <div>{ error }</div>}
            { isPending && <div>cargando...</div>}
            { blogs && <BlogList blogs={blogs} title="blog de los pibes">  </BlogList>}
            <button onClick={() => setNames ('luchitoass')}>change the name</button>
            <p>{names}</p>
        </div>
    );
}
 
export default Home;

// se utiliza el useState para cambiar un valor en la pag ya que las variables no son reactivas
// el set puede usarse para nombres, numeros, booleans, objetos, etc.