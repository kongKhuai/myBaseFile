

## 方法一：使用Windows自带的PowerShell

PowerShell是Windows系统强大的命令行工具，可以高效处理此类任务。

1. 1.
    
    **打开PowerShell**：
    
    - •
        
        按 `Win + R`键，输入 `powershell`，然后按回车。
        
    - •
        
        或者在VS Code中直接使用集成终端（快捷键 `` Ctrl+` ``），默认可能就是PowerShell。
        
    
2. 2.
    
    **安全预览（强烈推荐）**：
    
    在执行删除操作前，强烈建议先使用以下命令查看所有将被找到的“必看.txt”文件，确认无误后再执行删除。
    
    powershell
    
    复制
    
    ```
    Get-ChildItem -Path . -Recurse -Filter "必看.txt"
    ```
    
    这个命令会列出当前目录及其所有子目录中所有名为“必看.txt”的文件。
    
3. 3.
    
    **执行删除**：
    
    确认文件列表正确后，使用以下命令进行删除：
    
    powershell
    
    复制
    
    ```
    Get-ChildItem -Path . -Recurse -Filter "必看.txt" | Remove-Item
    ```
    
    - •
        
        `Get-ChildItem`相当于Linux中的 `find`或 `ls`，`-Recurse`参数表示递归搜索子目录。
        
    - •
        
        `Remove-Item`相当于Linux中的 `rm`。
        
    - •
        
        `|`（管道符）将前一个命令的结果传递给后一个命令处理。
        
    

## 方法二：使用Windows命令提示符（CMD）

如果您更习惯使用传统的CMD，也可以实现。

1. 1.
    
    **打开命令提示符（CMD）**：
    
    - •
        
        按 `Win + R`键，输入 `cmd`，然后按回车。
        
    
2. 2.
    
    **安全预览（强烈推荐）**：
    
    使用 `dir`命令先查看要删除的文件：
    
    cmd
    
    复制
    
    ```
    dir "必看.txt" /s
    ```
    
    `/s`参数表示包含所有子目录。
    
3. 3.
    
    **执行删除**：
    
    确认无误后，使用 `del`命令删除：
    
    cmd
    
    复制
    
    ```
    del "必看.txt" /s
    ```
    
    `/s`参数表示从所有子目录中删除指定文件。