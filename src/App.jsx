import MainLayout from './layout/MainLayout';
import Dashboard from "./pages/Dashboard/Dashboard.jsx"
import './App.css';

function App() {
  return(
    <div id="App">
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  )
}

export default App;