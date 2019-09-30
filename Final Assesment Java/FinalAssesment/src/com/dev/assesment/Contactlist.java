package com.dev.assesment;
import java.util.Scanner;


public class Contactlist {
	Scanner sc = new Scanner(System.in);

	public void contact(Contact value)
	{
		int w;
		do {
		System.out.println("enter 1 to call enter 2 to message");
       int i = sc.nextInt();
       if(i==1)
       {
    	   System.out.println("enter the number to call");
    	    long l = sc.nextLong();
    	    System.out.println("Calling"+l);
    	    
    	    System.out.println("call ended !!!");
       }
       else if(i==2)
       {
    	   System.out.println("Enter the message");
   	    String s = sc.next();
   	    value.setMessage(s);
   	    System.out.println("Message sending");
    	   
       }
       else
       {
    	   System.out.println("invalid.......");
       }
       System.out.println("enter 1 to continue 2 go out");
        w = sc.nextInt();
		}while(w==1);
		
		}
	public void editContact(Contact value)
	{
		System.out.println("enter name");
		String s3= sc.next();
		value.setName(s3);
		System.out.println("enter phoneNo");
		long s4= sc.nextLong();
		value.setnumber(s4);
		
		
	}

}
