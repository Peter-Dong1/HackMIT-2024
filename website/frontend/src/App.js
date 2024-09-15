import './App.css';

export default function App() {
  const openPage = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="App">
      <header style={headerWrapperStyle}>
        <h1 style={titleStyle}>Quantify</h1>
      </header>

      <div style={containerStyle}>
        {/* Buttons to open pages in new tabs */}
        <button style={buttonStyle} onClick={() => openPage('/page1.html')}>Linear Algebra</button>
        <button style={buttonStyle} onClick={() => openPage('/page2.html')}>C#</button>
        <button style={buttonStyle} onClick={() => openPage('/page3.html')}>Data Structure and Algorithm</button>
        <button style={buttonStyle} onClick={() => openPage('/page4.html')}>System Design</button>
        <button style={buttonStyle} onClick={() => openPage('/page5.html')}>Multivariable Calculus</button>
        <button style={buttonStyle} onClick={() => openPage('/page6.html')}>Single Variable Calculus</button>
        <button style={buttonStyle} onClick={() => openPage('/page7.html')}>Topology</button>
        <button style={buttonStyle} onClick={() => openPage('/page8.html')}>Algebra 1</button>
        <button style={buttonStyle} onClick={() => openPage('/page9.html')}>Organic Chemistry</button>
        <button style={buttonStyle} onClick={() => openPage('/page10.html')}>Classical Mechanics</button>
        <button style={buttonStyle} onClick={() => openPage('/page11.html')}>Quantum Mechanics</button>
        <button style={buttonStyle} onClick={() => openPage('/page12.html')}>Electricity and Magnetism</button>
        <button style={buttonStyle} onClick={() => openPage('/page13.html')}>General Chemistry</button>
        <button style={buttonStyle} onClick={() => openPage('/page14.html')}>Biology</button>
        <button style={buttonStyle} onClick={() => openPage('/page15.html')}>Java</button>
        <button style={buttonStyle} onClick={() => openPage('/page16.html')}>Python</button>
      </div>

      <footer className="App-footer">
        <p>By: Tracey Lin, Eileen Lin, Peter Dong, Nazar Korniichuk</p>
      </footer>
    </div>
  );
}

// Header wrapper with transparent background
const headerWrapperStyle = {
  backgroundColor: 'transparent',  // Transparent background
  padding: '30px 20px',            // Adjusted padding to move title lower
  textAlign: 'center',
  marginBottom: '20px',            // Reduced gap between title and buttons
};

// Title style with white color and transparent background
const titleStyle = {
  color: 'white',                  // White color for the title
  backgroundColor: 'transparent',  // Transparent background
  margin: 0,                       // Remove any default margin
  fontSize: '48px',                // Adjust the font size if needed
  padding: '5px 0',
};

// Container style to distribute buttons evenly across the page
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '90px',                     // Reduced gap between buttons
  padding: '50px',                // Reduced padding around the buttons
  backgroundColor: 'white',       // Ensures the body is white
};

// Button style to ensure all buttons are the same size
const buttonStyle = {
  width: '200px',
  height: '60px',
  fontSize: '18px',
  backgroundColor: '#4CAF50',
  color: 'white',
  border: 'none',
  borderRadius: '8px',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
};

// Hover effect for buttons
buttonStyle[':hover'] = {
  backgroundColor: '#45a049',
  transform: 'scale(1.05)',
};
