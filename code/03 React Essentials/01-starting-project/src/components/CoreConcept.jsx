import "./CoreConcepts.css"

function CoreConcept({title: title2, image, description}){
    return (
    <li>
        <img src={image} alt={title2} />
        <h3>{title2}</h3>
        <p>{description}</p>
    </li>)
}

export default CoreConcept