weight = float(input("Weight: "))
unit = input("(L)bs or (K)g: ")

if unit == 'L'or unit == 'l':
    kg = weight*0.45
    print(f"You are {kg} kilograms")
elif unit == 'K'or unit == 'k':
    l = weight/0.45
    print(f"You are {l} pounds")
else:
    print("Please enter correct input")