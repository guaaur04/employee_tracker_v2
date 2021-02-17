
import React from "react";
import OmdbContainer from "./components/OmdbContainer";

function App() {
  return <OmdbContainer />;
}

export default App;












// import React from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom";
// import EmployeeTable from "./components/EmployeeTable";
// import EmployeeRow from "./components/EmployeeTable";
// import Header from "./components/Header";
// import Search from "./components/EmployeeTable";
// import employees from "./employees.json";
// import Home from './pages/Home';
// import { render } from "@testing-library/react";
// import { findRenderedComponentWithType } from "react-dom/test-utils";
// import API from "./utils/API";


// class App extends React.Component {
//     state = { 
//         result: {},
//         search: ""
//      };

// // When this component mounts, search for the movie "The Matrix"
// componentDidMount() {
//     this.searchEmployees("");
// }

// searchEmployees = query => {
//     API.search(query)
//     .then(res => this.setState({ result: res.data }))
//     .catch(err => console.log(err));
// };

// handleInputChange = event => {
//     const value = event.target.value;
//     const name = event.target.name;
//     this.setState({
//         [name]: value
//     });
// };

// handleFormSubmit = event => {
//     event.preventDefault();
//     this.searchEmployees(this.state.seach);
// };

//I believe the filteredArray goes here
// render() {
//     return (
//         <Wrapper>
//             <Header>Employees List</Header>
//             {this.state.employees.map(employee => <EmployeeRow
//                 id={employee.id}
//                 key={employee.id}
//                 name={employee.id}
//                 email={employee.email}
//                 image={employee.image}
//                 />
//                 )}
//         </Wrapper> 
//     )
// }

// export default App; 