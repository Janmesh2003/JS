package Multilevel_Inhertance;
import java.util.*;
class First 
{
    int A ;
    int B ;
    void Input()
    {
        System.err.println("Enter Value for A and B ");
    }
}
class Sec extends First 
{
    void Add ()
    {
        int c = A + B ;
        System.err.println("Addition = " + c);
    }
}
public class index extends Sec
{
    void Mult()
    {
        int M = A * B;
        System.err.println("Multiple = "+ M);
    }    
    public static void main(String[] args) {
        Scanner ob = new Scanner(System.in);
        index obj = new index();
        System.err.println("Enter value for A");
        obj.A = ob.nextInt();
        System.err.println("Enter value for B");
        obj.B = ob.nextInt();
        obj.Input();
        obj.Add();
        obj.Mult();
    }
}
