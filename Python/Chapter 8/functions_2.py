# Passing a list in the functions

def users(names):
    for name in names:
        msg = f'Hello Good afternoon , {name.title()}!'
        print(msg)
        
username = ['Ali','Ahmad','Imran']
users(username)

# Multiple number of arguments
def makepizza(*toppings):
    print(toppings)

makepizza('chilli')
makepizza('green_chilli','bbq','extra cheese')