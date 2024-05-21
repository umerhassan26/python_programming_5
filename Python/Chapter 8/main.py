import camelcase

abc = camelcase.CamelCase()
txt = 'this is a txt in camel case'
print(abc.hump(txt))