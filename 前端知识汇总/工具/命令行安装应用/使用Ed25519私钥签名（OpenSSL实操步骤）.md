
  

前提：你已完成2步核心操作——① 安装ShiningLight.OpenSSL.Light（已验证可用）；② 生成ed25519-private.pem（私钥）和ed25519-public.pem（公钥），且私钥保存在本地目录（如桌面）。

  

核心逻辑：Ed25519签名需「私钥+待签名字符串」，通过OpenSSL命令生成签名文件；后续可通过公钥验证签名有效性（可选，用于确认签名正确），全程在本地终端操作，私钥不会泄露。

  

## 一、准备工作（必做）

  

1. 打开终端（管理员/普通用户均可，无需管理员权限），切换到「私钥所在目录」（以桌面为例，复制命令直接执行）：

        `cd C:\Users\86166\Desktop`

  

2. 确认私钥存在：执行以下命令，能显示私钥文件即正常（无需打开私钥）：

        `dir ed25519-private.pem`

  

3. 准备「待签名字符串」：比如你要签名的内容是 `hello world`（可替换为你实际需要签名的任意字符串），建议先将字符串保存为文本文件（避免中文/特殊字符乱码，推荐方式），执行命令创建文本文件并写入内容：

        `echo "hello world" > to-sign.txt`说明：若待签名内容有中文/特殊字符，直接用echo可能乱码，可手动新建to-sign.txt文件，粘贴内容后保存（编码选UTF-8）。

  

## 二、核心步骤：用私钥签名（2种方式，任选其一）

  

两种方式均基于OpenSSL，本质一致，区别是签名输出格式不同（推荐方式1，通用且适配大多数场景，如JWT认证）。

  

### 方式1：生成「PEM格式签名」（推荐，可直接用于验证/上传）

  

执行以下命令，用ed25519-private.pem私钥，对to-sign.txt中的字符串进行签名，生成签名文件signature.pem：

      `openssl dgst -sha256 -sign ed25519-private.pem -out signature.pem to-sign.txt`

  

命令解析（无需记忆，直接复制）：

      `dgst`：OpenSSL的哈希/签名命令；`-sha256`：签名哈希算法（Ed25519通常搭配SHA-256，固定写法）；`-sign ed25519-private.pem`：指定用于签名的Ed25519私钥；`-out signature.pem`：指定签名结果保存的文件（可自定义文件名，如my-sign.pem）；`to-sign.txt`：待签名的字符串文件（替换为你实际的文件路径/名称）。

  

执行成功后，桌面会生成signature.pem文件，这就是你的Ed25519签名结果（无需打开，后续验证/使用时直接调用该文件即可）。

  

### 方式2：生成「Base64格式签名」（适合需要文本格式签名的场景）

  

若你需要将签名转为可复制的文本（而非PEM文件），执行以下命令，直接输出Base64编码的签名：

      `openssl dgst -sign ed25519-private.pem to-sign.txt | openssl base64 -A`

  

### 报错原因解析（对应你遇到的错误）

  

报错核心原因：**`-sha256`** **Ed25519 算法属于 EdDSA（爱德华兹曲线数字签名算法），该算法本身已内置固定的哈希逻辑（默认采用SHA-256），不允许手动通过 显式指定哈希算法**，你在命令中添加了 `-sha256` 参数，违反了 EdDSA 算法的使用规范，导致 OpenSSL 无法初始化签名上下文，从而抛出「Explicit digest not allowed with EdDSA operations」（EdDSA 操作不允许显式指定摘要）错误。

  

补充说明：Ed25519 与 RSA、ECDSA 算法不同，后两者需要手动指定哈希算法（如 -sha256），而 Ed25519 算法设计时已将哈希逻辑整合，无需额外指定，强行添加 `-sha256` 会触发兼容性报错，这是 OpenSSL 3.0+ 版本对 EdDSA 算法的规范限制。

  

### 错误命令修正（直接复制执行即可成功）

  

删除命令中的 `-sha256` 参数，正确命令如下（适配你当前的目录 E:\work\JC\sign）：

      `E:\work\JC\sign>openssl dgst -sign ed25519-private.pem to-sign.txt | openssl base64 -A`

  

执行后，终端会直接显示一串 Base64 编码的字符串，即为 Ed25519 文本格式签名，可复制保存使用。

  

说明：

      1.  命令末尾的`-A`：将Base64签名输出为一行文本（方便复制粘贴），避免换行导致签名失效；

      2.  无需添加 `-sha256`，Ed25519 算法会自动使用内置的哈希逻辑完成签名，与你之前生成PEM格式签名时的哈希规则一致，不影响签名有效性和后续验证；

      3.  若仍报错，可确认 OpenSSL 版本（执行 `openssl version`），确保为3.0.1及以上（你安装的3.6.1满足要求），同时确认私钥（ed25519-private.pem）和待签名文件（to-sign.txt）在当前目录下存在。

  

## 三、可选步骤：验证签名是否正确（确保签名有效）

  

签名后可通过公钥验证，确认签名未被篡改、私钥使用正确，执行命令：`openssl dgst -sha256 -verify ed25519-public.pem -signature signature.pem to-sign.txt`

  

验证结果说明：

     终端输出 `Verified OK`：签名正确，私钥、待签名内容、公钥匹配；终端输出 `Verification Failure`：签名失败，检查私钥是否正确、待签名内容是否被修改、公钥是否与私钥匹配。

  

## 四、常见问题解决（必看，避坑）

  

- 问题1：执行命令提示「No such file or directory」（找不到文件）

解决：确认终端当前目录正确（cd到私钥/待签名文件所在目录），确认文件名拼写正确（如ed25519-private.pem，不要漏写后缀）。

  

- 问题2：提示「digital envelope routines:EVP_DigestSignInit:disabled for FIPS」（签名失败）

解决：OpenSSL默认未开启FIPS模式，无需额外配置，重启终端重新执行命令即可（若仍失败，重新生成一次Ed25519密钥再试）。

  

- 问题3：中文/特殊字符签名乱码

解决：手动创建to-sign.txt文件，粘贴中文/特殊字符，保存时选择「编码：UTF-8」，再执行签名命令。

  

- 问题4：签名后验证失败

解决：① 确认私钥和公钥是一对（用你之前生成的ed25519-public.pem，不要用其他公钥）；② 确认待签名文件（to-sign.txt）在签名后未被修改；③ 重新执行签名和验证命令，避免命令输入错误。

  

- 问题5：执行Base64格式签名时，提示「Explicit digest not allowed with EdDSA operations」

解决：Ed25519 属于 EdDSA 算法，不允许显式指定哈希算法，删除命令中的 `-sha256` 参数，使用正确命令：`openssl dgst -sign ed25519-private.pem to-sign.txt | openssl base64 -A`。

  

## 五、关键注意事项

  

- 私钥（ed25519-private.pem）务必妥善保管，不要泄露、不要删除，泄露会导致他人可伪造你的签名，造成安全风险。

  

- 待签名内容若有修改，需重新签名，否则验证会失败（签名与待签名内容一一对应）。

  

- OpenSSL版本需3.0.1及以上（你安装的3.6.1满足要求），低版本可能不支持Ed25519签名，可执行`openssl version`再次验证版本。

> （注：文档部分内容可能由 AI 生成）