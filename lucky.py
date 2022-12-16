
arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
    23, 24, 25, 26, 27, 28, 29, 30,
]
count = 1

for i in range(1, len(arr)):
    if len(arr) <= i:
        break
    else:
        while True:
            if len(arr) <= count:
                count = i+1
                break
            else:
                arr.remove(arr[count])
                count += i

    print(i, ".step completed. Output is :", arr)
