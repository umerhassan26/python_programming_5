# from pathlib import Path

# path = Path('git instructions.txt')
# contents = path.read_text()
# print(contents)

import os
file_path = 'Projects HTML & CSS JS.txt'
with open(file_path, 'r') as file:
    contents = file.read()
       
print(contents)
 