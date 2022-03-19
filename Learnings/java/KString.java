import java.util.*;
class KString
{
    public static void main(String args[])
    {
        Scanner sc = new Scanner(System.in);
        int tc = sc.nextInt();
        
        for(int i = 1; i<=tc; i++)
        {
            int n = sc.nextInt();
            int k = sc.nextInt();
            
            String s = sc.next();
            
            int count = 0;
            int minOp;
            for(int j = 0; j<n/2; j++)
            {
                if(s.charAt(j)!= s.charAt(n-j-1)){
                    count++;
                }
                   
            }
            if(k==count)
              minOp = 0;
             else if(k>count)
               minOp=k-count;
              else
                 minOp= count-k;
                 
           System.out.println("Case #"+i+": "+minOp);
        }
        sc.close();
        
    }
}