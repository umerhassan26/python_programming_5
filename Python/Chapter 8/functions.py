# Defining a function

def user():
    print('Hellow user')
    
user()
# Passing a information in function

def info(username,lastname,address):
    print(f'Hello, {username.title()} {lastname.title()} {address.title()}')
    
info('umer','hassan','lahore')
info('ali','hassan','gulberg')
info('umer','hassan','lahore')
info('ali','hassan','gulberg')

#Keyword Arguments

def details(name,age):
    print(f'Enter the name: and age: {name}{age}' )

details(name='umer',age=25)
details(name='', age='')

# Default Value Function Parameter
def subject(sub_name,marks=50):
    print(f'My marks is {marks}')
    print(f'Subject name is {sub_name}')

subject(sub_name='Python' )

# Avoid Arguments Error
def info_1(firstname,lastname):
    print(f'Hello, {firstname.title()} {lastname.title()} ')

info_1('Umer','Hassan')

# Return Value Function
def formatted_names(firstname,lastname):
    fullname = f'{firstname},last{lastname}'
    return fullname.upper()
information = formatted_names('umer','hassan')
print(information)

# Return Value Use in Dict
def build_person(firstname,lastname):
    person = {'First': firstname, 'Last':lastname}
    return person
user_info = build_person('umer','hassan')
print(user_info)