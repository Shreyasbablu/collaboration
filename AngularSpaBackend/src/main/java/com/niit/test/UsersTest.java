package com.niit.test;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.niit.dao.UsersDao;
import com.niit.model.Users;

public class UsersTest 
{
	public static void main(String[] args)
	{
		AnnotationConfigApplicationContext con = new AnnotationConfigApplicationContext();
		con.scan("com.niit.*");
		con.refresh();
		Users user=(Users)con.getBean("users");
		UsersDao userdao=(UsersDao)con.getBean("usersDao");
	     
	    user.setName("Bablu");
	    user.setMobile("9535576801");
	    user.setPassword("shreyaS");
		/*user.setRole("USER_ADMIN");*/
	    userdao.registerUser(user);	
		
	}

}
