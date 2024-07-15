### 默认头设置

Axios 允许你为所有的请求设置默认的请求头。这在你需要为所有请求添加相同的头信息（如认证令牌）时非常有用。你可以通过 `axios.defaults.headers.common` 来设置默认的请求头。

```
axios.defaults.headers.common['Authorization'] = 'Bearer your-token-here'
axios.defaults.headers.common['Content-Type'] = 'application/json'
```

### 全局头设置

除了默认头设置，Axios 还允许你为不同的请求方法（如 GET、POST、PUT 等）设置全局的请求头。这可以通过 `axios.defaults.headers[method]` 来实现。

```
axios.defaults.headers.get['Authorization'] = 'Bearer your-token-here';
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
```
### 自定义头设置

对于某些特定的请求，你可能需要设置与全局或默认设置不同的请求头。这可以通过在请求配置中指定 `headers` 字段来实现。

```
1. `axios({`
2. `method: 'post',`
3. `url: 'http://example.com/data',`
4. `headers: {`
5. `'Authorization': 'Bearer another-token-here',`
6. `'Content-Type': 'application/json',`
7. `'Custom-Header': 'custom-value'`
8. `},`
9. `data: {`
10. `key1: 'value1',`
11. `key2: 'value2'`
12. `}`
13. `})`
14. `.then(response => {`
15. `console.log(response.data);`
16. `})`
17. `.catch(error => {`
18. `console.error(error);`
19. `});`
```

### 响应头处理

除了请求头，响应头也是 HTTP 通信中重要的一部分。Axios 会自动将响应头转换为 JavaScript 对象，并作为响应的一部分返回。你可以通过 `response.headers` 来访问响应头。

1. `axios.get('http://example.com/data')`
2. `.then(response => {`
3. `console.log(response.headers); // 打印响应头`
4. `console.log(response.data); // 打印响应数据`
5. `})`