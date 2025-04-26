class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        stack = []
        ops = {
            '+': lambda x, y: x + y,  
            '-': lambda x, y: x - y,  
            '*': lambda x, y: x * y,
            '/': lambda x, y: int(x / y)
        }
        for item in tokens:
            if item not in ops:
                stack.append(int(item))
            else:
                val1 = stack.pop()
                val2 = stack.pop()
                res = ops[item](val2,val1)
                stack.append(res)
        return stack[0]