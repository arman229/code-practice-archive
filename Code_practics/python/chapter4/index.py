
my_courses:tuple[list[int],int,bool,str] = ([1,2,3,4],5,True,"arman")
my_courses[0].append(5) # allowed 
print(my_courses)
my_courses.insert(0,6) # Not allowed
print(my_courses)