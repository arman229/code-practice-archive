  # Union Type
num:int|float = 3.5
print(num)
# or

from typing import Union
num1:Union[int,float] = 3.55
print(num1)  
from typing import Optional
furture_name:Optional[str] = None
furture_name='M Arman'
print(furture_name)