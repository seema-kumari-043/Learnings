num = 9
i = 0
while i<3:
    k = int(input("Guess: "))
    i = i+1
    if k == num:
        print("You Won! ")
        break
    # elif i==3:
    #     print("You Failed!! ")
else:
    print("Sorry! you failed!!")