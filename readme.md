# Mobile PoC - Prova de conceito

## Contexto
Uma empresa (Fictícia) e muito afrente de seu tempo, deseja realizar uma “pequena” alteração (melhora) em seu Força de Vendas para contemplar novas necessidades de seus usuários / vendedor. Para isso deve-se implementar uma aplicação cuja função seja:
- Realizar pedidos online / offline.
- Ter a lista de produtos atualizada.
- Ter a lista de clientes atualizada.
- Ter sua lista de pedidos atualizada.

# Requisitos
> Qualquer implementação a mais do pedido no desafio representará apenas um plus

## Funcionais

- Deve ser possível autenticar na aplicação (login e senha / digital / pin / OAUTH 2.0 /...)
- Deve ser possível visualizar a lista de clientes
- Deve ser possível visualizar a lista de produtos
- Deve ser possível criar um novo pedido
- Deve ser possível editar / excluir um pedido já criado
- Deve ser possível operar offline / online

## NFuncionais

- Deve ser executado na plataforma Android.
- Deve ser possível executa-lo em tabletes e celulares apenas.
- Consumo de recursos deve ser o mínimo necessário (Bateria, disco e memória).
- Telas: Login, Lista de produtos, lista de clientes, lista de pedidos

## Informações Adicionais

- Listagem de 2000 produtos
- Atualização das informações em segundo plano (produtos, clientes e pedidos)
- Testes: Unitários / Integração
- Frameworks / Bibliotecas disponíveis
- Padrões de projetos
- System Designer
- Comunidade
- Suporte
- Padronização do código
- dry (Não repita regra de negócio)

## Schemas

**produto**
```json
    {
        "pro_codigo": 1,
        "pro_descricao": "produto descrição teste",
        "estoque": 35.00,
        "valor": 25.00,
        "fotos": [
            "https://www.image-link.com",
            "https://www.image-link.com",
            "https://www.image-link.com",
        ]
    }
```

**cliente**
```json
    {
        "cli_codigo": 1,
        "cli_nome": "CLIENTE FAKE DA SILVA",
        "cli_fones": [
            "69999999999",
            "6932222222"
        ],
        "cli_limite": 150.000,
        "cli_endereco": {
            "cidade": "Porto Velho",
            "estado": "Rondônia",
            "cep": "76825-654",
            "numero": "54",
            "complemento": ""
        }
    }
```

**pedido**
```json
    {
        "pedidos": [
            {
                "produto": [
                    {
                        "pro_codigo": 1,
                        "quantidade": 5
                    }
                ],
                "cli_codigo": 1,
                "data_pedido": 2020-05-02
            }
        ]
    }
```

**usuario**
```json
    {
        "usuario": {
            "nome": "Joãozinho Fake da Silva",
            "email": "joaozin_dasilva@fake.com.br",
            "empresa_atuante": [
                1, 2, 3, 4
            ],
            "profile": {
                "foto-perfil": "https://img-profile.com.br",
                "tema-aplicacao": "DARK",
            },
            "dtCriacao": 2020-02-05,
            "dtAtualizacao": 2020-02-05
        }
    }
```


## Implementações

### Tecnologias
* Android Studio - Kotlin
* Flutter - Dart
* Xamarin - C#
* React Native - JS

### Pontos a serem apresentados
> Guia para construção das apresentações

* Implementação
    - Como você implementou ?
    - Porque você implementou desta forma ? 
    - Existem alteranativas a essa sua implementação ?
* Performance
* Disponibilidade / Processo de distribuição do binário final
* Pontos positivos
* Pontos negativos
    - Há meios alternativas de contornar este problema?
* Considerações finais
    - Porque a empresa deveria adotar esta tecnologia para mobile?
