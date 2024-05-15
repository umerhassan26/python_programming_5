students = ['ahmad','osama','ashad',23,34,23]
print(students)
#Access Elements
print(students[0].title())
#f string example

message = f"My student name is {students[1].title()}"
print(message)

#Modifying a list
cars = ['honda','suzuki','nissan' ,'toyota']
print(cars)
print(cars[1])
cars[1] = 'mercedes'
print(cars)
print(cars[1])

#Add a lists
cars.append('suzuki')
cars.append('bmw')
print(cars)

# Insert Method at any position
cars.insert(1,'Mazda')
print(cars)
cars.insert(0,'Ford')
print(cars)

# Removing a elements from a lists
del cars[4]
print(cars)

#Pop method
poped_method = cars.pop()
print(cars)
print(poped_method)

#Pop Method to remove any position
pop_method = cars.pop(1)
print(cars)
print(pop_method)

#Remove item by value 
cars.remove('toyota')
print(cars)

#Organizing a list user sort method
print(cars)
cars.append('bmw')
print(cars)
cars.sort()
print(cars)
cars.sort(reverse=True)
print(cars)
print('Orignal Cars Lists')
print(cars)
print('After sorted function use')
print(sorted(cars))

#Reverse Order List
cars.append('Audi')
cars.reverse()
print(cars)

#Finding the length of list
len(cars)

#Avoid Errors in the lists
print(cars)
print(cars[-3])