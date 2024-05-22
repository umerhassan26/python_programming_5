class students:
    def __init__(self,name,course):
        self.name = name
        self.course = course
    
    def info(self):
        print(f'My name is : {self.name} My course is : {self.course}')
    
# Create a student data (object)

std1 = students('Ahmad','Python')
std2 = students('Ali','Python')
std3 = students('osama','Digital Marketing')
std4 = students('tooba','Php')
std5 = students('imran', 'Graphics')

# Call student info method
# std3.info()
# std4.info()

class  Car:
    # Attributes Define
    def __init__(self,make,model,year):
        self.make = make
        self.model = model
        self.year = year
        self.odo = 0
    def getcars(self):
        name =f'{self.make} , {self.model}, {self.year}'
        return name.title()
    
    def readodo(self):
        print(f'Meterreading is {self.odo}')
    
# Create a cars objects

newcar = Car('audi','a7','2019')

newcar.odo = 23000
newcar.readodo()

print(newcar.getcars())

