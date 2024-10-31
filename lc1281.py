class Solution:
    def subtractProductAndSum(self, n: int) -> int:
        n_list = [int(x) for x in str(n)]
        sum_of_digits = sum(n_list)
        product_of_digits = 1
        for i in n_list:
            product_of_digits *= i
        return product_of_digits - sum_of_digits