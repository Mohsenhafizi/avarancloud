# ------------------------------------------- Builder
FROM golang:alpine AS builder

WORKDIR /app

COPY go.mod ./

RUN go mod download

COPY . .

ENV GOCACHE=/root/.cache/go-build

RUN --mount=type=cache,target="/root/.cache/go-build" go build -o /entrypoint

# ------------------------------------------- Runtime
FROM alpine:latest AS runtime

WORKDIR /app

COPY --from=builder /entrypoint .

ENTRYPOINT ["/bin/sh", "-c", "./entrypoint"]
