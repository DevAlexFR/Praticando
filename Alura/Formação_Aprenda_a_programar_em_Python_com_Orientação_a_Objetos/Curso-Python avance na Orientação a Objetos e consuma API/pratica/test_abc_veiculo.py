from abc import ABC, abstractmethod

class Veiculo(ABC):
    def __init__(self, marca, modelo):
        self.marca = marca
        self.modelo = modelo

    @abstractmethod
    def ligar(self):
        pass

class Carro(Veiculo):
    def __init__(self, marca, modelo, cor):
        super().__init__(marca, modelo)
        self.cor = cor

    def ligar(self):
        print(f"O carro {self.marca} {self.modelo} de cor {self.cor} está ligado!")


if __name__ == '__main__':

    carro1 = Carro("Toyota", "Corolla", "Prata")
    carro2 = Carro("Honda", "Civic", "Preto")
    carro3 = Carro("Ford", "Mustang", "Vermelho")

    carro1.ligar()
    carro2.ligar()
    carro3.ligar()

