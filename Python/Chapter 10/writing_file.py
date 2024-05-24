# from pathlib import Path

# file_p = Path('programming.txt')
# file_p.write_text('I love python Programming')

import os
file_path = 'Python_writing.txt'


with open(file_path , 'w') as file:
    file.write('This is a second method of file text')
 

print('This written file successfully')


