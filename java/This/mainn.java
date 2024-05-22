package This;
class info /* IMP program of This keyWord */
{
    private int a ;
    private int b ;
    void input(int aa , int bb)
    {
        this.a = aa; /* yaha pr this keyWord ka use hota hai private Data type o Acces karne ke liye  */
        this.b = bb; /* Same  */
        int c = a + b;
        System.err.println(c);
    }
}
public class mainn 
{
    public static void main(String[] args) {
        info jan  = new info();
        jan.input(10, 20); 
    }
}
