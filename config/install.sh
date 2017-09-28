cd ..
sudo dotnet publish
sudo mkdir -p /opt/jimbook
sudo cp -R bin/Debug/netcoreapp2.0/publish/* /opt/jimbook/
sudo cp config/nginx/default /etc/nginx/sites-available/
sudo cp config/systemd/jimbook.service /etc/systemd/system/
sudo systemctl daemon-reload
sudo systemctl enable jimbook
sudo systemctl start nginx
sudo systemctl start jimbook