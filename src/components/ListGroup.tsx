function ListGroup(){

  const list = [
    {
      item: 'What is React',
       id: 0
    },
    {
      item: 'Folder structure in React',
    id: 1
  },
  {
    item: 'JSX',
     id: 2
  },
  {
    item: 'Rendering lists', 
    id: 3
  },
  {
    item: 'Conditional rendering',
    id: 4
  }
  ];

  return(
    <>
     <ul className = 'listItems'>
      {
      list.map(items => (<li key = {items.id}>
      <li>{items.item}</li>
      </li>))
      }
     </ul>
     </>
  )
};

export default ListGroup;