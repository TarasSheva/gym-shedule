import React from 'react';
import Layout from "./hoc/Layout/Layout";
import Workout from "./Components/Workout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Workout/>
      </Layout>
    </div>
  );
}

export default App;
