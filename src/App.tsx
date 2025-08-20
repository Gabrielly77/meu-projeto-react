import './App.css'
import Header from './components/Header'
import Profile from './components/Profile'
import Skills from './components/Skills'

function App() {
    const skill = ['Python', 'TS', 'Cloud']
        return(
            <>
            <Header/>
            <Profile name={'Gabrielly'} bios={'Dev Fullstack'} location={'Minas Gerais'}/>
            <Skills skills={skill}/>
            </>
        ) 
}


export default App