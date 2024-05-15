cars = ['Audi','Toyota','Nissan','KIA']
for company in cars:
    print(f"{company.title()},This is a company name!")
    
print("For loop ended")

#Range function
for value in range(1,9):
    print(value)

#List Function    
num = list(range(0,9))
print(num)

#Even Number
even = list(range(4,9,44))
print(even)

#Square 
square = []
for value in range(1,11):
    squares = value**2
    square.append(squares)
print(square)