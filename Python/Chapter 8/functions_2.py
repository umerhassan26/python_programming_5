# Passing a list in the functions

def users(names):
    for name in names:
        msg = f'Hello Good afternoon , {name.title()}!'
        print(msg)
        
username = ['Ali','Ahmad','Imran']
users(username)

# Multiple number of arguments
def make_pizza(*toppings):
    print(toppings)

make_pizza('chilli')
make_pizza('green_chilli','bbq','extra cheese')