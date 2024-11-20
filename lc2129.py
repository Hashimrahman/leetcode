def capitalizeTitle(self, title: str) -> str:
        titleList = title.split()
        res = []
        for item in titleList:
            if len(item) <= 2:
                res.append(item.lower())
            else:
                res.append(item[0].upper() + item[1:].lower())
        return " ".join(res)