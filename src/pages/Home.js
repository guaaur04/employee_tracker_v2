import React, { Component } from 'react'
import Card from "../components/Card"
import employeeArray from "../employees.json"

export default class Home extends Component {
    state = {
        employees: [],
    }

    componentDidMount() {
        this.setState({ employees: employeeArray });
    }

    searchEmployees = query => {
        API.search(query)
        .then(res => this.setState({ result: res.data }))
        .catch(err => console.log(err));
    };

    handleInputChange = event => {

        const value = event.target.value;
        const name = event.target.name;
        const id = event.target.getAttribute("data-id")

        const stateCopy = [...this.state.employees]

        this.state.forEach(obj => {
            if (obj.id == id) {
                obj[name] = value
            }
        })

        this.setState({ people:stateCopy })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchEmployees(this.state.seach);
    };

    //This is where the filteredArray goes here 
    updateResults = () => {
        const newArray = this.state.people.filter(obj => {
            const last = obj.name
            if(this.state.search === last) {
                return onbj
            }
        })
    }

    //Where will you call this updateResults function?


    render() {
        return (
            <div>
            
                {this.state.employees.map(person => <Card person={person} />)}

            </div>
        )
    }
}

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
 