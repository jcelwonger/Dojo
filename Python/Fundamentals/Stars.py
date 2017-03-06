def draw_stars(arr):
    for i in arr:
        if type(i) is str:
            print (i[:1] * len(i)).lower()
        else:
            print '*' * i


x = [4, "Tom", 1, 'Michael', 5, 7, 'Jimmy Smith']
print draw_stars(x)
