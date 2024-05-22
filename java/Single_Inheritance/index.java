package Single_Inheritance;
class Student 
{
    int roll_number;
    int marks;
    String name;

    void input ()
    {
        System.err.println("roll_number, marks and name : ");
    }
} 
class janmesh extends  Student
{
    void dis ()
    {
        roll_number = 12;
        marks = 44;
        name  = "Bhyyu";
        System.err.println(roll_number + "  " + marks + "  " + name );
    }
    public static void main(String[] args) {
        janmesh obj = new janmesh();
        obj.input();
        obj.dis();
    }
}


