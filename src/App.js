import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
  return (
    <div className="App">
      <Plot
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            type: 'scatter',
            mode: 'lines+points',
            marker: {color: 'red'},
          },
          {type: 'bar', x: [1, 2, 3], y: [2, 5, 3]},
        ]}
        layout={ {width: 400, height: 400, title: 'React & Plotly.js'} }
      />;
    </div>
  );
}

export default App;
