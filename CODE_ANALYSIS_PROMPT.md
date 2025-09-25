# Prompt para Análise de Código - Agente GitHub

## Contexto do Projeto
Este é um projeto de marketplace e-commerce com:
- **Backend**: NestJS + TypeScript + PostgreSQL + Redis
- **Frontend**: Next.js + TypeScript + Tailwind CSS
- **Infraestrutura**: Docker + Docker Compose
- **CI/CD**: GitHub Actions

## Objetivo da Análise
Analisar o código segundo os critérios de qualidade, funcionalidade e boas práticas para um projeto de produção.

## Critérios de Análise

### 1. **Estrutura e Organização**
- [ ] Estrutura de pastas lógica e consistente
- [ ] Separação clara de responsabilidades
- [ ] Modularização adequada
- [ ] Configurações centralizadas

### 2. **Qualidade do Código**
- [ ] TypeScript bem tipado
- [ ] Nomes descritivos e consistentes
- [ ] Funções pequenas e focadas
- [ ] Tratamento de erros adequado
- [ ] Validações de entrada

### 3. **Segurança**
- [ ] Autenticação JWT implementada
- [ ] Validação de dados de entrada
- [ ] Proteção contra SQL injection
- [ ] Variáveis de ambiente seguras
- [ ] CORS configurado adequadamente

### 4. **Performance**
- [ ] Queries otimizadas
- [ ] Cache implementado (Redis)
- [ ] Paginação em listagens
- [ ] Lazy loading onde apropriado
- [ ] Compressão de imagens

### 5. **Testes**
- [ ] Cobertura de testes adequada
- [ ] Testes unitários
- [ ] Testes de integração
- [ ] Testes E2E
- [ ] Mocks apropriados

### 6. **Documentação**
- [ ] README completo e atualizado
- [ ] Documentação da API (Swagger)
- [ ] Comentários no código
- [ ] Exemplos de uso
- [ ] Guias de instalação

### 7. **DevOps/CI-CD**
- [ ] Docker configurado corretamente
- [ ] GitHub Actions funcionando
- [ ] Deploy automatizado
- [ ] Variáveis de ambiente
- [ ] Health checks

### 8. **UX/UI**
- [ ] Interface responsiva
- [ ] Acessibilidade básica
- [ ] Feedback visual adequado
- [ ] Navegação intuitiva
- [ ] Tratamento de estados de loading/erro

## Métricas de Qualidade

### Backend
- **Cobertura de testes**: > 80%
- **Complexidade ciclomática**: < 10
- **Duplicação de código**: < 5%
- **Tempo de resposta**: < 200ms (média)

### Frontend
- **Lighthouse Score**: > 90
- **Bundle size**: < 500KB (gzipped)
- **First Contentful Paint**: < 1.5s
- **Cumulative Layout Shift**: < 0.1

### Geral
- **Build time**: < 5 minutos
- **Deploy time**: < 10 minutos
- **Uptime**: > 99%

## Checklist de Funcionalidades

### Autenticação
- [ ] Registro de usuário
- [ ] Login com JWT
- [ ] Confirmação de email
- [ ] Recuperação de senha
- [ ] Logout

### Produtos
- [ ] CRUD completo
- [ ] Listagem com filtros
- [ ] Paginação
- [ ] Upload de imagens
- [ ] Controle de estoque

### Carrinho
- [ ] Adicionar produtos
- [ ] Remover produtos
- [ ] Atualizar quantidades
- [ ] Persistência
- [ ] Cálculo de totais

### Admin
- [ ] Painel administrativo
- [ ] Gerenciamento de produtos
- [ ] Gerenciamento de usuários
- [ ] Relatórios básicos

## Pontos de Melhoria Identificados

### Críticos (Corrigir imediatamente)
- [ ] Implementar validações de entrada
- [ ] Adicionar tratamento de erros
- [ ] Configurar CORS adequadamente
- [ ] Implementar rate limiting

### Importantes (Próxima sprint)
- [ ] Melhorar cobertura de testes
- [ ] Otimizar queries
- [ ] Implementar cache
- [ ] Adicionar logs estruturados

### Desejáveis (Futuro)
- [ ] Implementar monitoramento
- [ ] Adicionar métricas
- [ ] Melhorar acessibilidade
- [ ] Implementar PWA

## Relatório de Análise

### Pontos Fortes
1. Estrutura bem organizada
2. Uso adequado de TypeScript
3. Docker configurado
4. Separação de responsabilidades

### Pontos de Atenção
1. Falta de testes
2. Validações insuficientes
3. Tratamento de erros básico
4. Documentação incompleta

### Recomendações
1. Implementar testes unitários
2. Adicionar validações robustas
3. Melhorar tratamento de erros
4. Completar documentação
5. Implementar monitoramento

## Score Final
- **Funcionalidade**: 7/10
- **Qualidade**: 6/10
- **Segurança**: 5/10
- **Performance**: 6/10
- **Testes**: 3/10
- **Documentação**: 6/10

**Score Geral**: 5.5/10

## Próximos Passos
1. Implementar testes críticos
2. Adicionar validações de segurança
3. Melhorar tratamento de erros
4. Completar documentação
5. Implementar monitoramento básico
