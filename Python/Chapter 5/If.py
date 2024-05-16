# Simple example with if statement
cars = ['toyota','bmw','honda','audi']
for car in cars:
    if car == 'bmw':
        print(car.upper())
    else:
        print(car.title())

# If Statement with voting 
age = 17
if age>=18:
    print("You are above 18 ")
else:
    print("You are under age")
    
# Elif example
ages = 13
if ages>=12:
    print('You are under 18 ')
elif ages>=18:
    print("Now you cast the vote")
elif ages<18:
    print("Less than 18")
else:
    print("Error")
    
