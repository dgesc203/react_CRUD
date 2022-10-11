package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import net.javaguides.springboot.exception.ResourceNotFoundException;
import net.javaguides.springboot.model.Employee;
import net.javaguides.springboot.repository.EmployeeRepository;

@CrossOrigin(origins = "http://localhost:3000/") //cors 방지를 위해 에너테이션 추가
@RestController
@RequestMapping("/api/v1/") //프로토 타입, 버전1
public class EmployeeController {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	//학새 데이터 모두 보기
	@GetMapping("/employees")
	public List<Employee>  getAllEmployee(){
		return employeeRepository.findAll();
	}
	
	//직원 데이터 추가
	@PostMapping("/employees")
	public Employee createEmployee (@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	//직원 데이터 가져오기 rest api
	@GetMapping("/employees/{id}") //rest api
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id) {
		
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id에 해당하는 직원이 존재하지 않습니다" + id));
		return ResponseEntity.ok(employee);
		//자료가 없다면 익셉션, 그게 아니면 ok에 해당하는 값 전달
		
	}
	// rest api업데이트, 정보 입력 전에 포스트맨을 통해 db에 삽입되는지 확인
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id,@RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("id에 해당하는 직원이 존재하지 않습니다" + id));
		
		//rest api 정보 받기
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		Employee updateEmployee = employeeRepository.save(employee);
		
		return ResponseEntity.ok(updateEmployee);
	}
 	
	
}
