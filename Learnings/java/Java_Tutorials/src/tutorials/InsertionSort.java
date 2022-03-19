package Java_Tutorials.src.tutorials;

public class InsertionSort {

 
    public int[] insertSort(int ar[]){

        
        for(int j = 1; j<ar.length; j++){
            int key = ar[j];
            int i = j-1;

            while(i>=0&&ar[i]<key){//ar[i]>key - for the increasing order
                ar[i+1]=ar[i];
                i--;
            }
            ar[i+1]=key;
        }
        return ar;
    }
}
