# write a program to input numbers 
# and then print in words
from typing import Counter


numDictionary = {
    "1":"One",
    "2":"Two",
    "3":"Three",
    "4":"Four",
    "5":"Five",
    "6":"Six",
    "7":"Seven",
    "8":"Eight",
    "9":"Nine"
}
phone = input("Phone: ")

for item in phone:
    print(numDictionary.get(item), end=" ")

print(" ")
phone1 = input("Phone: ")
output = ""
for ch in phone1:
    output += numDictionary.get(ch, "!")+" "
print(output)