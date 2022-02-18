const peopleList = (props) =>{
const persons = props.persons;
const title = props.title;
const handleDelete = props.handleDelete;

    
    return (
     <div className="people-list">    
     <h2>{ title }</h2>
        {persons.map((people) => (
        <div className="people-preview" key = {people.id}>
        <h3>{people.name}</h3>
        <p>tiene {people.age}</p>
        <p>es de {people.location}</p>
        <button onClick={() => handleDelete(people.id)}>borrar persona</button>
        </div>
        ))}
    </div>
    );
    }
export default peopleList;

