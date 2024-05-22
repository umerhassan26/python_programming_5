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
        