#====================================================================================
# setup section

# location must be set to the path from the user folder (e.g.- desktop/myproject)
location="desktop/uncannyorange.github.io"

# the ssh url of your github repository (you will have to have an ssh key set up on your account) (e.g.- git@github.com:myusername/myrepo.git)
sshurl="git@github.com:uncannyorange/uncannyorange.github.io.git"
#====================================================================================

cd $location

git init

git add .

echo 
echo commiting to master ============================================================
git commit -m "Updated Master"
echo ================================================================================
echo 

git remote set-url origin $sshurl

echo pulling origin...
git pull origin
echo

echo pushing to master ==============================================================
echo 
git push -u origin master
echo ================================================================================
echo 