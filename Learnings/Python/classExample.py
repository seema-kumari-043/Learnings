# This is how we create classes in python
# I am a bit surprised how attributes are defined
class Point:
    # constructor
    def __init__(self, x, y):
        self.x = x
        self.y = y
    def move(self):
        print("move")
    def draw(self):
        print("draw")

# creating object
obj = Point(20, 30)
print(obj.x, obj.y)
obj.draw()
obj.move()