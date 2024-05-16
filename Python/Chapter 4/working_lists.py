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

#Slicing a list
players = [ 'Ali','Ahmad','Hamza','Hassan','Sameer']
print(players)
print(players[2:])

#Looping THROUGH Slice
print ("Here is the first three players")
for play in players[:3]:
    print(play.title())
    
# Copy a list
copy_players = players[:3]
print("My players old list")
print(players)
print("New players list with copy a list")
print(copy_players)