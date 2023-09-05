
export const Class = (props) => {
    const { type } = props;

    return (
        <div className="clase">
            <p id="nombre-clase" className={type.type.name}>{type.type.name}</p>
        </div>
     );
};
    
export default Class;