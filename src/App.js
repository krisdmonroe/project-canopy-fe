import React, {useEffect} from 'react';
import 'antd/dist/antd.css';
import { Layout } from 'antd';
import { Nav } from './components/Nav.js'
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCountries, getAllCRB, getHabitats } from './actions/initial_actions.js';
import { chartCounts } from './actions/chart_actions.js';
import { setSpeciesData } from './actions/species_action.js';
import { allHotspots, setThreatsByAll } from './actions/table_action.js';
import Dashboard from './components/dashboard.js';
import Species from './components/species';

 

function App(props) {
  const { 
    filterBy, 
    getCountries, 
    getAllCRB, 
    getHabitats,
    chartCounts,
    setSpeciesData,
    allHotspots, 
    setThreatsByAll
   } = props;

  useEffect(() => {
    getCountries(); 
    getAllCRB(); 
    getHabitats();
    allHotspots();
    setThreatsByAll();
  }, [])

  useEffect(() => {
    if(Object.keys(filterBy).length > 0){
      chartCounts(filterBy);
      setSpeciesData(filterBy);
    }

  }, [filterBy]);

  return (
    <Layout style={{zIndex:2}}>
      <Nav />
      <Layout style={{ backgroundColor: '#F0F0F0', height: '100vh' }}>
        <Switch>

          <Route exact path='/'>
            <Dashboard />
          </Route>
          <Route path='/species'>
            <Species />
          </Route>
          
        </Switch>
      </Layout>
    </Layout>
  );
};

const mapStateToProps = state => {
  return {
    filterBy: state.filterReducer.filterBy
  }
};

export default connect(mapStateToProps, { 
  getCountries, 
  getAllCRB, 
  getHabitats,
  chartCounts,
  setSpeciesData,
  allHotspots, 
  setThreatsByAll
 })(App);
