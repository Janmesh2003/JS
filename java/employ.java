 class Employee{
    private String role;
    private String name;

    public Employee(String name,String role){
        this.name=name;
        this.role=role;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
  public double CalSalary()
  {
    return 0.0;
  }  
}

  class manager extends Employee{
    private double basesalary,bonus;
    public manager(String name, double basesalary, double bonus) {
        super(name, "Manager");
        this.basesalary=basesalary;
        this.bonus=bonus;     
    }
    public double CalSalary()
    {
        return bonus+basesalary;
    }
    public double getBasesalary() {
        return basesalary;
    }
    public double getBonus() {
        return bonus;
    }


  }

class programmer extends Employee{
    private double basesalary,overtime;
    public programmer(String name, double basesalary, double overtime) {
        super(name, "Programmer");
       this.basesalary=basesalary;
       this.overtime=overtime;
    }
public double CalSalary()
{
    return basesalary+overtime;
}
public double getBasesalary() {
    return basesalary;
}
public double getOvertime() {
    return overtime;
}

    
}
public class employ {
    public static void main(String[] args) {
        Employee emp1 = new manager("Lilo Heidi", 7500.0, 1500.0);
        Employee emp2 = new programmer("Margrit Cathrin", 5000.0, 600.0);

        System.out.println("Manager: " + emp1.getName() + "\nRole: " + emp1.getRole() + "\nSalary: $" + emp1.CalSalary());
        System.out.println("\nProgrammer: " + emp2.getName() + "\nRole: " + emp2.getRole() + "\nSalary: $" + emp2.CalSalary());
        System.err.println(emp1.getRole());
    }
}
