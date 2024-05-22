class Human:
    def __init__(self,name,age): #__init__ create a instance
        self.name = name  #Attributes
        self.age = age
    
    def greet(self):
        print(f"Hello I am {self.name} and my age is : {self.age}")
        

# Create a new human object
human = Human('Umer',27)   
human1 = Human('Ali',25)
human2 = Human('Ahmad',27)

human.greet()
human1.greet()
human2.greet()