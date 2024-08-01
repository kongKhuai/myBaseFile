
 
==清理缓存==
```
npm cache clean --force
```
==删除.npmrc==
```
npm config get proxy
```

```
npm config rm proxy
```

```
npm config rm https-proxy
```


删除 `node_modules`

```
# Mac/Linux  
rm -rf node_modules


# Windows  
rd /s /q node_modules
```