import Card, { CardVariant } from "./components/Card";

function App() {
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
    </div>
  )
}

export default App