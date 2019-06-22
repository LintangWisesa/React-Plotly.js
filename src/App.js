import React from 'react';
import Plot from 'react-plotly.js';
import './App.css';

function App() {
  return (
    <div>
      <div className="App">
        
        {/* Scatter & Bar */}
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              type: 'scatter',
              mode: 'lines+points',
              marker: {color: 'blue'},
              name: 'data satu'
            },
            {
              type: 'bar', 
              x: [1, 2, 3], 
              y: [2, 5, 3],
              marker: {color: 'pink'},
              name: 'data dua'
            },
          ]}
          layout={{width: 400, height: 400, title: 'Scatter & Bar'}}
        />;

        {/* Scatter GL */}
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5, 6, 7],
              y: [1, 2, 2, 3, 4, 3, 4],
              type: 'scattergl',
              marker: {color: 'purple'},
            }
          ]}
          layout={{width: 400, height: 400, title: 'Scatter GL'}}
        />;

        {/* Pie */}
        <Plot
          data={[
            {
              values: [20, 30, 50],
              type: 'pie',
              labels: ['melon', 'jeruk', 'apel'],
              marker: {colors: ['green', 'yellow', 'red']},
            }
          ]}
          layout={{width: 400, height: 400, title: 'Pie Chart'}}
        />;

        {/* Heatmap */}
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [1, 2, 3],
              z: [1, 2, 3],
              type: 'heatmap',
            }
          ]}
          layout={{width: 400, height: 400, title: 'Heatmap'}}
        />;

      </div>
      
      <div className="App">
        
        {/* Contour */}
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [2, 6, 3],
              z: [2, 6, 2],
              type: 'contour',
            }
          ]}
          layout={{width: 400, height: 400, title: 'Contour'}}
        />;

        {/* Table */}
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5, 6, 7],
              y: [1, 2, 2, 3, 4, 3, 4],
              type: 'table',
              domain: {row: 3, column: 3},
              header: {
                values: ['No.', 'Nama', 'Kota'],
                line: {color: 'red'},
                fill: {color: 'yellow'}
              },
              cells: {
                values: [
                  [1, 2, 3, 4, 5, 6, 7, 8, 9], 
                  ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'], 
                  ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I']
                ],
                line: {color: 'blue'},
                fill: {color: 'pink'}
              }
            }
          ]}
          layout={{width: 400, height: 400, title: 'Table'}}
        />;

        {/* Histogram */}
        <Plot
          data={[
            {
              x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              y: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              type: 'histogram',
              orientation: 'v'
            }
          ]}
          layout={{width: 400, height: 400, title: 'Histogram'}}
        />;

        {/* Histogram 2D */}
        <Plot
          data={[
            {
              x: [1, 2, 3],
              y: [1, 2, 3],
              z: [1, 2, 3],
              type: 'histogram2d',
            }
          ]}
          layout={{width: 400, height: 400, title: 'Historam 2D'}}
        />;

      </div>
    </div>
  );
}

export default App;
