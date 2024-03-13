import Card, { CardVariant } from "./components/Card";
import UserList from "./components/UserList";

function App() {
  const users = [
    {id: 1, name: 'Вася', email: 'dadasdf@', address: {city: 'Mos', street: 'Lenin', zipcode: '666111'}},
    {id: 2, name: 'Pupa', email: 'dada@ggdhsdf@', address: {city: 'Tok', street: 'Lenin', zipcode: '666221'}},
    {id: 3, name: 'Molu', email: 'dadasdf@', address: {city: 'Liev', street: 'Pennie', zipcode: '666111'}},
  ]

  return (
    <div>
      <Card
        variant={CardVariant.primary}
        width="200px"
        height="200px"
        onClick={(num) => { console.log('num ' + num) }}
      >
        <button>Кнопка</button>
      </Card>

      <UserList 
        users={users}
      />
    </div>
  )
}

export default App