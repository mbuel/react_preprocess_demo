// const element = <h1 className="greeting">Hello Morris world!</h1>

const Navbar = () => {
    return (
      <nav className="navbar navbar-expand navbar-light bg-light">
        <a className="navbar-brand" href="index.html">Navbar</a>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="press.html">Press</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

const Sidebar = () => {
    return (
      <div className="d-none d-md-block col-md-3">
        <div className="border border-primary py-4 px-3">
          Sidebar
        </div>
      </div>
    )
}

const Footer = () => {
    return (
      <div className="border-top p-2">
        Template Demo © 2019
      </div>
    )
}

const Template = (props) => {
    return (
      <React.Fragment>
        <Navbar />
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-md-9">
              {props.children}
            </div>
            <Sidebar />
          </div>
        </div>
        <Footer />
      </React.Fragment>
    )
  }

const App = () => {
    return (
      <Template>
        <h1>Main content</h1>
      </Template>
    );
  }
  
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );

// const Temperature = (props) => {
//     return <h1>The current temperature in {props.city} is {props.degree} degree {props.unit}</h1>;
//   };

//   const App =() => {
//   return (
//       <div>
//           <Temperature city="London" degree={31} unit="celcius" />
//           <Temperature city="New York" degree={31} unit="celcius" />
//           <Temperature city="Dubai" degree={31} unit="celcius" />
//       </div>
//   );
// }

//   ReactDOM.render(
//     <App />,
//     document.getElementById('root')
//   );
  
//   const sum = (a, b) => {
//     return a + b;
//   };

//   const add = (total, value) => {
//     total += value;
//   };