const Filter = ({ label, newSearch, searchName }) => {
  return (
    <>
      {label}  
      <input 
        value={newSearch}
        onChange={searchName}
      />
    </>
  )
}

export default Filter