# Dictionary in python
# We define dictionary in python using {}
customer = {
    "name": "John Smith",
    "age": 40,
    "is_verified": True
}
# updating values
customer["name"]="Seema Smith"
# adding key in dictionary
customer["birthdate"] = 1994
# printing value of key
print(customer["name"])
# trying to acess the key which is not defined
print(customer.get("Phone"))

