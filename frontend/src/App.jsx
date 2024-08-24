import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import MonstersScreen from './screens/MonstersScreen/MonstersScreen';
import DungeonScreen from './screens/DungeonScreen';
import CharacterScreen from './screens/CharacterBuilderScreens/CharacterScreen';
import ChooseRaceScreen from './screens/CharacterBuilderScreens/ChooseRace/ChooseRaceScreen';
import ChooseClassScreen from './screens/CharacterBuilderScreens/ChooseClass/ChooseClassScreen';
import ChooseAbilitiesScreen from './screens/CharacterBuilderScreens/ChooseAbilities/ChooseAbilitiesScreen';
import CharacterDetailsScreen from './screens/CharacterDetailsScreen/CharacterDetailsScreen';
import LoginScreen from './screens/LoginScreen';

function App() {
  return (
    <div id='app'>
      <Navbar />
      <div className='main'>
        <Routes>
          <Route path='/' element={<HomeScreen />} exact></Route>
          <Route path='/monsters' element={<MonstersScreen />} exact></Route>
          <Route path='/character' element={<CharacterScreen />} exact></Route>
          <Route
            path='/character/chrace'
            element={<ChooseRaceScreen />}
            exact
          ></Route>
          <Route
            path='/character/chclass'
            element={<ChooseClassScreen />}
            exact
          ></Route>
          <Route
            path='/character/chabilities'
            element={<ChooseAbilitiesScreen />}
            exact
          ></Route>
          <Route
            path='/character/:chrId'
            element={<CharacterDetailsScreen />}
            exact
          ></Route>
          <Route path='/login' element={<LoginScreen />} exact></Route>
          <Route path='/dungeons' element={<DungeonScreen />} exact></Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
