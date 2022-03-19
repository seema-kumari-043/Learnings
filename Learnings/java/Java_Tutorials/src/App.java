package Java_Tutorials.src;

import java.util.Scanner;

import Java_Tutorials.src.tutorials.InsertionSort;

public class App {
    public static void main(String[] args) throws Exception {
        System.out.println("Hello, World!");
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter the size of array");
        int size = sc.nextInt();
        System.out.println("Enter the array");
        int arr[] = new int[size];
        for(int i=0; i<size;i++){
            arr[i]=sc.nextInt();
        }

        InsertionSort obj = new InsertionSort();
        obj.insertSort(arr);

        //printing the sorted array via insertion sort
        System.out.println("Here is the sorted array via Insertion Sort");
        for(int i = 0; i<size; i++){
            System.out.print(arr[i]+" ");
        }
    }
}
