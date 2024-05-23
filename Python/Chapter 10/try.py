from pathlib import Path

path = Path('abc.txt')
try:
    contents = path.read_text()
except :
    print(f'File is not exist {path}')
    
# print(contents)