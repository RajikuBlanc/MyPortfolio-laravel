# docker-laravel-handson7.3

## Clone後にすること
```shell
git clone https://github.com/RajikuBlanc/docker-laravel-handson7.3
```
### プロジェクトフォルダに移動
```shell
cd docker-laravel-handson7.3
```

### git remoteの変更
```shell
git remote set-url origin リポジトリURL
```


### Dockerを起動
```shell
docker compose up -d --build
```

### composer install
```shell
docker-compose exec app composer install
```

### .envファイルを作成
.env.exampleファイルを複製して.envファイルを作成する
```shell
cd backend
```
```shell
cp .env.example .env
```

### サーバーを開く
```shell
docker-compose exec app php artisan serve
```

Keyを作成しろと言われるので
Generate App Keyボタンをおす

### ホットリロード
新しいターミナルを開いて
```shell
cd backend
npm run watch
```
