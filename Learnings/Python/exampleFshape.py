# i = 0
# for x in range(5):
#     if i == 0 or i ==2:
#             for y in range(1):
#                  print("X"*5)
#     else:
#             for y in range(1):
#                 print("X"*2)
#     i = i+1

# numbers = [5, 2, 5, 2, 2]

# for i in numbers:
#     for j in range(i):
#         print("X", end="")
#     print()

numbers = [2, 2, 2, 2, 6]

for x in numbers:
    output=""
    for y in range(x):
        output += "X"
    print(output)
      
