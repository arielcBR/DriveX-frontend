# Guia de Contribuição - ManagementApp 🚀

Para manter a organização do nosso projeto no IFSUL, todos os colaboradores devem seguir este fluxo de trabalho no Git.

## 🌿 Política de Branches

Para evitar conflitos e garantir que a versão estável nunca seja quebrada, está proibido comitar diretamente na branch main.

### Estrutura de Branches:

- **main**: Contém apenas código estável e testado. É a versão de entrega para o professor.

- **develop**: Nossa branch principal de integração. Todos os Pull Requests devem ser feitos para cá.

- **feature/**: Use para novas funcionalidades (ex: feature/tela-login, feature/calculo-combustivel).

- **fix/**: Use para correção de bugs (ex: fix/erro-data-corrida).

- **docs/**: Use para atualizações de documentação ou diagramas do Astah.

## 🔄 Fluxo de Desenvolvimento

1. **Sincronize sua develop local:**
   ```bash
   git checkout develop
   git pull origin develop
   ```

2. **Crie sua sub-branch de trabalho:**
   ```bash
   git checkout -b feature/nome-da-sua-tarefa
   ```

3. **Realize seus Commits:**
   - Tente usar mensagens claras (ex: feat: adiciona componente de gráfico de custos).

4. **Abra um Pull Request (PR):**
   - Suba sua branch para o GitHub: `git push origin feature/nome-da-sua-tarefa`.
   - Abra o PR para a branch develop e peça para um colega revisar.

## 📊 Padrões de Dados (Modelagem)

Qualquer alteração na estrutura de dados deve respeitar o Diagrama de Classes localizado em `docs/class_diagram/`.

- **IDs**: Devem ser do tipo UUID.

- **Valores**: Tratar como decimais/money no frontend para evitar erros de arredondamento.

- **Datas**: Seguir o padrão LocalDateTime (ISO 8601 no frontend).

## 🛠️ Ambiente Local

Certifique-se de que sua node_modules está atualizada antes de iniciar uma tarefa:

```bash
npm install
```
