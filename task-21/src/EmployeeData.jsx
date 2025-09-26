
const EmployeData = () => {
    const employeData = [{
        name:"Kishan Kd",
        age:20,
        salary:100000,
        designation:"frontend devloper"
    }]
  return (
    <div>
      <h1>Task 21</h1>
        <ul>
            <li>Name:- {employeData[0].name}</li>
            <li>Age:- {employeData[0].age}</li>
            <li>salary:- {employeData[0].salary}</li>
            <li>designation:- {employeData[0].designation}</li>
        </ul>
    
    </div>
  )
}

export default EmployeData