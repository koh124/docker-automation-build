# DockerHub への自動ビルド＆プッシュ

github に push で DockerHub レジストリへの自動ビルドとプッシュをします

```
# イメージのpullとコンテナの起動
# DockerHubリポジトリ: koh124/cicd
docker pull koh124/cicd:main
docker run --name {container_name} -d -p 5173:5173 -it koh124/cicd:main
```

しばらくするとコンテナのサーバーが立ち上がり、[localhost:5173](http://localhost:5173) に接続できるようになります。
