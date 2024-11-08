def countEven(self, num: int) -> int:
        count = 0
        for i in range(1, num + 1):
            i = str(i)
            sum = 0
            for digits in i:
                sum += int(digits)
            if sum % 2 == 0:
                count += 1
        return count