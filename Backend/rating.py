class Rating:
    def __init__(self, queen_list):
        self.queen = queen_list

    def rate_result(self):
        if len(self.queen) != 8:
            return False
        else:
            flag = 0
            for i in range(0, 7):
                originX = self.queen[i]['x']
                originY = self.queen[i]['y']
                for j in range(i + 1, 8):
                    compX = self.queen[j]['x']
                    compY = self.queen[j]['y']
                    if ((compX == originX) or 
                    (compY == originY) or 
                    (abs(compX - originX) == abs(compY - originY))):
                        flag = 1
                        break
                if (flag == 1):
                    break
            if (flag == 1):
                return False
            else:
                return True
