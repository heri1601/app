sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv 7F0CEB10
echo 'deb http://downloads-distro.mongodb.org/repo/ubuntu-upstart dist 10gen' | sudo tee /etc/apt/sources.list.d/mongodb.list
sudo apt-get update
sudo apt-get install -y mongodb-org

#Start-Up MongoDB

sudo service mongod start

#Check MongoDB Service Status

sudo service mongod status

#Summary List of Status Statistics (Continuous)

mongostat

#Summary List of Status Statistics (5 Rows, Summarized Every 2 Seconds)

mongostat --rowcount 5 2

#Enter the MongoDB Command Line

mongo

#By default, running this command will look for a MongoDB server listening on port 27017 on the localhost interface.

#Shutdown MongoDB

sudo service mongod stop

#Restart MongoDB

sudo service mongod restart
