number = [4, 3, 6, 2 ,7]
largest_num = number[0]
for item in number[1:]:
    if item > largest_num:
        largest_num = item
print(largest_num)
