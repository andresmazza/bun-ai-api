# bun-ai-api

turorial para usar bun con la API de AI de Cerebras y Groq
<https://www.youtube.com/watch?v=ax7_QNZZ-pk>

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v1.3.5. [Bun](https://bun.com) is a fast all-in-one JavaScript runtime.

### nixpacks.toml

```toml
[phases.setup]
nixPkgs = ["bun"]

[phases.install]
cmds = [ "bun install" ]

[phases.build]
cmds = []

[start]
cmd = "bun run start"
```

### Agregar dependencias

bun add @cerebras/cerebras_cloud_sdk groq-sdk

### iniciar sesion en groq

y usar
<https://console.groq.com/playground?model=moonshotai/kimi-k2-instruct-0905>


### TEST
 curl -X POST http://localhost:3000/chat -H "Content-Type: application/json" -d '{ "messages": [{  "role": "user", "content": "Resuelve Fibonacci en Javascript" }] }'
