class Solution:
    def commonFactors(self, a: int, b: int) -> int:
        count = 0
        if a > b:
            greater = a
        else:
            greater = b
        for i in range(1,(greater//2)+1):
            if(a % i == 0 and b % i == 0):
                count+=1
        if a == b:
            count+=1
        return count