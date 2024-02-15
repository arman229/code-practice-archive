# Dictionary Comprehensions
#Dictionary comprehensions provide a concise way to create dictionaries.
from typing import Dict
aplhabatics:Dict[str,str] = {f'{i} value': chr(i) for i in range(65,75)}
print(aplhabatics)
 