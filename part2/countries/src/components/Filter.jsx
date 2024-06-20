const Filter = ({ filterText, handleFilterTextChange }) => {
 
  
    return (
      <div>
        find countries: <input
          type="text"
          placeholder="country name..."
          value={filterText}
          onChange={handleFilterTextChange}
        />
      </div>
    );
  };

export default Filter