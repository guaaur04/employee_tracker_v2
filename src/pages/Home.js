import React, { Component } from 'react';
import API from "../utils/API";
// import Card from "../components/Card";
// import Search from "../components/Search";

export default class Home extends Component {
    state = {
        employees: [],
        search: ""
    }

    componentDidMount() {
        // this.setState({ employees: employeeArray });
        this.searchEmployees();

    }

    searchEmployees = () => {
        //API call to Random Generator using getEmployees method from API.js
        API.getEmployees()
            .then(res => this.setState({ employees: res.data.results }))
            .catch(err => console.log(err));
    };

    // handleInputChange = event => {

    //     const value = event.target.value;
    //     const name = event.target.name;
    //     const id = event.target.getAttribute("data-id")

    //     const stateCopy = [...this.state.employees]

    //     this.state.forEach(obj => {
    //         if (obj.id == id) {
    //             obj[name] = value
    //         }
    //     })

    //     this.setState({ employees: stateCopy })
    // }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.searchEmployees(this.state.search);
    // };

    //This is where the filteredArray goes here 


    // updateResults = () => {
    //     const newArray = this.state.employees.filter(obj => {
    //         const last = obj.name
    //         if (this.state.search === last) {
    //             return obj
    //         }
    //     })
    // }

    render() {
        return (

            <div> Hello!!! </div>
            // <Wrapper>
            //     <Header></Header>
            //     <Search></Search>

                // {this.state.employees.map(employee => <Card employee={employee} />)}

                // {this.state.employees.map(employee => <EmployeeRow
                //     id={this.state.id}
                //     key={this.state.key}
                //     name={this.state.name}
                //     email={this.state.email}
                //     src={this.state.image}
                // />)}

            // </Wrapper >


        )
    }

}
