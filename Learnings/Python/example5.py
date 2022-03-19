'''going to learn about-
   len()
   course.upper()
   course.lower()
   course.title()
   course.find()
   course.replace()
   "come string" in course
   '''

course = "Python for Beginners"
print(len(course))
print(course.upper())
print(course)

print(course.lower())

# finding index of char
print(course.find("P"))

# finding begin index of word
print(course.find("for"))

#replacing  char or string from string
#none of these operations change the string
#it only apply changes and then return the changed string
print(course.replace("P", "J"))
print(course.replace("for", "the"))

#how to check if string contains word or char
print("Python" in course)