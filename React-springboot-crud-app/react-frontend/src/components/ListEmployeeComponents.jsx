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
        this.deleteEmployee = this.deleteEmployee.bind(this);
        this.ViewEmployee = this.ViewEmployee.bind(this);
    }
    ViewEmployee(id){
        this.props.history.push(`/view-employee/${id}`); 
    }
    //step1
    deleteEmployee(id){
        EmployeeService.deleteEmployee(id).then(res =>{
            this.setState({employees: this.state.employees.filter(employee => employee.id != id  )});
            //공부 필요, 오타가 나니 실시간 적용이 안되고 새로고침으로 완료됨, 한번 더 훑어볼 필요가 있음
        });


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
                                                <button style={{marginLeft: "10px"}} onClick = {() => this.deleteEmployee(employee.id)} className="btn btn-danger"> 삭제</button>
                                                <button style={{marginLeft: "10px"}} onClick = {() => this.ViewEmployee(employee.id)} className="btn btn-info"> 자세히</button>
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