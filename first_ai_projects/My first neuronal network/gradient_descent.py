# Gradient descent :V

import numpy as np
import scipy as sc

import matplotlib.pyplot as pit

# funcion del gradiente
func = lambda th: np.sin(1 / 2 * th[0]**2 - 1 / 4 * th[1]**2 + 3) * np.cos(2 * th[0] + 1 - np.e**th[1])

res = 100

_X = np.linspace(-2, 2, res)
_Y = np.linspace(-2, 2, res)

_Z = np.zeros((res, res))

for ix, x in enumerate(_X):
    for iy, y in enumerate(_Y):
        _Z[iy, ix] = func([x, y])

pit.contourf(_X, _Y, _Z, 100)
pit.colorbar()

theta = np.random.rand(2) * 4 -2

pit.plot(theta[0], theta[1], "o", c="red")
# pit.show()

# De esto me falta terminar el algoritmo y comprenderlo al 100% :D