import React, { Component } from 'react';
import Card from '../components/Card';
import Navbar from '../components/Navbar';
// import Search from '../components/Search';
import API from "../utils/API";


export default class Home extends Component {
    state = {
        employees: [],
        search: "",
        filteredEmployees: []
    }

    componentDidMount() {
        // this.setState({ employees: employeeArray });
        this.searchEmployees();

    }

    searchEmployees = () => {
        //API call to Random Generator using getEmployees method from API.js
        API.getEmployees()
            .then(res => {
                this.setState({
                    //The list we don't want to change 
                    employees: res.data.results,

                    //The list we want to change
                    filteredEmployees: res.data.results,
                });
                console.log(res)
            })

            .catch(err => console.log(err));

    };


    handleInputChange = event => {
        console.log(event.target.value);
        const value = event.target.value;
        const searchedName = this.state.employees.filter(input => {
            let person = Object.values(input).join("").toLowerCase()
            return person.indexOf(value.toLowerCase()) !== -1;
        })

        this.setState({
            filteredEmployees: searchedName
        })

    }


    //This is where the filteredArray goes here 
    sortEmployees = () => {
        const sorted = this.state.filteredEmployees.sort(
            (a, b) => {
                if (a.name.first < b.name.first) {
                    return -1;
                }
                if (b.name.first > b.name.first) {
                    return 1;
                }
                // a must be equal to b
                return 0;
            }
        )

        this.setState({ filteredEmployees: sorted })

    }

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
            
            <div class> 
<Navbar />
                <div> <p>Type for matching results</p></div>

                <input types="search" onChange={event => this.handleInputChange(event)}>

                </input>    

                <p>Click to sort alphabetically by first name </p>
                <button onClick={this.sortEmployees} className="btn btn-primary">
                    Sort
                 </button>

                {/* Map array of employees returning the card  */}

                {this.state.filteredEmployees.map(employees => <Card data={employees} key={employees.cell} />)}

            </div>
        );
    }

} 
