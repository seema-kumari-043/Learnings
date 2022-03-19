import java.util.Scanner;
public class QuickSort
{
    public static int partition(int ar[], int start, int end)
    {
        int l, r, temp, loc, flag;
        loc = l = start;
        r = end;
        flag = 0;
        while(flag != 1)
        {
            while((ar[loc] <= ar[r]) && (loc != r))
                r--;
            if(loc == r)
                flag = 1;
            else if(ar[loc] > ar[r])
            {
                temp = ar[loc];
                ar[loc] = ar[r];
                ar[r] = temp;
                loc = r;
            }
            if(flag != 1)
            {
                while((ar[loc] >= ar[l]) && (loc != l))
                    l++;
                if(loc == l)
                    flag = 1;
                else if(ar[loc] < ar[l])
                {
                    temp = ar[loc];
                    ar[loc] = ar[l];
                    ar[l] = temp;
                    loc = l;
                }
            }
        }
        return loc;
    }
    
    public static void quickSort(int ar[], int start, int end)
    {
        int loc;
        if(start < end)
        {
            loc = partition(ar, start, end);
            quickSort(ar, start, loc-1);
            quickSort(ar, loc+1, end);
        }
    }
    
    public static void main(String[] args)
    {
        int i;
        Scanner sc = new Scanner(System.in);
        int[] arr = new int[100];
        System.out.print("How many elements?");
        int n = sc.nextInt();
        if(n==0 || n<0)
        {
            System.out.println("Invalid Input");
        }
        else
        {
            System.out.print("Enter array elements:");
            for(i=1; i<=n; i++)
            {
                arr[i] = sc.nextInt();
            }
            quickSort(arr, 1, n);
            System.out.print("Array after sorting:");
            for(i=1; i<=n; i++)
            {
                System.out.print(arr[i] + " ");
            }
        }
    }
}