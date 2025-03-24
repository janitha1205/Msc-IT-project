import React from 'react';

const Graph = ({ data,labels,name,color }) => {
  const containerStyle = {
    width: '100%',
    maxWidth: '460px',
    height: 'auto',
    backgroundColor: '#cccccc80',
    borderRadius: '20px',
    border: '1px solid #00000080',
    padding: '10px 30px',
    display: 'flex',
    flexDirection: 'column',
    minWidth: '300px',
    boxSizing: 'border-box',
  };

  const titleStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    color: '#000000ff',
    marginBottom: '20px',
  };

  const graphContainerStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    height: '200px',
    marginBottom: '10px',
  };
  const barStyle = {
    width: '40px',
    backgroundColor: color,
    borderRadius: '10px',
    transition: 'height 0.3s ease',
    cursor: 'pointer',
  };

  const labelStyle = {
    fontFamily: 'Poppins, sans-serif',
    fontSize: '20px',
    fontWeight: 700,
    color: '#000000ff',
    textAlign: 'center',
    marginTop: '10px',
  };

  //const labels = ['M1', 'M2', 'M3', 'M4', 'M5', 'M6'];

  return (
    <div style={containerStyle}>
      <div style={titleStyle}>{name}</div>
      <div style={graphContainerStyle}>
        {data.map((height, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div 
              style={{ 
                ...barStyle, 
                height: `${height}px`,
              }}
              onMouseEnter={(e) => {
                e.target.style.opacity = '0.8';
              }}
              onMouseLeave={(e) => {
                e.target.style.opacity = '1';
              }}
            />
            <div style={labelStyle}>{labels[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Graph;

