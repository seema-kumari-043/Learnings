
start_state = False
while True:
    command = input("> ").lower()
    if command=="help":
        print("""
start - to start the car
stop - to stop the car
quit - to exit the game
help - for help
        """)
    elif command == "start":
        if not start_state:
            print("Car is running now....")
            start_state = True
        else:
            print("Hey! car is already running....")
    
    elif command== "stop":
        if start_state:
            print("Car has stopped.")
            start_state = False
        else:
            print("Hey! Car has already stopped!!")
    elif command == "quit":
        break
    else:
        print("I don't ubderstand you.")
        
        