call npm run build --release --prefix react-seed-project
rmdir /s /q www
mkdir www
xcopy react-seed-project\build www /e
cordova run android