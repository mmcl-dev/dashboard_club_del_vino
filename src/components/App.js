import '../assets/css/app.css';
import SideBar from './SideBar';
import ContentWrapper from './ContentWrapper';

// Magda's
// Call Flow :::::
// Dentro de public está index.html con sólo un div del root
// Dentro de src está :
//       -  index.js : que indica que va a usar el div con id root, que se encuentra en index.html
//                     y de dónde importo App.js
//       -  App.js :   definción de mi aplicación, importo logos, componentes, css, armo la estructura
//                     del html 

function App() {
  return (
    <div id="wrapper">
     
        <SideBar />
        <ContentWrapper />
     
    </div>
  );
}

export default App;
