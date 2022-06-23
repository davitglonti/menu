import "./App.css"

const Categories = ( props ) => {
    return (
      <div className="btn-container">
            <button onClick={() => props.filterItems('all')}>
                all
            </button>
            <button onClick={() => props.filterItems('breakfast')}>
                breakfast
            </button>
            <button onClick={() => props.filterItems('lunch')}>
                lunch
            </button>
            <button onClick={() => props.filterItems('shakes')}>
            shakes
            </button>
      </div>
    );
  };
  
  export default Categories;