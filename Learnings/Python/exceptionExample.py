try:
    age = int(input("Age: "))
    income = 20000
    risk = income/age
    print(age)
except ZeroDivisionError:
    print("Age propably is not zro")
except ValueError:
    print("Invalid value")