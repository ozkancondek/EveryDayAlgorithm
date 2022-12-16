# f(x,y,t) = x**2+3t+y
# f(x)=x
# f(5)=5
# 1-return var mi
# 2-cagirilmis mi
def cevreDaire(sema, pi):
    return 2*pi*sema


def alanDaire(r, pi):
    return pi*r*r


def alanVeCevreToplami(sema, sari):
    cevreVeAlanToplami = cevreDaire(sema, sari) + alanDaire(sema, sari)
    return cevreVeAlanToplami


# print(alanVeCevreToplami(5, 3.14))

arr = list(range(1, 5))
print(arr)
