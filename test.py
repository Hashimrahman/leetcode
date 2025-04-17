class Hello:
    def speak(self):
        return "Hello"

class Hi(Hello):
    def speak(self):
        return "Hi"

Greet = Hi()
print(Greet.speak())