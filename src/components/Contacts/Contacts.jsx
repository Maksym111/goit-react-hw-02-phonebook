const Contacts = ({ title, contacts, filter, onFilter, onItemDelete }) => {
  return (
    <div>
      <h2>{title}</h2>

      <input type="text" name="filter" value={filter} onChange={onFilter} />

      <ul>
        {contacts.map(({ id, name, number }) => (
          <li key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              type="button"
              onClick={() => {
                onItemDelete(id);
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
