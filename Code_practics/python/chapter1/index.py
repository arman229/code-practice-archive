#     Memory Allocation: The memory manager might allocate memory differently each time the program runs, depending on factors like the available memory, memory fragmentation, and other system-level considerations.
#   Jupyter notebooks maintain a persistent Python kernel across multiple code executions within the same session, while Python scripts start a new Python process with each execution.
#   String interning is a process where Python optimizes memory usage by reusing the same memory address for identical string literals.
#  In Python, a "physical address" typically refers to the memory address where an object is stored in the computer's memory. Every object in Python, whether it's a variable, a function, or any other data structure, resides in memory, and each object has a unique memory address.
name:str|int='pakistan'
name1:str = 'pakistan'
print(id(name)) 
print(id(name1)) 
name:int='dd'
print(name)
 