# Inicializar um repositório
git init

# Adicionar arquivos ao staging
git add .              # Todos os arquivos
git add arquivo.txt    # Arquivo específico

# Commit
git commit -m "mensagem descritiva"

# Branching
git branch                          # Listar branches
git branch nova-branch             # Criar nova branch
git checkout nova-branch           # Trocar de branch
git checkout -b nova-branch        # Criar e trocar de branch

# Merge
git merge branch-alvo              # Mesclar branch atual com a branch-alvo

# Push/Pull
git push origin main               # Enviar commits para o GitHub
git pull origin main               # Atualizar repositório local

# Status e logs
git status
git log --oneline                  # Histórico simplificado




# GH
# Autenticar no GitHub
gh auth login

# Criar um repositório remoto
gh repo create

# Gerenciar Issues
gh issue create     # Criar issue
gh issue list       # Listar issues
gh issue close 123  # Fechar issue #123

# Gerenciar Pull Requests
gh pr create        # Criar PR
gh pr checkout 123  # Checkout da PR #123
gh pr merge 123     # Mergear PR #123

# Clonar repositórios
gh repo clone usuario/repositorio

# Forkar um repositório
gh repo fork usuario/repositorio

# Workflows do GitHub Actions
gh workflow list     # Listar workflows
gh run watch         # Monitorar execução recente
