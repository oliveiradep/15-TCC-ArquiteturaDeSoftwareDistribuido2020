# 15-TCC-ArquiteturaDeSoftwareDistribuido2020

## Installation

$ docker-compose up -d

## Sample Requests

```
curl --location --request POST 'http://localhost:3000/associados' \
--header 'Content-Type: application/json' \
--data-raw '{
    "nome": "Pedro Silva",
    "dataNascimento": "01-01-2000",
    "profissao": "Estudante",
    "escolaridade": "Ensino Superior Incompleto",
    "cpf": 90943898005,
    "email": "pedro.silva@mail.com",
    "telefone": {
        "ddi": "55",
        "ddd": "21",
        "numero": "912348765"
    },
    "endereco": {
        "cep": 22240000,
        "logradouro": "Rua das Laranjeiras",
        "numero": 14,
        "complemento": "APTO 101",
        "bairro": "Laranjeiras",
        "cidade": "Rio de Janeiro",
        "estado": "RJ",
        "pais": "Brasil"
    },
    "historicoSaude": [
        {
            "descricao": "Consulta com clínico geral realizada em 22/03/2022",
            "data_registro": "23/03/2022"
        },
        {
            "descricao": "Exame de sangue completo marcado para em 29/03/2022",
            "data_registro": "23/03/2022"
        }
    ],
    "plano": "MEDICO_E_ODONTOLOGICO",
    "tipoPlano": "VIP",
    "situacao": "ATIVO"
}'
```

```
curl --location --request POST 'http://localhost:3001/cadastro' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "joao.silva@gmail.com",
    "escopo": "CADASTRAR_ASSOCIADOS"
}'
```

```
curl --location --request POST 'http://localhost:3001/login' \
--header 'Content-Type: application/json' \
--data-raw '{
    "email": "joao.silva@gmail.com",
    "senha": "70764350-529d-411d-a00c-a374d8b42cce"
}'
```

```
curl --location --request POST 'http://localhost:3001/verificacao' \
--header 'Content-Type: application/json' \
--data-raw '{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlc2NvcG8iOiJDQURBU1RSQVJfQVNTT0NJQURPUyIsImlhdCI6MTY0ODAwNDc4NywiZXhwIjoxNjQ4MDA0ODE3fQ.6qeVIHaoihiEEkQk2lFJ1Ebao73HFQiiNn1mwwERqHA",
    "escopo": "CADASTRAR_ASSOCIADOS"
}'
```
