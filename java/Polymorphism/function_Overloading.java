package Polymorphism;
class Overr
{
     // int name ;
    // int age ;
    void show(String name )    
    {
        System.err.println(name);
    }
    void show(int a )
    {
        System.err.println(a);

    }
    void show(String name, int a)
    {
        System.err.println(name + "  " + a );
    }
}

public class function_Overloading
{
   public static void main(String[] args) {
    Overr obj = new Overr();
    obj.show(10);
    obj.show("janmesh", 12);
    
   }
}
