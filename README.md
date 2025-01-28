# ContaSaúde - Sistema de Gestão Financeira para Saúde Pública

Sistema integrado para gestão financeira desenvolvido especificamente para o setor de saúde pública, oferecendo controle de receitas, despesas e relatórios gerenciais.

## 🚀 Tecnologias

- Frontend: Angular 17 + Ionic 7
- Backend: NestJS + TypeORM
- Banco de Dados: MySQL 8
- Containerização: Docker + Docker Compose

## 🌟 Funcionalidades

- Dashboard interativo com gráficos e indicadores
- Gestão de receitas e despesas
- Relatórios gerenciais
- Controle de usuários com dois níveis de acesso:
  - Administrador: Acesso total ao sistema
  - Operador: Acesso limitado a operações básicas
- Interface responsiva (desktop, tablet e mobile)

## 📋 Pré-requisitos

### Windows 11
- Docker Desktop para Windows
- Git
- WSL 2 (Windows Subsystem for Linux)

### Ubuntu Server
- Docker
- Docker Compose
- Git

## 🛠️ Instalação

### Windows 11

1. Instale o WSL 2:
```powershell
wsl --install
```

2. Instale o Docker Desktop para Windows:
- Baixe o instalador em: https://www.docker.com/products/docker-desktop
- Execute o instalador e siga as instruções
- Certifique-se de que a opção "Use WSL 2" está marcada durante a instalação

3. Clone o repositório:
```powershell
git clone https://github.com/rayhenrique/contasaude.git
cd contasaude
```

4. Inicie os containers:
```powershell
docker-compose up -d
```

### Ubuntu Server

1. Instale o Docker:
```bash
# Atualize os pacotes
sudo apt update
sudo apt upgrade -y

# Instale os pré-requisitos
sudo apt install -y apt-transport-https ca-certificates curl software-properties-common

# Adicione a chave GPG do Docker
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# Adicione o repositório do Docker
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Instale o Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io

# Adicione seu usuário ao grupo docker
sudo usermod -aG docker $USER
```

2. Instale o Docker Compose:
```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
```

3. Clone o repositório:
```bash
git clone https://github.com/rayhenrique/contasaude.git
cd contasaude
```

4. Inicie os containers:
```bash
docker-compose up -d
```

## 🌐 Acessando o Sistema

Após a instalação, o sistema estará disponível nos seguintes endereços:

- Frontend: http://localhost:4200
- Backend: http://localhost:3000
- Banco de Dados: localhost:3306

### Credenciais Padrão
```
Administrador:
Email: admin@contasaude.com.br
Senha: admin123

Operador:
Email: operador@contasaude.com.br
Senha: operador123
```

## 🔧 Configuração

As configurações do sistema podem ser ajustadas através dos arquivos de ambiente:

- Frontend: `frontend/.env`
- Backend: `backend/.env`
- Banco de Dados: `docker-compose.yml`

## 📦 Estrutura do Projeto

```
contasaude/
├── docker-compose.yml
├── frontend/
│   ├── Dockerfile
│   └── src/
├── backend/
│   ├── Dockerfile
│   └── src/
└── README.md
```

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autores

- Ray Henrique - [GitHub](https://github.com/rayhenrique)

## 📞 Suporte

Para suporte, envie um email para suporte@contasaude.com.br ou entre em contato via WhatsApp: (82) 99630-4742.
