import './index.css'
import Greeting from './components/Greetings/Greeting'
import Table from './components/Table/Table'
import Accordion from './components/Accordion/Accordion'

function App() {

  return (
    <>
    <Greeting/>
    <Table
        theme="default" // Make sure you're passing theme correctly
        headers={['Name', 'Age', 'City']}
        data={[
          { Name: 'John Doe', Age: 30, City: 'New York' },
          { Name: 'Jane Smith', Age: 25, City: 'London' },
        ]}/>
        <Accordion 
  theme="default" 
  title="Accordion Header" 
  content="This is the content of the accordion. You can add any text here." 
/>

    </>
  )
}

export default App
