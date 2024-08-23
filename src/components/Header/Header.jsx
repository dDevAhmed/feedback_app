// import NavBar from '../NavBar/NavBar';
// import PropTypes from 'prop-types';

// const Header = ({ title, name }) => {
//   return (
//     <div>
//       {/* <h1 style={{ color: '#61DAFB' }}>{title}</h1> */}
//       {/* <p>Hello there 👋, I'm {name}</p> */}
//       <NavBar title={title} />
//     </div>
//   );
// }

// // Header.defaultProps = {
// //   title:2,  // Changed from 2 to a string to match propTypes
// //   name: 'Fullstack'
// // };

// Header.propTypes = {
//   title: PropTypes.string,
//   name: PropTypes.string
// };

// export default Header;
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {
 
  const headerStyles = {
    backgroundColor: bgColor,
    color: textColor,
  }

  return (
    <header style={headerStyles}>
      <div className='container'>
       <h1>Feedback App</h1>
      </div>
    </header>
  )
}

Header.defaultProps = {
  text: 'Feedback UI',
  bgColor: 'rgba(0,0,0,0.4)',
  textColor: '#ff6a95',
}

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}

export default Header
