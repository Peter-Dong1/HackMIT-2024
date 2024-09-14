import './App.css';

export default function App() {
  return (
    <div className="App">
      <header style={headerWrapperStyle}>
        <h1 style={titleStyle}>Quantify</h1>
      </header>

      <div style={containerStyle}>
        {/* Prettier buttons and open in new tab */}
        <a href="http://localhost:3000/page1" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Linear Algebra</button>
        </a>

        <a href="http://localhost:3000/page1" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>C#</button>
        </a>

        <a href="http://localhost:3000/page1" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Data Structure and Algorithm</button>
        </a>

        <a href="http://localhost:3000/page1" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>System Design</button>
        </a>

        <a href="http://localhost:3000/page2" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Multivariable Calculus</button>
        </a>

        <a href="http://localhost:3000/page3" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Single Variable Calculus</button>
        </a>

        <a href="http://localhost:3000/page4" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Topology</button>
        </a>

        <a href="http://localhost:3000/page5" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Algebra 1</button>
        </a>

        <a href="http://localhost:3000/page6" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Organic Chemistry</button>
        </a>

        <a href="http://localhost:3000/page7" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Classical Mechanics</button>
        </a>

        <a href="http://localhost:3000/page8" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Quantum Mechanics</button>
        </a>

        <a href="http://localhost:3000/page9" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Electricity and Magnetism</button>
        </a>

        <a href="http://localhost:3000/page10" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>General Chemistry</button>
        </a>

        <a href="http://localhost:3000/page11" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Biology</button>
        </a>

        <a href="http://localhost:3000/page12" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Java</button>
        </a>

        <a href="http://localhost:3000/page13" target="_blank" rel="noopener noreferrer">
          <button style={buttonStyle}>Python</button>
        </a>
      </div>

      <footer className="App-footer">
        <p>By: Tracey Lin, Eileen Lin, Peter Dong, Nazar Korniichuk</p>
      </footer>
    </div>
  );
}

// Header wrapper with transparent background
const headerWrapperStyle = {
  backgroundColor: 'transparent', // Transparent background
  padding: '20px',                // Reduced padding for the title section
  textAlign: 'center',
  marginBottom: '10px',           // Reduced gap between title and buttons
};

// Title style with white color and transparent background
const titleStyle = {
  color: 'white',                 // White color for the title
  backgroundColor: 'transparent', // Transparent background
  margin: 0,                      // Remove any default margin
  fontSize: '48px',               // You can adjust the font size if needed
  padding: '3px 0',
};

// Container style to distribute buttons evenly across the page
const containerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  gap: '101px',                    // Slightly reduced gap between buttons
  padding: '55px',                // Reduced padding around the buttons
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
