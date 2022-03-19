# functions with parameters in the python
def greet_user(first_name, last_name):
    print(f"Hi {first_name} {last_name}!")
    print("Wecome aboard")

print("Start")
# using keyword arguments
greet_user(last_name="Smith", first_name="John")
print("Finished")
