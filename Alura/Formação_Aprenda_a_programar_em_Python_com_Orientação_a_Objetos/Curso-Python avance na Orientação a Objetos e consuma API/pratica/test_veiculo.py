class Veiculo:
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo
        self._ligado = False

    def __str__(self):
        status = "ligado" if self._ligado else "desligado"
        return f"{self.marca} {self.modelo} - Estado: {status}"

class Carro(Veiculo):
    def __init__(self, marca, modelo, portas):
        super().__init__(marca, modelo)
        self.portas = portas

    def __str__(self):
        return f"{super().__str__()}, Portas: {self.portas}"

class Moto(Veiculo):
    def __init__(self, marca, modelo, tipo):
        super().__init__(marca, modelo)
        self.tipo = tipo

    def __str__(self):
        return f"{super().__str__()}, Tipo: {self.tipo}"
    
if __name__ == '__main__':

    carro1 = Carro("Ford", "Focus", 4)
    carro2 = Carro("Fiat", "Argo", 2)
    moto1 = Moto("Honda", "CB 500", "casual")

    print(carro1)
    print(carro2)
    print(moto1)
