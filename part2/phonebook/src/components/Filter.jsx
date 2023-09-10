const Filter = ({ filterText, handleFilterTextChange }) => {
 
  
    return (
      <div>
        filter shown with: <input
          type="text"
          placeholder="Filter phonbook..."
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </div>
    );
  };

export default Filter