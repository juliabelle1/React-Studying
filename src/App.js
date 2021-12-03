import { useState } from 'react'
import './App.css';
import Books from './components/Books';
import Navbar from './components/Navbar';

function App() {



  const [loggedIn, setLoggedIn] = useState(false)


  const [books] = useState([
    {
      id: 1,
      title:'Svart ros',
      body: 'Det har alltid bott någon från släkten Harper på lantgodset som nu ägs av Rosalind. '
    },
    {
      id: 2,
      title:'Mellan himmel och hav',
      body: 'Mellan himmel och hav är en familjeskildring som utspelar sig på Österlen i Skåne, där landskapet är vidsträckt och ljuset skimrande. '
    },
    {
      id: 3,
      title:'Ett frågetecken är ett halvt hjärta',
      body: 'Författaren till världssuccén Den röda adressboken är tillbaka med en gripande roman om att övervinna skam och skuld.  '
    }
  ])

  return (
    <div>
    <Navbar setLoggedIn = {setLoggedIn} />
    {
      loggedIn && books.map(book => (
        <Books body={book.body} title={book.title} key={book.id} />
      ))
    }
    </div>
  )

}



export default App;
