package net.javaguides.springboot.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import net.javaguides.springboot.model.Employee;

//기존에 있는 jpa 명령어들 상속받기
@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

}
