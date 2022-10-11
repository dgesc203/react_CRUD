import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class CreateEmployeeComponents extends Component {
    constructor(props){
        super(props)
        
        this.state = { //기본 상태
            firstName: '',
            lastName: '',
            emailId: ''
        }
        //생성자
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveEmployee = this.saveEmployee.bind(this);
        this.changeEmailIdHandler = this.changeEmailIdHandler.bind(this);
    }

    saveEmployee = (e) => {
        e.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
        console.log('emloyee =>'+ JSON.stringify(employee)); //정보 확인용 콘솔

        EmployeeService.createEmployee(employee).then(res =>{ //입력한 employee 값을 createEmployee 서비스로 인해 봬기
            this.props.history.push('/employees');
        });
    }
    //바뀌었을 때 이벤트
    changeFirstNameHandler=(event) =>{
        this.setState({firstName: event.target.value});
    }
    changeLastNameHandler=(event) =>{
        this.setState({lastName: event.target.value});
    }
    changeEmailIdHandler=(event) =>{
        this.setState({emailId: event.target.value});
    }
    cancel(){
        this.props.history.push("/employees");
    }
    render() {
        return (
            <div>
                    <div className='container'>
                        <div className='row'>
                            <div className='card col-md-6 offset-md-3 offset-md-3'>
                                <h3 className='text-center'>직원 추가</h3>
                                <div className='card-body'>
                                    <form>
                                        <div className='form-group'>
                                            <label>First Name : </label>
                                                <input placeholder='First Name' name='firstName' className='form-control' 
                                                value={this.state.firstName} onChange={this.changeFirstNameHandler}/>

                                        </div>
                                        <div className='form-group'>
                                            <label>Last Name : </label>
                                                <input placeholder='Last Name' name='lastName' className='form-control' 
                                                value={this.state.lastName} onChange={this.changeLastNameHandler}/>

                                        </div>
                                        <div className='form-group'>
                                            <label>Email Id : </label>
                                                <input placeholder='Email Id' name='emailId' className='form-control' 
                                                value={this.state.emailId} onChange={this.changeEmailIdHandler}/>

                                        </div>
                                        <button className='btn btn-success' onClick={this.saveEmployee}>저장</button>
                                        <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}} >취소</button>
                                    </form>
                                </div>
                            </div>
                        </div>    
                    </div>   
            </div>
        );
    }
}

export default CreateEmployeeComponents;