class Solution:
    def isValid(self, s: str) -> bool:
        stack = []
        for i in s:
            if i in ['(','[','{']:
                stack.append(i)
            elif i in [')',']','}']:
                if len(stack) == 0:
                    return False
                top=stack.pop()
                print(i,top)
                if not (top == '(' and i == ')' or top == '[' and i == ']' or top == '{' and i == '}'):
                    return False
        if len(stack) == 0:
            return True
        else:
            return False