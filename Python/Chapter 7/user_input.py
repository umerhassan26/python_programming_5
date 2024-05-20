# message = input('Please say something:')
# print(message)

height = input('Enter your Height:')
height = int(height) # To convert string into number
if height>= 48:
    print('You are tall')
else:
    print('Your height is under 48')

# Even odd example with modolus operator
num = input('Enter a number')
num= int(num)

if num % 2 == 0:
    print('This is even number')
else:
    print('This is odd number')