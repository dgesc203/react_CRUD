import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ListEmployeeComponents extends Component {
    
    constructor(props){
        super(props)

        this.state = {
                employees: []
        }
        this.addEmployee = this.addEmployee.bind(this);
        this.editEmployee = this.editEmployee.bind(this);
    }
    editEmployee(id){
        console.log(id);
       
        this.props.history.push(`/update-employee/${id}`);  //직원 페이지 // 프로퍼티 보낼땐 '가 아닌 `로 보내야한다.
    }
    componentDidMount(){
        EmployeeService.getEmployee().then((res)=>{
            this.setState({employees : res.data});
        });
    }
    addEmployee(){
        this.props.history.push('/add-employee');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>직원 목록</h2>
                <div className='row'>
                    <button className='btn btn-primary' onClick={this.addEmployee}>직원 추가</button>
                </div>
                <div className = "row">
                        <table className='table table-striped table-bordered'> 
                        {/*부트스트립에 저장된 클래스 불러오기 */}
                            <thead>
                                    <tr>
                                        <th>employee First Name</th>
                                        <th>employee Last Name</th>
                                        <th>employee Email id</th>
                                        <th>Actions</th>

                                    </tr>

                            </thead>
                            <tbody>
                                {/* => 익명함수(자바스크립트) = employee라는 익명함수*/}
                                {
                                    this.state.employees.map(
                                        employee =>
                                        <tr key = {employee.id}>
                                            <td> {employee.firstName}</td>
                                            <td> {employee.lastName}</td>
                                            <td> {employee.emailId}</td>
                                            <td>
                                                <button onClick = {() => this.editEmployee(employee.id)} className="btn btn-info"> 업데이트</button>
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>

                        </table>
                </div>



            </div>
        );
    }
}

export default ListEmployeeComponents;