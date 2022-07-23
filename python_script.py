import webbrowser
import sys

#this is a comment!

"""
print("this is also a comment")
"""


def run(action):
	print("\n")
	if action == "web":
		web()
	elif action == "exit":
		exit()
	else:
		other()

myName = "buddy"

def web():
	website = "msn.com"
	webbrowser.open(sys.argv[1])
	print("What website would you like to open? ")
	sys.stdout.flush()

def other():
	print("That is not an option.  Try again " + myName)
	restart()

def restart():
	print("\n")
	x = input("name, web, mult, misc, or exit? ")
	run(x)

"""
restart()
"""

web()
