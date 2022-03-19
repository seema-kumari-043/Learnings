# inheritance in Python
class Mammal:
    def walk(self):
        print("walk")

class Dog(Mammal):
    def doggieLove(self):
        print("LOve you dog")

class Cat(Mammal):
    pass


dogObj = Dog()
dogObj.walk()
dogObj.doggieLove()
