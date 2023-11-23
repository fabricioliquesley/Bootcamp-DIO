# Git e Github

**Git** é um sistema de versionamento de código Open Source, ele permite criar e gerenciar deferentes versões de sistemas, software, aplicativos entre outros. 
<br>
<br>
**Github** é uma plataforma de hospedagem de código para controle de versão, opera em conjunto com o **Git**, e permite a colaboração entre desenvolvedores atuando em um mesmo projeto.

## Comandos básicos do Git

### Init

```
git init
```

É responsável por iniciar o repositório local.

### Add

```
git add <nome do arquivo>
```

É utilizado para passa o arquivo para a área de preparação (staging area), indicando para o git que ele está pronto para ser commitado. Podem ser adicionados vários arquivos de uma vez utilizando ``git add .``

### Commit

```
git commit -m "Mensagem do commit"
```

É utilizado para passar o arquivo da staging area para a area de repositório, onde eles poderão ser enviados posteriormente para o repositório remoto no github.

### Push

```
git push origin main 
```

É utilizado para enviar os arquivos do repositório local para o remoto.

### Pull

```
git pull
```

É utilizado para trazer os arquivos do repositório remoto para o local.

### Status

```
git status
```

É utilizado para verificar o estagio em que os arquivos se encontram.

### Log

```
git log
```

É utilizado para exibir os commits mais recentes realizados no repositório.

### Branch

```
git branch
```

Lista todas as branches existentes no repositório.


### Checkout

```
git checkout -b <nome da nova branch>
```

Cria uma nova branch a partir de uma existente no repositório.

## Mais informações

[🔗 Documentação Git](https://git-scm.com/doc)<br>
[🔗 Documentação Github](https://docs.github.com/pt)