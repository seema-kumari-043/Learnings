# Write a program to remove duplicates in list

numbers = [3, 5, 3, 2, 7, 9]
numbers.sort()
for items in numbers:
    if numbers.count(items)>1:
        numbers.remove(items)

print(numbers)

# Another method 
numbers1 = [2, 2, 4, 6, 3, 4, 6]
unique = []
for number in numbers1:
    if number not in unique:
        unique.append(number)
print(unique)