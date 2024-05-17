cars = {'color': 'black','model':'2019'}
print(cars['color']) # Access the value
print(cars['model'])

# Add a new key value pair in dict
cars['company_name'] = 'Audi'
print(cars['company_name'])
print(cars)

vehicle = {}
print(vehicle)
vehicle['Display Cars'] = 5
print(vehicle)
vehicle['Display Cars'] = 3
print(vehicle['Display Cars'])

# Remove a key value pair
del vehicle['Display Cars']
print(vehicle)

# Using a looping in dictionaries
user = {
    'username': 'admin',
    'firstname': 'Imran',
    'last name' : 'Shahid'
}
for a, b in user.items():
    print(f"Key:{a}")
    print(f"Value:{b}")

#Nesting Dictionaries

car_1 = {'color':'Black','model':2019}
car_2 = {'color':'white','model':2022}
car_3 = {'color':'sliver','model':2024}

car = [car_1,car_2,car_3]

for cars in car:
    print(cars)

#More Example

new_car = []

#Make a 10 new cars
for car_number in range(10):
    n_car ={'color':'Black','model':2024, 'transmision':'Automatic'}
    new_car.append(n_car)

# for c in new_car[:3]:
#  if c['color'] == 'green':
#     c['color'] = 'yellow'
#     c['model'] = 2022
#     c['transmision'] = 'Automatic'

# Show a new cars
for c in new_car[:5]:
    print(c)
print('......')

# A List in a Dictionary
pizza = {
    'crust': 'Thick',
    'toppings': ['mushrooms','chilli','extra cheese']
}
print(f"You ordered a {pizza['crust']}-crust pizza "
 "with the following toppings:")
for topping in pizza['toppings']:
 print(f"\t{topping}")