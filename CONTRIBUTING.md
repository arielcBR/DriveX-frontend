# Guia de Contribuição - ManagementApp 🚀

Para manter a organização do nosso projeto no IFSUL, todos os colaboradores devem seguir este fluxo de trabalho no Git.

## 🌿 Política de Branches

Para evitar conflitos e garantir que a versão estável nunca seja quebrada, está proibido comitar diretamente na branch main.

### Estrutura de Branches:

- **main**: Contém apenas código estável e testado. É a versão de entrega para o professor.

- **feature/**: Use para novas funcionalidades (ex: feature/tela-login, feature/calculo-combustivel).

- **fix/**: Use para correção de bugs (ex: fix/erro-data-corrida).

- **docs/**: Use para atualizações de documentação ou diagramas UML.

## 🔄 Fluxo de Desenvolvimento

1. **🔄 Sempre sincronizar a main: (Obrigatório)** 
   ```bash
   git checkout main
   git fetch origin
   git pull origin main
   ```

2. **Crie sua sub-branch de trabalho:**
   ```bash
   git checkout -b feature/nome-da-sua-tarefa
   ```

3. **💻 Desenvolver e commitar**
   ```bash
   git add .
   git commit -m "mensagem commit"
    ```
   - Tente usar mensagens claras (ex: feat: adiciona componente de gráfico de custos).

4. **🚀 Subir a branch**
   ```bash
   git push origin feature/nome-da-sua-tarefa
    ```

5. **Abra um Pull Request (PR):**
   - Abra o PR para a branch develop e peça para um colega revisar.
  
  **Observações gerais!**

- **IDs**: Devem ser do tipo UUID.

- **Valores**: Tratar como decimais/money no frontend para evitar erros de arredondamento.

- **Datas**: Seguir o padrão LocalDateTime (ISO 8601 no frontend).

***🧩 Organização de Componentes***
- 📁 Componentes reutilizáveis (globais)
Devem ser criados em:
```bash
   src/components/
```
Critério:
👉 Componentes que são utilizados em duas ou mais telas.

- 📁 Componentes específicos de tela
Devem ser criados dentro da própria tela:
```bash
   src/app/nome-da-tela/components/
```
Critério:
👉 Componentes que são usados apenas em uma única tela.

## 🛠️ Ambiente Local

Certifique-se de que sua node_modules está atualizada antes de iniciar uma tarefa:

```bash
npm install
```
