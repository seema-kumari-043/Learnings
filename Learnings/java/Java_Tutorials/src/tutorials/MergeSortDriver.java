import java.util.*;
public class MergeSortDriver
{
    public static void merge(int arr[], int beg, int mid, int end)
    {
        int l = mid - beg + 1;
        int r = end - mid;
        int larr[] = new int[l];
        int rarr[] = new int[r];
        
        for(int i=0; i<l; i++)
            larr[i] = arr[beg + i];
        for(int j=0; j<r; j++)
            rarr[j] = arr[mid + 1 + j];
        
        int i = 0, j = 0;
        int k = beg;
        while(i<l && j<r)
        {
            if(larr[i] <= rarr[j])
            {
                arr[k] = larr[i];
                i++;
            }
            else
            {
                arr[k] = rarr[j];
                j++;
            }
            k++;
        }
        
        while(i<l)
        {
            arr[k] = larr[i];
            i++;
            k++;
        }
        
        while(j<r)
        {
            arr[k] = rarr[j];
            j++;
            k++;
        }
    }
    
    public static void mergeSort(int[] arr, int l, int r)
    {
        if(l<r)
        {
            int mid = (l+r) / 2;
            mergeSort(arr, l, mid);
            mergeSort(arr, mid+1, r);
            merge(arr, l, mid, r);
        }
    }
    
    public static void main(String[] args)
    {
        int arr[] = new int[100];
        MergeSortDriver obj = new MergeSortDriver();
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter the size of an array:");
        int n = sc.nextInt();
        if(n==0 || n<0)
        {
            System.out.println("Invalid array size");
        }
        else
        {
            System.out.print("Enter the elements:");
            for(int i=0; i<n; i++)
            {
                arr[i] = sc.nextInt();
            }
            System.out.println("Given array is");
            for(int i=0; i<n; i++)
            {
                System.out.print(arr[i] + " ");
            }
            System.out.println("\n");
            
            obj.mergeSort(arr, 0, n-1);
            
            System.out.println("Sorted array is");
            for(int i=0; i<n; i++)
            {
                System.out.print(arr[i] + " ");
            }
        }
    }
}
