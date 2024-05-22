class manager{
    private double basesalary,bonus;
    private String name,role;
    public void man(String name, double basesalary, double bonus) {
        this.role="Manager";
        this.basesalary=basesalary;
        this.bonus=bonus;   
        this.name=name;  
    }
    public double getBasesalary() {
        return basesalary;
    }
    public double getBonus() {
        return bonus;
    }
    public String getName() {
        return name;
    }
    public String getRole() {
        return role;
    }
    
  }
public class sssss {
    public static void main(String[] args) {
        manager emp1= new manager();
        emp1.man("Lilo Heidi", 7500.0, 1500.0);
        System.out.println("Manager: " + emp1.getName() + "\nRole: " + emp1.getRole());
    }
}
