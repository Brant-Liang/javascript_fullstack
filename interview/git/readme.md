git add .
git commit -m 'description'
git push origin master

git checkout 文件名
用暂存区的文件覆盖的工作目录下的文件

git rm --cached 文件 
将文件从暂存区中删除

git reset --hard commitID 1
将仓库中指定的更新记录恢复出来，并且

分支
git branch 查看分支
git branch 分支名   创建分支
git checkout 分支名 切换分支
git merge 来源分支 合并分支
git branch -d 分支名称 删除分支(分支合并后才允许删除) -D 强制删除 