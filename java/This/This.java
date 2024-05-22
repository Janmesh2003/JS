package This;
class Student 
{    
    String name ;
    int id;
    void get()
    {
        System.out.println(this.name);
        System.out.println(this.id);
    }   
}

public class This 
{
    public static void main(String[] args) {
        Student obj = new Student();
        obj.name = "janmesh ";
        obj.id = 22;

        obj.get();
    }
}
