import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class ViewEmployeeComponent extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            id: this.props.match.params.id,   //프로퍼티에서 받은 id값
            employee: {}
        
        }
    }
        
        componentDidMount(){//데이터 재활용
            EmployeeService.getEmployeeById(this.state.id).then( res => {
                this.setState({employee: res.data});
            });
        }
    

    render() {
        return (
            <div>
                <div className='card col-md-6 offset-md-3'>
                    <h3 className='text-center'>직원 상세 정보</h3>
                    <div className='card-body'></div>
                        <div className='row'>
                            <label>직원 First Name : </label>
                            <div>{this.state.employee.firstName}</div>
                        </div>
                        <div className='row'>
                            <label>직원 Last Name : </label>
                            <div>{this.state.employee.lastName}</div>
                        </div>
                        <div className='row'>
                            <label>직원 Email Name : </label>
                            <div>{this.state.employee.emailId}</div>
                        </div>
                </div>
            </div>
        );
    }
}

export default ViewEmployeeComponent;