# Estudos academicos
# Setup do Projeto FastZero

## Pré-requisitos
- Python 3.11 instalado
- PowerShell (Windows)

## Passos de Configuração

1. **Instalação do Pipx (gerenciador de ambientes isolados)**
   ```powershell
   py -m pip install --user pipx; py -m pipx ensurepath
   # Fechar e reabrir o terminal aqui (importante!)

2. **Instalação do Poetry (gerenciador de dependências)**
   ```powershell
   pipx install poetry

3. **Plugins essenciais do Poetry**
   ```powershell
    poetry self add poetry-plugin-shell

    # Configurar para criar .venv no projeto
    poetry config virtualenvs.in-project true

4. **Criação do projeto**
   ```powershell
    poetry new --flat fast_zero 
    cd fast_zero

5. **Configuração do ambiente virtual**
   ```powershell
    poetry python install 3.11
    poetry env use 3.11 # Editar pyproject.toml -> requires-python = ">=3.11,<4.0"

6. **Ativação do ambiente virtual**
   ```powershell
    poetry shell

7. **Instalação de dependências**
   ```powershell
   poetry add 'fastapi[standard]'

8. **Execução da aplicação**
   ```powershell
     poetry run python -m uvicorn fast_zero.app:app --reload


## Observações

   ```powershell
deactivate # Para desativar o ambiente

