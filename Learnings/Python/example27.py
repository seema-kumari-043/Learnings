class Person:
    def __init__(self, name):
        self.name = name
    
    def talk(self):
        print(f"Hi, I am {self.name}")

seema = Person("Seema Kumari")
seema.talk()

john = Person("John Smith")
john.talk()